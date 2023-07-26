import {
  CREATE_REQUEST_TOKEN_URL,
  CREATE_SESSION_URL,
  VALIDATE_WITH_LOGIN_URL,
  ACCOUNT_URL
} from '@/constants/endpoints'
import { Axios } from '@/utils/Axios.js'
import { LOGIN, USER } from '@/constants/provide-keys.js'
import { computed, reactive } from 'vue'
const USER_ID = 'user_id'

import { useToast } from 'vue-toast-notification'
const $toast = useToast()

export default function useAuth(app) {
  const userData = reactive({
    value: JSON.parse(sessionStorage.getItem(USER_ID) || "null"),
  });
  
  const user = computed({
    get: () => userData.value,
    set: (value) => {
      sessionStorage.setItem(USER_ID, JSON.stringify(value));
      userData.value = JSON.parse(JSON.stringify(value));
    },
  });

  async function createRequestToken() {
    try {
      const { data } = await Axios.get(CREATE_REQUEST_TOKEN_URL)
      if (!data.success) {
        throw new Error('Creating request token failed.')
      }
      return data.request_token
    } catch (error) {
      console.error(error)
    }
  }

  async function validateWithLogin(requestToken, username, password) {
    try {
      const { data } = await Axios.post(VALIDATE_WITH_LOGIN_URL, {
        username: username,
        password: password,
        request_token: requestToken
      })
      if (!data.success) {
        throw new Error('Authorizing the request token failed.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function createSession(requestToken) {
    try {
      const { data } = await Axios.post(CREATE_SESSION_URL, {
        request_token: requestToken
      })
      if (!data.success) {
        throw new Error('Creating session failed.')
      }
      sessionStorage.setItem('session_id', data.session_id)
    } catch (error) {
      console.error(error)
    }
  }

  async function getAccountData() {
    const sessionId = sessionStorage.getItem('session_id')
    if (!sessionId) {
      throw new Error('No session ID.')
    }
    const params = new URLSearchParams()
    params.append('session_id', sessionId)
    try {
      const { data } = await Axios.get(`${ACCOUNT_URL}?${params}`)
      if (!data.id) {
        throw new Error('Getting user info failed.')
      }
      sessionStorage.setItem('user_id', data.id)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  async function login(username, password) {
    const requestToken = await createRequestToken()
    await validateWithLogin(requestToken, username, password)
    await createSession(requestToken)

    user.value = await getAccountData()
    console.log(user.value);
  }

  app.config.globalProperties.$router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      if (!user.value) {
        $toast.error('Please Sign in first')
        next(false)
      } else {
        next()
      }
    } else {
      next()
    }
  })

  app.provide(USER, user)
  app.provide(LOGIN, login)
}
