// 1.初始化axios实例
// 2.请求拦截器 如果有token 进行头部带token
// 3.响应拦截器  剥离无效数据 处理token失效
// 4.导出一个函数 调用当前的axios实例发请求  返回值Promise
import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 导出基准地址  因为有的地方不是通过axios发请求的地方需要用到基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  config => { // config 里面装的是baseURL/data/headers/method等
    // 拦截的业务逻辑
    // 进行请求配置的修改
    // 如果本地有token 就在头部携带
    const { profile } = store.state.user
    // console.log(profile.token)
    // 判断是否有token
    if (profile.token) {
      // 设置token
      config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
  }, err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
//  res => res.data  取出data数据 将来调用接口的时候直接拿到的就是后台的数据
instance.interceptors.response.use(
  res => res.data, err => {
    // 401状态码 进入该函数
    if (err.response && err.response.status === 401) {
      // 清空无效用户信息
      // 跳转到登录页
      // 跳转传参--未遂地址  在登录页面
      store.commit('user/setUser', {})
      // 在组件里这样获取当前路由地址
      // 比如`/user?a=10` $route.path === /user   $route.fullPath === /user?a=10
      // 在js模块中需要这样获取
      // router.currentRoute.value.fullPath就是当前路由地址
      // 因为router.currentRoute是ref响应式数据  所以需要.value下
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
      // encodeURIComponent  是转换url编码  防止解析地址出问题
      router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
  }
)

// 请求工具函数
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // []--设置一个动态参数 里面可以写js表达式 js表达式执行的结果当作key
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
