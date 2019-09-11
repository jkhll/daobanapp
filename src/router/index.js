import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/Home'
import movies from 'components/Movies'
import detail from 'components/detail'
import subject from '@/base/subject'
import Foo from '../components/item'
import search from '../components/search'
import notcomplete from '../components/NotComplete'

const Login = () => import('components/Login')
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: home,
    name: 'home',
    children: [{
      path: ':detail',
      component: detail
    }]
  },
  {
    path: '/movies',
    name: '/movies',
    component: movies
  },
  {
    path: '/subject/:id',
    name: 'subject',
    component: subject
  },
  {
    path: '/item',
    name: 'item',
    component: Foo
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '*',
    component: notcomplete
  }
  ]
})
