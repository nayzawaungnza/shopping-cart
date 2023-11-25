import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp({
    data() {
        return {
            cart: [] //this data in main root , not equal with nav (cart[])
        }
    },
    render() {
        return h(App)
    },


})

app.use(router)
app.mount('#app')

//createApp(App).mount('#app')