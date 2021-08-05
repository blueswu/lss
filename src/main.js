import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import 'font-awesome/css/font-awesome.min.css'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import global from './global'; // 全局挂载内容
import './assets/style/common.less';

Vue.prototype.$echarts = echarts

Vue.use(Element)
Vue.use(global);

router.beforeEach((to, from, next) => {
	// if (to.meta.title) {
	//    document.title = to.meta.title;
	// }
	next();
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
