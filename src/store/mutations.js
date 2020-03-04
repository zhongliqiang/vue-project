export const state = {
    deviceType: "os"
}
// import Vue from 'vue'
// import * as types from './mutation-types'
// mutations
export const mutations = {
    deviceType(state, value) {
        state.deviceType = value.value;
    }
}
