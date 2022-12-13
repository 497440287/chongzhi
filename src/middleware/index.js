import router from '@/router'
import wxAuth from './modules/wxAuth'
import loginAuth from './modules/loginAuth'
import common from './modules/common'
import { start, done } from '@/utils/loading.js'
const middleware = () => {
  router.beforeEach(async (to, from, next) => {
    start()
    // 判断是否是微信环境
    if (/MicroMessenger/i.test(window.navigator.userAgent) & to.meta.wxAuth) {
      await wxAuth(to, from)
    }
    // 判断是否需要登录用户
    if (to.meta.loginAuth) {
      await loginAuth(to, from, next)
    }
    // 公共过滤规则
    await common(to, from)
    // 进入页面
    next()
    done()
  })
}

export default middleware
