import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { routes } from "./routesConfig"
import { useEffect, useState } from "react"

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />
      })}

      <Route path="*" element={<Navigate to="/notFound" replace />} />
    </Routes>
  )
}

export default AppRoutes
