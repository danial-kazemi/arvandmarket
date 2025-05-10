'use client'
import React from 'react'

const CountContext = React.createContext();
export default function CountContextProvider({children}) {

  return (
    <CountContext.Provider value={12345}>
        {children}
    </CountContext.Provider>
  )
}

export function useCountContext() {
    return React.useContext(CountContext)
}
