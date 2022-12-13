import store from '@/store'
const appid = process.env.VUE_APP_WX_APPID
export default (to, from) => {
  // 判断安卓还是ios环境,记录ios第一个路径值
  if (window.wxSignLink || /(Android)/i.test(navigator.userAgent)) {
    window.wxSignLink = location.href
  }
  // 在vue文件中直接使用wxSignLink获取签名授权地址

  return new Promise((resolve) => {
    if (store.getters.getToken) { // 判断是否已经存在登录信息
      setTimeout(() => {
        // 在这里调用checkToken校验token
        resolve()
      }, 1000)
    } else if (to.query.code) { // 判断是否已经回调并非返回code
      setTimeout(() => {
        // 在这里调用查询用和信息接口,获取token
        store.dispatch('setToken', 'fasdfadsfewrewqrqewrwqq')
        store.dispatch('setThirdToken', 'fasdfadsfewrewqrqewrwqq')
        store.dispatch('setUserInfo', { name: '哈哈', role: 'admin', userId: '001' })
        resolve()
      }, 1000)
    } else {
      // 进入微信回调鉴权
      location.href = wxRedirectUrl(location.href)
    }
  })
}

function wxRedirectUrl (redirectUri) {
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=snsapi_base#wechat_redirect`
}
