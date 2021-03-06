// 定义一个规范
const shop = [
    {
        // 定义url地址
        url: 'type/findByMain',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name:'findByMain',
        // 定义方法的作用
        title: '获取商品所有主类 无参数'
    },
    {
        // 定义url地址
        url: 'type/findByAssistant',
        // 定义请求方式
        method: 'post',
        // 定义请求的方法名
        name:'findByAssistant',
        // 定义方法的作用
        title: '（id）  获取某个主类下所有的副类'
    },
    {
        // 定义url地址
        url: 'item/findById',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name:'findById',
        // 定义方法的作用
        title: '根据商品id获取商品（商品id）'
    },
    {
        // 定义url地址
        url: 'item/findByType',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name:'findByType',
        // 定义方法的作用
        title: '(page,row,id)  根据商品类型分页获取商品（当前页，每页条数，类型id）'
    },
    {
        // 定义url地址
        url: 'item/findByName',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name:'findByName',
        // 定义方法的作用
        title: '(page,row,name)  根据商品名称模糊查询商品，分页获取商品（当前页，每页条数，name）'
    }
]

// 默认导出
export default shop;