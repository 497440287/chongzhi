<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-button type="primary" size="small">主要按钮</van-button>
    <div class="demo">
      demo
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button } from 'vant'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    [Button.name]: Button
  },
  mounted () {
    console.log('输出vuex', this.$store.state)
  }
}
</script>

<style lang="less" scoped>
.demo{
  font-size: 48px;
}
</style>
