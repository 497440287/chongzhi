import router from '@/router'
import wxAuth from './modules/wxAuth'
const middleware = () => {
  router.beforeEach((to, from, next) => {
    // 判断是否是微信环境
    if (/MicroMessenger/i.test(window.navigator.userAgent)) {
      wxAuth(to, from, next)
    } else {
      next()
    }
  })
}

export default middleware
