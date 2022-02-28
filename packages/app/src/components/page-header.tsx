import {useState,useEffect} from 'react'
import styled from '@emotion/styled'
import {useAuth} from '@/context/auth-context'
import {useReducerContext} from '@/context/reducer-context'
import {Button} from 'antd'
import {useHistory,useLocation} from 'umi'

export const PageHeader = ()=>{
    const [showBack,setShowBack] = useState(true)
    const {pageHeaderTitle} = useReducerContext()
    const history = useHistory()
    const {logout} = useAuth()
    const goback = ()=> history.goBack()
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname === '/'){
            setShowBack(false)
        }else if(!showBack){
            setShowBack(true)
        }
    },[location])

    return <PageHeaderContainer>
         <div>
        {showBack && (
          <Button type="link" onClick={goback}>
            返回
          </Button>
        )}
        <span>在线赛事系统</span>
      </div>
      <h1>{pageHeaderTitle}</h1>
      <Button type="link" onClick={logout}>
        退出
      </Button>
    </PageHeaderContainer>

}

const PageHeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: black;
    padding: 0 2rem;
    & > *{
        color:white;
    }
    h1{
        margin: 0;
    }
`