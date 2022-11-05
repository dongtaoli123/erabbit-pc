// 分类模块
import { topCategory } from '@/api/constants'
import { getALLCategoryAPI } from '@/api'
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合 依赖topCategory重新设置
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // 修改分类函数
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    // 定义show和hide函数 控制当前分类的二级分类显示和隐藏
    show (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = true
    },
    hide (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = false
    }
  },
  // 获取分类函数
  actions: {
    async getList ({ commit }) {
      // 获取分类数据
      const data = await getALLCategoryAPI()
      // 给一级分类加上一个控制二级分类显示隐藏的数据open
      data.result.forEach(item => { item.open = false })
      console.log(data)
      commit('setList', data.result)
    }
  }
}
