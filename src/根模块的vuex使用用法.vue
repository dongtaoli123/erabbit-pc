<template>
  <!-- vue2.0需要根元素 vue3.0可以是代码片段，就是可以多个根标签 -->
  <div>
    <p>{{$store.state.userName}}</p>
    <p>{{$store.getters.newName}}</p>
    <button @click="changeName">改名字</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    // 使用vuex仓库
    const store = useStore()
    // 1.使用根模块state的数据
    console.log(store.state.userName)
    // 2.使用根模块getters的数据
    console.log(store.getters.newName)
    // 3.提交根模块mutations函数
    const changeName = () => {
      // store.commit('updateName', '李四')
      // 4.调用根模块actions函数
      store.dispatch('updateName')
    }
    return { changeName }
  }
}
</script>

<style lang="scss" scoped>

</style>
