import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary"
import { theme } from "@/constants/theme"
import AppRoutes from "@/utils/routes"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
