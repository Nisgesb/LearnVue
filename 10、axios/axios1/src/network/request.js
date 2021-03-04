import axios from 'axios'

// export function request(config) {
//   const testRequest = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
//   })

//   return testRequest(config)
// }

export function jsonTest(config) {
  return axios.create({
    baseURL: './network'
  })(config)
}