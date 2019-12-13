import axios from 'axios'
import { Notify, LocalStorage } from 'quasar'
const API_URL = 'http://localhost:8000/api'

class RestApi {
  instance = void 0
  uploadinstance = void 0
  __token = void 0
  constructor () {
    this.instance = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.token = LocalStorage.getItem('token')
  }
  config ({ router }) {
    let that = this
    this.instance.interceptors.request.use(function (config) {
      config.headers.Authorization = 'Bearer ' + that.token
      return config
    }, function (error) {
      return Promise.reject(error)
    })

    this.instance.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      if (error.response.status === 401) {
        Notify.create({
          color: 'red-5',
          textColor: 'white',
          position: 'top',
          icon: 'fas fa-exclamation-triangle',
          message: error.response.data.message
        })
        LocalStorage.remove('token')
        LocalStorage.remove('user')
        if (router.currentRoute.name !== 'Login') {
          router.push('/')
        }
        return Promise.reject(error)
      }
      let data = error.response.data || {}
      let message = data.message
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        position: 'top',
        icon: 'fas fa-exclamation-triangle',
        message: message
      })
      return Promise.reject(error)
    })
  }

  async getMyProfile (params) {
    return this.instance.get('/my-profile', params)
  }
  async updateUserInfo (params) {
    return this.instance.post('/update-profile', params)
  }

  async sendVerifyEmail (params) {
    return this.instance.post('/sendVerifyEmail', params)
  }
  async sendVerifyPhone (params) {
    return this.instance.post('/sendVerifyPhone', params)
  }
  async uploadUserAvatar (params, headers) {
    return this.instance.post('/uploadUserAvatar', params, headers)
  }
  async getBuyers (params) {
    return this.instance.post('/get-buyers', params)
  }
  async getBuyerInfo (id) {
    return this.instance.get('/get-buyer-by-id?buyerID=' + id)
  }
  async createBuyer (params) {
    return this.instance.post('/create-buyer', params)
  }
  async updateBuyer (params) {
    return this.instance.post('/update-buyer', params)
  }
  async removeBuyer (params) {
    return this.instance.post('/remove-buyer', params)
  }
  async registerUser (params) {
    return this.instance.post('/registerUser', params)
  }
  async login (params) {
    let response = await this.instance.post('/loginUser', params)
    this.token = response.data.token
    return response
  }
  async forgotPassword (params) {
    return this.instance.post('/forgotPassword', params)
  }
  async resetPassword (params) {
    return this.instance.post('/resetPassword', params)
  }
  async confirmUser (params, token) {
    this.token = token
    return this.instance.post('/confirmUser', params)
  }
}

const api = new RestApi()

export default ({ Vue, router }) => {
  api.config({ router })
  Vue.prototype.$api = api
}
export { api }
