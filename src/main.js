import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import '@/permission'

// 国际化
import 'dayjs/locale/zh-cn'
const dayjs = require('dayjs');

// 相对时间插件
//dayjs.extend(relativeTime)

dayjs.locale('zh-cn') // use locale globally
dayjs().locale('zh-cn').format() // use locale in a specific instance
Vue.use(Buefy)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
