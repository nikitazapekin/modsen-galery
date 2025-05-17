import { useState } from "react"
import Category from "./pages/Category/Category"

import AppRoutes from "@/routes/routes"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { theme } from "@utils/theme"
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
