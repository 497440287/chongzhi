<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg"/>
    <van-button type="primary" size="small" @click="handleClick">主要按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button } from 'vant'
import { useStore } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    [Button.name]: Button
  },
  setup () {
    console.log('输出vuex', useStore().state)
    const handleClick = () => {
      window.close()
    }
    return {
      msg: 'Welcome to Your Vue.js App',
      handleClick
    }
  }
}
</script>

<style lang="less" scoped>
.demo{
  font-size: 48px;
}
</style>
