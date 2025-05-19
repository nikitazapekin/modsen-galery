import axios from "axios"
export const API_URL = import.meta.env.VITE_BASE_URL
const accessToken = import.meta.env.VITE_ACCESS_TOKEN
const $api = axios.create({
  baseURL: API_URL,
})
$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Client-ID ${accessToken}`

  return config
})

export default $api
