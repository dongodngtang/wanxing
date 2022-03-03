


declare interface Window {
  sendCustomE<ResponseData = any>(type: string, data?: any): Promise<ResponseData>;
  recvCustomE<T>(type:string,callback:(data:T)=>void):void;
}