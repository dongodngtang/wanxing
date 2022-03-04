import React, { useState, useCallback } from 'react';

interface InitContext {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = React.createContext<InitContext | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const login = useCallback(() => {
    // todo
    // 设置token、用户的信息等
    setIsLogin(true);
  }, []);

  const logout = useCallback(() => {
    // todo
    // 清理登录的token、用户的信息等
    setIsLogin(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        login,
        logout,
      }}
      children={children}
    />
  );
};

export const useAuth =()=>{
    const context = React.useContext(AuthContext)
    if(!context){
        throw new Error('useAuth必须在AuthProvider中使用')
    }
    return context
}
