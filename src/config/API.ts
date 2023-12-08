import axios from 'axios'

//? Base URL
axios.defaults.baseURL = process.env.VITE_PRODUCT_BASE_URL

//? request
axios.interceptors.request.use(
  async config => {
    if (typeof window !== 'undefined') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      config.headers['Accept'] = '*/*'
      config.headers['Accept-Language'] = 'en'
    }
    return config
  },
  err => {
    if (err) {
      console.error('Something went wrong.')
    }
    return Promise.reject(err)
  },
)

//? response
axios.interceptors.response.use(
  res => res,
  error => {
    if (axios.isCancel(error)) {
      // request canceled.
      console.error('Request has been canceled by user.')
    } else if (error && typeof error.response === 'undefined') {
      console.error('Something went wrong.')
    } else {
      const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      if (!expectedError) {
        console.error('Something went wrong.')
      }
    }
    return Promise.reject(error)
  },
)

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  headers: axios.defaults.headers,
}
