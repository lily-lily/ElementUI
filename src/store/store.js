import Vue from 'vue'
import Vuex from 'vuex'
import table from './modules/table'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
	modules:{
		table
	},
	strict: debug
})
