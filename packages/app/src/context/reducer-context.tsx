import React, { ReactNode, useReducer } from 'react';

type State = {
  pageHeaderTitle: string;
  currentCompetition: string;
};

type InitContext = {
  dispatch: React.Dispatch<Partial<State>>;
} & State;

const initState: State = {
  pageHeaderTitle: '',
  currentCompetition: '',
};

const reducer = (preState: State, action: Partial<State>) => ({
  ...preState,
  ...action,
});

const ReducerContext = React.createContext<InitContext | undefined>(undefined);

export const ReducerProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <ReducerContext.Provider
      children={children}
      value={{
        dispatch,
        ...state,
      }}
    />
  );
};

export const useReducerContext = ()=>{
    const context = React.useContext(ReducerContext)
    if(!context){
        throw new Error('useReducerContext必须在ReducerContext中使用')
    }
    return context
}