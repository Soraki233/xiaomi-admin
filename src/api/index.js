import axios from './request'

export default {
    getVerifyCodeApi() {
        return axios.get("/admin/getCaptcha")
    },
    loginApi(data) {
        return axios.post("/admin/login",data)
    }
}