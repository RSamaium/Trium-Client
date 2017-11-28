import Token from './token'
import Http from 'axios'

Token.load()

Http.interceptors.request.use(function (config) {
  if (/api\./.test(config.url)) {
    return config
  }
  if (Token.exist()) {
    config.headers['x-access-token'] = Token.get()
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default {}