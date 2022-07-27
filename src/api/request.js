import axios from 'axios'
import {BASE_URL} from '@/api/config'
// import {Notify, Toast} from 'vant';


// 超时时间
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 50000
})


// http请求拦截器
instance.interceptors.request.use(config => {
    return config
})

// http响应拦截器
instance.interceptors.response.use(
    (res) => {
        return res
    },
    (error) => {
        return Promise.reject(error.response)
    }
)

export default instance