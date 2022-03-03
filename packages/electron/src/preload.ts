import eventer from "./utils/eventer";

console.log('预加载js...')
function sendCustomE<T>(type: string, data?: any): Promise<T> {
  const replyKey = `${type}_${Math.floor(Math.random() * 10e6)}`;
  eventer.emit(type, { data, replyKey });
  return new Promise((resolve) => {
    console.log(replyKey);
    eventer.once(replyKey, (res) => {
      resolve(res);
    });
  });
}

function recvCustomE<T>(type: string, callback: (...args: any[]) => T) {
  eventer.on(type, callback);
}

window.sendCustomE = sendCustomE;
window.recvCustomE = recvCustomE;
