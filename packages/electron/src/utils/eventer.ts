/**
 * 跨进程无障碍通信
 */
import { EventEmitter } from "events";
import { ipcMain, ipcRenderer, webContents } from "electron";

type EventName = string | symbol;

class Eventer {
  private instance: EventEmitter;

  constructor() {
    this.instance = new EventEmitter();
    this.instance.setMaxListeners(100);
    this.initEventPipe()
  }

  initEventPipe() {
    if (ipcRenderer) {
      ipcRenderer.on("__eventPipe", (e, { eventName, eventArgs }) => {
        this.instance.emit(eventName, eventArgs);
      });
    }
    if (ipcMain) {
      ipcMain.handle("__eventPipe", (e, { eventName, eventArgs }) => {
        this.instance.emit(eventName, eventArgs);
        // 转发给其他的渲染进程
        webContents.getAllWebContents().forEach((content) => {
          if (content.id !== e.sender.id) {
            content.send("__eventPipe", { eventName, eventArgs });
          }
        });
      });
    }
  }

  on(eventName: EventName, callback: (...args: any[]) => void) {
    this.instance.on(eventName, callback);
  }
  emit(eventName: EventName, eventArgs: any) {
    this.instance.emit(eventName, eventArgs);
    if (ipcMain) {
      // 发给所有的渲染进程
      webContents.getAllWebContents().forEach((content) => {
        content.send("__eventPipe", { eventName, eventArgs });
      });
    }
    if (ipcRenderer) {
      // 发给主进程
      ipcRenderer.invoke("__eventPipe", { eventName, eventArgs });
    }
  }
  off(eventName: EventName, callback: (...args: any[]) => void) {
    this.instance.off(eventName, callback);
  }
  once(eventName: EventName, callback: (...args: any[]) => void) {
    this.instance.once(eventName, callback);
  }
}

const eventer = new Eventer();
export default eventer
