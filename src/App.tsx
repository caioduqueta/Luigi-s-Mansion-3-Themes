import { GlobalStyle } from "./Style/global"
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Banner } from "./components/Banner"
import { FirstBlock } from "./components/FirstBlock"
import { SecondBlock } from "./components/SecondBlock"
import { GitHubBlock } from "./components/GitHubBlock"
import { Footer } from "./components/Footer"
import { useContext } from "react"
import { PageContext } from "./context/context"
import { Theme } from "./Theme/Themes"

export function App() {

  const { PageTheme } = useContext(PageContext)

  return (
    <ThemeProvider theme={PageTheme === 'Light' ? Theme.Light : Theme.Dark}>
       <Header />
      <main>
         <Banner />
         <FirstBlock />
         <SecondBlock />
         <GitHubBlock />
      </main>
       <Footer />
       <GlobalStyle />
    </ThemeProvider>
  )
}
