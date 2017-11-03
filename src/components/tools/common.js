import Vue from 'vue'
import { Loading } from 'element-ui'

let common = new Vue({
	data:{
		commonurl:'',
		apiUrl:{
			list:'/static/data/table.json',
			rcfyList:'/static/data/rcfyTable.json'
		}
	},
	methods:{
		
	}
})


/*loadingInstance.close();
let loadingTitle = Loading.service({fullscreen: true,text:'拼命加载中。。。'});
loadingTitle.close();*/

export default common;