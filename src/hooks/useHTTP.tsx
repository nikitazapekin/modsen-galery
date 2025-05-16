import { useState, useCallback } from "react"

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {
    setLoading(true)
    setError(null)

    try {
      if (body && typeof body === "object" && !(body instanceof FormData)) {
        body = JSON.stringify(body)
        headers["Content-Type"] = "application/json"
      }

      const response = await fetch(url, { method, body, headers })
      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.message || "Что-то пошло не так")
      }

      setData(responseData)
      return responseData
    } catch (err) {
      setError(err.message || "Ошибка запроса")
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const clear = useCallback(() => {
    setError(null)
    setData(null)
  }, [])

  return { loading, error, data, request, clear }
}
