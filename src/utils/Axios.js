import axios from 'axios'
import { API_BASE_URL, API_VERSION, API_READ_ACCESS_TOKEN } from '@/constants/api-constants.js'

const basicConfigs = {
  baseURL: `${API_BASE_URL}/${API_VERSION}`,
  headers: {
    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
  },
  timeout: 5000
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
