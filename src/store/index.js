import { createStore } from 'vuex'
// vue2.0创建仓库--new Vuex.Store({})
// vue3.0创建仓库-- createStore({})
// export default createStore({
//   state: {
//     // 数据
//     userName: '张三'
//   },
//   getters: {
//     // vuex的计算属性
//     newName (state) {
//       return state.userName + '111'
//     }
//   },
//   mutations: {
//     // 修改数据
//     updateName (state, name) {
//       state.userName = name
//     }
//   },
//   actions: {
//     // 请求数据
//     updateName (cxt) {
//       setTimeout(() => {
//         cxt.commit('updateName', '王二')
//       }, 1000)
//     }
//   },
//   modules: {
//     // 分模块
//   }
// })

// A模块
const moduleA = {
  state: {
    username: 'moduleA'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    // 修改数据
    updateName (state, name) {
      state.username = name
    }
  }
}
// B模块
const moduleB = {
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    // 修改数据
    updateName (state, name) {
      state.username = name
    }
  },
  actions: {
    // 请求数据
    updateName (cxt) {
      setTimeout(() => {
        cxt.commit('updateName', '王二')
      }, 1000)
    }
  }
}

export default createStore({
  modules: {
    moduleA,
    moduleB
  }
})
