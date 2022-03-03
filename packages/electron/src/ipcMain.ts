import eventer from "./utils/eventer";
import { getProcessList } from "./utils";

type CallBack = (...args:any[])=>any

const listen = (key:string | symbol, callback:CallBack) => {
    eventer.on(key, async (args) => {
      try {
        const res = await callback(args.data);
        console.log("main process recive", args);
        if (args && typeof args === "object" && args.replyKey) {
          // 回复渲染进程
          eventer.emit(args.replyKey, res);
        }
      } catch (error) {}
    });
  };

  const listenList = [
    {
      key: "getProcessList",
      callback: async (data:any) => {
        try {
          const res = await getProcessList();
          return res;
        } catch (error) {
          return null;
        }
      },
    },
  ];
  
  const initListener = () => {
    listenList.forEach((item) => listen(item.key, item.callback));
  };
  initListener();