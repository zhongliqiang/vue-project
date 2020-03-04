import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { state, mutations } from './mutations'
// import { state, mutations,stateNew,mutationsNew } from './mutations'
import getters from './getters'
import * as actions from './actions'
// import command from './modules/command.js'
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        // command
    },
    strict: debug
})