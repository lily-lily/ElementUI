// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import elementUi from 'element-ui'
/*import VueI18n from './language.js'*/
import router from './router/index.js'
import VueResource from 'vue-resource'
import commonCss from './assets/common.css'
import elementUiCSS from '../node_modules/element-ui/lib/theme-default/index.css'
import store from './store/store.js'  //引入vuex
/*import moment from './static/moment.js'*/

Vue.use(elementUi);
Vue.use(router);
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
