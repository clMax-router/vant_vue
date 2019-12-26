// 定义一个规范
const job = [
    {
        // 定义url地址
        url: 'job/Lists',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name:'getJobList',
        // 定义方法的作用
        title: '获得职位列表(带分页)'
    },
    {
        // 定义url地址
        url: 'job/coll',
        // 定义请求方式
        method: 'post',
        // 定义请求的方法名
        name:'jobColl',
        // 定义方法的作用
        title: '收藏与取消职位'
    },
    {
        // 定义url地址
        url: 'job/info',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name:'jobInfo',
        // 定义方法的作用
        title: '查看职位详情'
    },
    {
        // 定义url地址
        url: 'job/type',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name:'jobType',
        // 定义方法的作用
        title: '查询职位类别'
    }
]

// 默认导出
export default job;