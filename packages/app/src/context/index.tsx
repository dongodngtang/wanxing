import React from 'react';
import { AuthProvider } from './auth-context';
import { ReducerProvider } from './reducer-context';

export const AppProviders: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ReducerProvider>{children}</ReducerProvider>
    </AuthProvider>
  );
};
