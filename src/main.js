// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueScrollBehavior from 'vue-scroll-behavior'
import '@/iconfont/iconfont.css'
import store from '@/store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.6,
  loading: require('./assets/douban-app-logo.png'),
  error: require('./assets/douban-app-logo.png')
})
Vue.use(ElementUi)
Vue.use(vueScrollBehavior, {router: router})
/* eslint-disable no-new */
const requireComponent = require.context(
  './base',
  false,
  /adv\.(vue|js)$/
)

// console.log(requireComponent)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  console.log(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName.replace(/\.\/(.*)\.\w+$/, '$1')
    )
  )
  console.log(componentName)
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
