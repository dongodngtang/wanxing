declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare interface DateConstructor {
  _now: () => number;
}
declare interface Window {
  sendCustomE<ResponseData = any>(type: string, data?: any): Promise<ResponseData>;
  recvCustomE<T>(type:string,callback:(data:T)=>void):void;
}