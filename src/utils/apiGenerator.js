//导入axios
import Axios from 'axios'

import {
    Message
} from 'element-ui'

// 定义一个 api 生成器
class ApiGenerator { // es6语法
    // 类的构造函数
    constructor(config) {
        // 定义一个全局config
        this.config = config


        // console.log('类的构造函数', 111)
        // 在构造函数中配置 axios

        //将 axios 挂载到 vue实例属性上
        // Vue.prototype.$api = Axios;
        
        // 配置aixos 的默认请求前缀
        console.log(this.config.BASE_URL.zeng)
        Axios.defaults.baseURL = this.config.BASE_URL.zeng
        // 配置aixos 在每次请求时都带 session值
        Axios.defaults.withCredentials = this.config.WITHCORS
        // 配置axios的请求超时时间
        Axios.defaults.timeout = this.config.TIMEOUT
        // 配置axios在post请求的时候请求体以ajax的形式请求
        // 默认post请求头
        Axios.defaults.headers.post['Accept'] = 'application/json' // 设置post 响应为 json
        Axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest' // 设置post请求为ajax请求



        // 定义一个axios的拦截器
        Axios.interceptors.request.use(function (req) {// 请求拦截成功的函数  req 当前请求的值
            // 给所有的请求带上一个默认的参数
            // req.params = { 
            //   ...req.params,
            //    akun: 'sz' } //为了不影响原本的参数 复制一份之前的参数
            return req;
        }, function (err) {// 请求拦截失败的回调函数
            Promise.reject(err) // 返回 .catch方法

        })

        Axios.interceptors.response.use(function (res) {// 响应拦截成功的函数  req 当前请求的值
            if (res.data.code === 0) {
                // 响应成功 去除 axios 的第一层data 再去除服务器返回数据的一层data
                return res.data.data

            } else {// 出现错误 提示出错
                // 返回一个错误的promise
                elementUi.Message.error(res.data.msg)
                return Promise.reject(res.data.msg)
            }

        }, function (err) {// 请求拦截失败的回调函数
            Promise.reject(err) // 返回 .catch方法

        })

        // 获得__method的返回值
        this.method = this.__method()
        console.log(this.method)
    }

    // // 类方法
    // a(){

    // }

    // // 静态方法

    // static b(){

    // }

    // // 定义私有方法
    // __siiyou(){

    // }

    // 生成api的方法
    create(){
        // 定义一个模块对象
        let modules = {}
        // 循环所有传递过来的module
        // console.log(this.config.modules)
        // 遍历对象
        for(let modules in this.config.modules){
            let modulesApi = {} // 用来保存每个api的模块
            this.config.modules[modules].forEach(item => {
                console.log(item)
                // 定义模块对象
                let moduleApi = (params) =>{
                    item.params = params
                    // axios 方法v
                    // 判断接口规范是否正确
                    // 检测请求方法 是否定义
                    if(this.method[item.method] === undefined){
                        console.error('该方法未定义',item.method)
                        return
                    }
                    return this.method[item.method](item)
                };
                // 将所有的模块保存到大模块中
                modules[item.name] = modulesApi
            });

            return modules

        }
    }


    // 定义一个发送请求的方法 私有的
    __method(){
        return {
            get(opt){
                // 定义get需要的参数
                let params = opt.params || {}
                Axios({
                    method: 'get',
                    url: opt.url, // 请求地址
                    responseType: 'json', // 请求返回值类型
                    params// get请求参数
                })
            },
            post(opt){
                // 定义post需要的参数
                let data = opt.params || {}
                Axios({
                    method: 'post',
                    url: opt.url, // 请求地址
                    data// post请求参数
                })
            }
        }
    }

}
import { Form } from 'element-ui'

export default ApiGenerator // 导出api生成器