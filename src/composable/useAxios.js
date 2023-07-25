// useAxios.js (composition function)
import { ref, onMounted } from 'vue'
import { Axios } from '@/utils/axios.js'
import { LOADING_VISIBILITY } from '@/constants/provide-keys.js'
import { inject } from 'vue'

const useAxios = (url, options = {}) => {
  const { updateLoadingVisibility } = inject(LOADING_VISIBILITY)

  const data = ref(null)
  const error = ref(null)

  const fetchData = async (url) => {
    updateLoadingVisibility(true)
    try {
      const { method = 'get', data: requestData, ...config } = options
      const response = await Axios[method](url, requestData, config)
      data.value = response
    } catch (err) {
      error.value = err
    } finally {
      updateLoadingVisibility(false)
    }
  }

  onMounted(() => {
    fetchData(url)
  })

  return {
    data,
    error,
    dofetch: fetchData
  }
}

export default useAxios
