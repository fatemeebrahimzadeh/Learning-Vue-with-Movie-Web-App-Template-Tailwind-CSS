import { API_IMAGE_BASE_URL } from '@/constants/api-constants.js'

export function useImage() {
  const getMovieImageUrl = (size, path) => `${API_IMAGE_BASE_URL}${size}${path}`

  return {
    getMovieImageUrl
  }
}
