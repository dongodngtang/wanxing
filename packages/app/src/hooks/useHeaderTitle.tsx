import { useReducerContext } from "@/context/reducer-context";
import { useEffect } from "react";
/**
 * 设置标题的名字
 */
export const useHeaderTitle = (title:string)=>{
    const {dispatch} = useReducerContext()

    useEffect(()=>{
        dispatch({pageHeaderTitle:title})
    },[title])
}