import Vue from 'vue'

import * as types from './mutation-types'
export const increment = context => {
    context.commit("increment");
  };
  
  