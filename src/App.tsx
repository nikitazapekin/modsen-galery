import { useState } from "react"
import Category from "./pages/Category/Category"
import { Button } from "@components/Button/Button"
import AppRoutes from "@/routes/routes"
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
