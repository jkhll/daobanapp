import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from 'components/Home'
import movies from 'components/Movies'
import detail from 'components/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: home,
      children: [{
        path: ':detail',
        component: detail
      }]
    },
    {
      path: '/movies',
      component: movies
    },
    {
      path: '/books',
      component: detail
    }
  ]
})
