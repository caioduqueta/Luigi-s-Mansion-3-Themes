import { createContext, ReactNode, useState } from 'react'

interface PageContextProviderProps {
  children: ReactNode
}

interface PageContextProps {
  PageTheme: string;
  ChangeTheme: (theme: string) => void;
}

export const PageContext = createContext({} as PageContextProps)

export function PageContextProvider({ children }: PageContextProviderProps) {

  const [PageTheme, setPageTheme] = useState("Light");

  function ChangeTheme(theme: string) {
    setPageTheme(theme)
  }

  return (
    <PageContext.Provider
      value={{
        PageTheme, ChangeTheme
      }}
    >
      {children}
    </PageContext.Provider>
  )
}
