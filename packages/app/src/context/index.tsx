import React from 'react'
import {AuthProvider} from './auth-context'

export const AppProviders:React.FC = ({children})=>{

    return <AuthProvider>
        {children}
    </AuthProvider>
}