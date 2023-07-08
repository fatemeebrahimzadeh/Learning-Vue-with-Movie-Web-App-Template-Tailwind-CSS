import axios from 'axios'
import { API_BASE_URL, API_VERSION } from '@/constants/api-constants.js'

const basicConfigs = {
  baseURL: `${API_BASE_URL}/${API_VERSION}`
}

export class AxiosClass {
  static instance

  static getInstance(configs = basicConfigs) {
    if (!this.instance) {
      this.instance = axios.create(configs)
    }
    return this.instance
  }

  static setResponseInterceptor(responseHandler, reponseErrorHandler) {
    this.instance.interceptors.response.use(responseHandler, reponseErrorHandler)
  }

  static setRequestInterceptor(requestHandler, requestErrorHandler) {
    this.instance.interceptors.request.use(requestHandler, requestErrorHandler)
  }
}

export const Axios = AxiosClass.getInstance()

AxiosClass.setRequestInterceptor((config) => {
  config.headers['Authorization'] = 'Bearer ' + import.meta.env.VITE_API_READ_ACCESS_TOKEN
  config.headers['accept'] = 'application/json'
  return config
})
