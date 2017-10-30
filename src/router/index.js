import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)
let routes = [
{
	path:"*",
	component:resolve => require(['../pages/home.vue'],resolve)
},
{
	path:"/",
	// 需要登录才能进入的页面可以增加一个meta属性
	meta:{
		requireAuth:true
	},
	component:resolve => require(['../pages/home.vue'],resolve),
	children: [{
		path:"/",
		component:resolve => require(['../pages/main.vue'],resolve),
	},
	{
		path:"/home/hello",
		component:resolve => require(['../components/Hello.vue'],resolve),
	},
	{
		path:"/home/form",
		component:resolve => require(['../pages/form.vue'],resolve),
	},
	{
		path:"/home/demo",
		component:resolve => require(['../pages/demo.vue'],resolve),
	}]
},
{
	path:"/login",
	component:resolve => require(['../pages/login.vue'],resolve)
}
]

var router = new vueRouter({
  mode: 'history',
  routes: routes
});

router.beforeEach((to, from, next) => {
	if(to.matched.some(res => res.meta.requireAuth)){//判断是否需要登录权限
		console.log(to)
		if(localStorage.getItem('username')){ //判断是否登录
			next()
		}else{//没有登录则跳转到登录页面
			next({
				path:'/login',
				query: {redirect: to.fullPath}
			})
		}
	}else{
		next();
	}
})

export default router;
