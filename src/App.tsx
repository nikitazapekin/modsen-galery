import { useState } from "react"
import Category from "./pages/Category/Category"

import AppRoutes from "@/utils/routes"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { theme } from "@/constants/theme"
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary"
function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
