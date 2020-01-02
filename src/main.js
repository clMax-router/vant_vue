import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 导入设配js
import 'amfe-flexible'

// 导入vant
import Vant from 'vant';
// 导入vant的css
import 'vant/lib/index.css';

Vue.config.productionTip = false
// 将vant 插件导入到vue实例中
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
