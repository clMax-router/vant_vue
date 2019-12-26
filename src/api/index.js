// 用来聚合所有接口
// 引入网络请求地址
import BASE_URL from '@/config/gateway.js'
console.log(BASE_URL)

// 引入job模块
import job from './models/job.js'
import users from './models/users.js'


// 引入api生成器
import ApiGenerator from '@/utils/apiGenerator.js'


// 定义模块对象 聚合所有模块
const modules = {
    job,
    ApiGenerator,
    users
}

// 定义其他的配置
const CONFIG = {
    BASE_URL,// 请求根路径
    TIMEOUT: 10000,//请求超时时间
    WITHCORS: true,// 请求是否携带session验证
    modules// 配置所有模块信息
}

var apiGenerator =  new ApiGenerator(CONFIG) // 实例
var api = apiGenerator.create()
export default api