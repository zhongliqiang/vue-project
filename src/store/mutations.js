export const state = {
    deviceType: "os",
    documentWH:{}
}
// import Vue from 'vue'
// import * as types from './mutation-types'
// mutations
export const mutations = {
    deviceType(state, value) {
        state.deviceType = value.value;
    },
    documentWH(state, value) {
        state.documentWH = value.value;
    }
}
