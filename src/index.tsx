import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { PageContextProvider } from './context/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </React.StrictMode>
)
