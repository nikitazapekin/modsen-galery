import $api from "../http"
import { AxiosResponse } from "axios"
import { UnsplashTopic } from "./types"

export default class PhotosService {
  static async getRandom(page: number, limit: number): Promise<AxiosResponse<any>> {
    return $api.get<any>(`/photos/random?count=${limit}&page=${page}`)
  }
  static async getPhotoTopics(): Promise<AxiosResponse<UnsplashTopic[]>> {
    return $api.get<UnsplashTopic[]>(`/topics`)
  }
  static async getTopicsPhoto(
    page: number,
    limit: number,
    topic: string,
  ): Promise<AxiosResponse<UnsplashTopic[]>> {
    return $api.get<UnsplashTopic[]>(`/topics/${topic}/photos?page=${page}&per_page=${limit}`)
  }
}
