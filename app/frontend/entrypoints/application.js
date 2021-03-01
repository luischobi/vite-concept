console.log('Vite ⚡️ Rails 2')

import Vue from 'vue'
import App from '../hello.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount('#app')
})