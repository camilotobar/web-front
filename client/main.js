import  { Meteor } from  'meteor/meteor'
import  Vue from 'vue'
import  Vuetify from  'vuetify'
import 'vuetify/dist/vuetify.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.use(Vuetify)

const opts = {}
const vuetify = new Vuetify(opts)
import VueMeteorTracker  from 'vue-meteor-tracker'

Vue.use(VueMeteorTracker)

import store from './../imports/ui/store'
import router  from  '../imports/ui/router'

import App from  '../imports/ui/App'
import './main.html'


Meteor.startup(() => {
   new Vue ({
     el: "#app", 
     vuetify,
     router,
     store,
     ...App
   }) 
})