<template>
   <!-- 顶部通栏 -->
   <AppNavbar />
   <!-- 头部 -->
   <AppHeader />
   <!-- 吸顶头部组件 -->
   <AppHeaderSticky />
   <!-- 内容容器 -->
   <div class="app-body">
    <!-- 二级路由 -->
    <RouterView />
   </div>
   <!-- 底部通栏 -->
   <AppFooter />
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    // 在这里获取分类数据 其他组件也可以使用
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped>
  .app-body{
    min-height: 600px;
  }
</style>
