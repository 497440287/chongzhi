<template>
  <section>
    <button @click="login">登录</button>
  </section>
</template>

<script setup>
const router = useRouter()
const route = useRoute()
const store = useStore()
const redirect = route.query && route.query.redirect
const login = () => {
  // 在这里调用查询用和信息接口,获取token
  store.dispatch('setToken', 'fasdfadsfewrewqrqewrwqq')
  store.dispatch('setThirdToken', 'fasdfadsfewrewqrqewrwqq')
  store.dispatch('setUserInfo', { name: '哈哈', role: 'admin', userId: '001' })
  router.push({ path: redirect || '/' })
}
</script>

<style scoped>

</style>
