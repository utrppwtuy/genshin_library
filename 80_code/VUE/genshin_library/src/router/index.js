import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => {
        require(['@/page/home'], resolve)
      }
    },
    {
      path: '/role',
      name: 'role',
      component: resolve => {
        require(['@/page/role/role'], resolve)
      }
    },
    {
      path: '/space',
      name: 'space',
      component: resolve => {
        require(['@/page/space/space'], resolve)
      }
    },
    {
      path: '/time',
      name: 'time',
      component: resolve => {
        require(['@/page/time/time'], resolve)
      }
    },
    {
      path: '/game',
      name: 'game',
      component: resolve => {
        require(['@/page/game/game'], resolve)
      }
    },
    {
      path: '/anime',
      name: 'anime',
      component: resolve => {
        require(['@/page/anime/anime'], resolve)
      }
    }
  ]
})
