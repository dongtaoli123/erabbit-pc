<template>
  <div>
  <p>{{$store.state.user.profile.account}}APP</p>
  <button @click="$store.commit('user/setUser',{account: '李四'})">测试</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
