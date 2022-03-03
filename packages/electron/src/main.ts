import { app, BrowserWindow } from "electron";
import * as path from 'path'
import './ipcMain'

class Main {
  private mainWindow: BrowserWindow;

  init() {
    app.on("ready", this.createWindow);
    app.on("window-all-closed", this.onWindowAllClosed);
    app.on("activate", this.onActivate);
  }

  private onWindowAllClosed() {
    if (process.platform !== "darwin") {
      app.quit();
    }
  }

  private onActivate() {
    if (!this.mainWindow) {
      this.createWindow();
    }
  }

  private createWindow() {
    this.mainWindow = new BrowserWindow({
      height: 720,
      width: 1024,
      title: `WanXing`,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload:path.join(__dirname,'./preload.js')
      },
    });

    if (app.isPackaged) {
      this.mainWindow.loadFile("../dist/index.html");
      return;
    }
    this.mainWindow.webContents.openDevTools();
    this.mainWindow.loadURL(`http://localhost:8000`);
  }
}

(new Main()).init()
