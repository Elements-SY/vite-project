import axios from 'axios'
import type { AxiosError, AxiosResponse } from 'axios'
import router from '@/router'
import { ElMessageBox } from 'element-plus'

enum Msgs {
  '操作成功' = 200,
  '无权操作' = 401,
  '系统内部错误' = 500
}

// 避免多个接口401弹出多个弹框
let isRefreshing = false

const { DEV, VITE_PROXY_PORT, VITE_PROXY_URL } = import.meta.env
// 创建http实例
const instance = axios.create({
  baseURL: DEV ? VITE_PROXY_PORT : VITE_PROXY_URL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  config.headers = config.headers || {}
  // const token = getToken()
  // if (token) {
  //   config.headers['User-Token'] = token
  // }
  return config
})

// 添加响应拦截器
instance.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err: AxiosError) => {
    const { response } = err
    if (!response) return Promise.reject(err)
    const errCodes = [401, 403, 500]
    const code = response.status
    if (errCodes.includes(response.status)) {
      // removeUserInfo()
      ElMessageBox({
        message: Msgs[code],
        title: '提示'
      })
        .then(() => {
          router.push('Login')
        })
        .finally(() => (isRefreshing = false))
      return Promise.reject(err)
    }
    ElMessage(Msgs[code] || '请求失败')
    return Promise.reject(err)
  }
)

const http = {
  get: (url = '', params = {}) => instance.get(url, { params }),
  post: (url = '', data = {}, config = {}) => instance.post(url, data, config),
  put: (url = '', data = {}) => instance.put(url, data),
  delete: (url = '', data = {}) => instance.delete(url, data),
  patch: (url = '', data = {}) => instance.patch(url, data)
}

export default http
