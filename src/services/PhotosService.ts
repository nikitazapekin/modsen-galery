import $api from "../http"
import { AxiosResponse } from "axios"
import { UnsplashTopic, UnsplashPhoto } from "./types"

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
  ): Promise<AxiosResponse<UnsplashPhoto[]>> {
    return $api.get<UnsplashPhoto[]>(`/topics/${topic}/photos?page=${page}&per_page=${limit}`)
  }
}
