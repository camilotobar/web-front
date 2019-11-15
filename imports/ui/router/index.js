import VueRouter from 'vue-router'
import Vue from 'vue'

//Pages imports
import Login from './../pages/Login/Login'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path:'/login', component:Login},
    ],
})

export default router