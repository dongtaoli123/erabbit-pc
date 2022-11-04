import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
// 三个模块
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
export default createStore({
  modules: {
    user,
    cart,
    category
  },
  // 配置插件
  plugins: [
    // 默认存储在localStorage
    createPersistedstate({
      key: 'erabbit-client-pc-store', // 本地存储名字
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
