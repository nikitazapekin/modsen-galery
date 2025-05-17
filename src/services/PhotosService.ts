import $api from "../http"
import { AxiosResponse } from "axios"
import { UnsplashTopic, UnsplashPhoto, UnsplashSearchResponse } from "./types"

export default class PhotosService {
  static async getRandom(page: number, limit: number): Promise<AxiosResponse<UnsplashPhoto[]>> {
    return $api.get<UnsplashPhoto[]>(`/photos/random?count=${limit}&page=${page}`)
  }
  static async getPhotoTopics(): Promise<AxiosResponse<UnsplashTopic[]>> {
    return $api.get<UnsplashTopic[]>(`/topics`)
  }
  static async getTopicsPhoto(
    page: number,
    limit: number,
    topic: string,
    orderBy: "relevant" | "latest" = "latest",
  ): Promise<AxiosResponse<UnsplashPhoto[]>> {
    return $api.get<UnsplashPhoto[]>(
      `/topics/${topic}/photos?page=${page}&per_page=${limit}&order_by=${orderBy}`,
    )
  }
  static async searchPhotos(
    page: number,
    limit: number,
    query: string,
    orderBy: "relevant" | "latest" = "relevant",
  ): Promise<AxiosResponse<UnsplashSearchResponse>> {
    return $api.get<UnsplashSearchResponse>(
      `/search/photos?page=${page}&per_page=${limit}&query=${query}&order_by=${orderBy}`,
    )
  }
}
