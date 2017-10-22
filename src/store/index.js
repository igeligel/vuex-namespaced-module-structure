import Vue from 'vue';
import Vuex from 'vuex';
import chatModule from './modules/chat';
import productsModule from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chat: chatModule,
    products: productsModule,
  },
});
