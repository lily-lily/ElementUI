import Vue from 'vue'

let httpService = new Vue({
	methods:{
		myTable(url,suc,err){
			this.$http.get(url).then((response) => {
				suc(response);
			},(res) => {
				err(res);
			});
		}
	}
})


export default httpService;