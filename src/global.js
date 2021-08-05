import components from './components';
import * as echarts from 'echarts';
export default {
    install(Vue) {
        Vue.prototype.$echarts = echarts;
        Vue.use(components); //封装成一个指令
    }
};
