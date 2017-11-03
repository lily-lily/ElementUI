const state = {
	tableList:[{
		  id:3244343,
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
 		  city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
   		  zip: 200333,
   		  
    }, {
    	  id:3244343,
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
 		  city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
           
    }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
 		  city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
       
    }, {
    	  id:3244343,
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
 		  city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
           
    },{
    	  id:3244343,
          date: '2016-05-06',
          name: '王小虎11',
          province: '上海',
 		  city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,     
    }],
	rcfyList:{}
}

//getters
const getters = {
	tableList:state => state.tableList,
	rcfyList:state => state.rcfyList
}

const actions = {
	getTableList({ commit,state },data){
		console.log(data)
		return new Promise((resolve,reject)=>{
			console.log(reject)
			commit('getTableList',data)
		})
	},
	getRcfyList({ commit,state },data){
		console.log(data)
		return new Promise((resolve,reject)=>{
			console.log(reject)
			commit('getRcfyList',data)
		})
	}
}

const mutations = {
	getTableList(state,data){
		
		state.tableList = data;
		if(data){
			/*for(let i=0;i < data.length;i++){
				state.tableList.push(data[i]);
			}*/
		}
	},
	getRcfyList(state,data){
		state.rcfyList={};
		console.log(data)
		if(data){
			state.rcfyList = data;
		}
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}
