import axios from 'axios'

class HttpRequest {
  constructor () {
    this.baseUrl = 'http://localhost:8080/'
    this.queue = {}
  }
  getInsideConfig (options) {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
    // config.headers['Authorization'] = token
    return config
  }
  //   destroy (url) {
  //   }
  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      // this.destroy(url)
      const { data, status, headers } = res
      let { code, msg } = res.data
      if (code === 200 && msg !== 'OK' && msg !== 'ok') {  
      }
      return { data, status, headers }
    }, error => {
      // this.destroy(url)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(options), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
const request = new HttpRequest()
export default request
