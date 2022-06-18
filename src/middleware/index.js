import router from '@/router'
import wxAuth from './modules/wxAuth'
const middleware = () => {
  router.beforeEach((to, from, next) => {
    wxAuth(to, from, next)
  })
}

export default middleware
