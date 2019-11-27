import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store=new Vuex.Store({
    plugins: [createPersistedState()],
    state:{
        backend:'https://us-central1-proyecto-web-km.cloudfunctions.net',
        user:{
            id:'',
            roles:[],
            login:false
        }
    },
    mutations:{
        updatePerson(state, newperson){
            state.user=newperson
        }
    },
    actions:{
        setPerson({commit}, person){
            commit('updatePerson',person)
        }
    }
})

export default store
