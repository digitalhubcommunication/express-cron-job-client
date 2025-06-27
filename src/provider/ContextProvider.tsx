'use client'

import React, { createContext, useState, ReactNode, useContext } from 'react';

interface ContextType {
  page: number; // Replace 'any' with the actual type of your user object
  setPage: (page: number) => void;
  
}

const AuthContext = createContext<ContextType | null>(null);

// Hook to access the context
export const useContextData = () => {
    return useContext(AuthContext) as ContextType;
  };

// AuthProvider component
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(0); 

 
  const value = {
    page,
    setPage
   
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
