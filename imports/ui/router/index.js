import VueRouter from 'vue-router'
import Vue from 'vue'

//Pages imports
import Login from './../pages/Login/Login'
import Dashboard from "../pages/Dashboard/Dashboard";
import Register from "../pages/Register/Register";

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path:'/login', component:Login},
        {path:'/signup', component:Register},
        {path:'/dashboard', name:'dashboard' ,component: Dashboard}
    ],
})

export default router
