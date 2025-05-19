import { AxiosResponse } from "axios"

import $api from "@/http/index"

import { UnsplashPhoto, UnsplashSearchResponse, UnsplashTopic } from "./types"

export default class PhotosService {
  static async getRandom(limit: number): Promise<AxiosResponse<UnsplashPhoto[]>> {
    return $api.get<UnsplashPhoto[]>(`/photos/random?count=${limit}`)
  }
  static async getPhotoTopics(): Promise<AxiosResponse<UnsplashTopic[]>> {
    return $api.get<UnsplashTopic[]>(`/topics?per_page=12`)
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
