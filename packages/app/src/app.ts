import React, { ReactNode } from 'react'
import {AppProviders} from '@/context'

// 运行时配置
function sendMsg(){
    if(window.sendCustomE){
        window.sendCustomE('getProcessList').then(res=>{
            console.log(res)
        })  
    }
}
sendMsg()
// 修改react-dom渲染时的根组件。使用React useContext代替redux
export const rootContainer = (container:ReactNode)=>{
    return React.createElement(AppProviders,null,container)
}