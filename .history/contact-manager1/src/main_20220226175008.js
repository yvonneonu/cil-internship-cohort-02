import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import App from './A'
import store from './store'

// require('@/assets/main.scss');


createApp(App).use(store).use(router).mount('#app')
