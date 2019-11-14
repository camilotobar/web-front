import VueRouter from 'vue-router'
import Vue from 'vue'

import App from './../App'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path:'/', component:App}
    ]
})

export default router