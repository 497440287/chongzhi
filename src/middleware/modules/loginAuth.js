import store from '@/store'
export default (to, from, next) => {
  return new Promise((resolve) => {
    if (store.getters.getToken) { // 判断是否已经存在登录信息
      setTimeout(() => {
        // 在这里调用checkToken校验token
        resolve()
      }, 1000)
    } else {
      // 进入登录页面
      next(`/login?redirect=${to.fullPath}`)
    }
  })
}
