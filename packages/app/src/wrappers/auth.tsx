import {Redirect} from 'umi'
import React from 'react'
import {useAuth} from '@/context/auth-context'
// ts 类型收缩之 类型断言
export default (({children})=>{
    const { isLogin } = useAuth();
    console.log('%c 🥒 isLogin: ', 'font-size:12px;background-color: #33A5FF;color:#fff;', isLogin);

    if(isLogin){
        return children
    }else{
        return <Redirect to='/login'/>
    }
}) as React.FC
