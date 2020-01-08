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

// 导入vant图片懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);

// 将封装的接口 挂载到  $api上
import api from '@/api'
// 将api 挂载到vue实例的属性上
Vue.$api = Vue.prototype.$api = api;

Vue.config.productionTip = false
// 将vant 插件导入到vue实例中
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
