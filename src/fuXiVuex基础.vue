<template>
  <div>
    <!-- 使用A模块的state数据 -->
    <p>{{ $store.state.moduleA.username }}</p>
    <!-- 使用A模块的getters数据 -->
    <p>{{ $store.getters.newName }}</p>
     <!-- 调用A模块mutations里的方法 -->
   <button @click="changeFn">修改state</button>

    <!-- 使用B模块的state数据 -->
    <p>{{ $store.state.moduleB.username }}</p>
    <!-- 使用B模块的getters数据 -->
    <p>{{$store.getters['moduleB/newName']}}</p>
      <!-- 调用B模块actions里的方法 -->
   <button @click="actionsFn">修改state</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const changeFn = () => {
      store.commit('updateName', '哈哈')
    }
    // 调用B模块的actions
    const actionsFn = () => {
      store.dispatch('moduleB/updateName')
    }
    return { changeFn, actionsFn }
  }
}
</script>

<style lang="scss" scoped>

</style>
