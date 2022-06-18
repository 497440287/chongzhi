import store from '@/store'
const appid = process.env.VUE_APP_WX_APPID
export default (to, from, next) => {
  if (to.meta.wxAuth) {
    if (store.getters.getToken) { // 判断是否已经存在登录信息
      return next()
    } else if (to.query.code) { // 判断是否已经回调并非返回code
      setTimeout(() => {
        // 在这里调用查询用和信息接口,获取token
        store.dispatch('setToken', 'fasdfadsfewrewqrqewrwqq')
        store.dispatch('setThirdToken', 'fasdfadsfewrewqrqewrwqq')
        store.dispatch('setUserInfo', { name: '哈哈', role: 'admin', userId: '001' })
        return next()
      }, 4000)
    } else if (/MicroMessenger/i.test(window.navigator.userAgent)) { // 进入微信回调鉴权
      location.href = wxRedirectUrl(location.href)
    } else { // 判断是否是微信环境
      return next()
    }
  } else {
    return next()
  }
}

function wxRedirectUrl (redirectUri) {
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=snsapi_base#wechat_redirect`
}
