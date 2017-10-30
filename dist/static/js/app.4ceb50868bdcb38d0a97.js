webpackJsonp([6],{

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "Cpyv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "KLKA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const state = {
	tableList: [{
		id: 3244343,
		date: '2016-05-02',
		name: '王小虎',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1518 弄',
		zip: 200333

	}, {
		id: 3244343,
		date: '2016-05-04',
		name: '王小虎',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1517 弄',
		zip: 200333

	}, {
		date: '2016-05-01',
		name: '王小虎',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1519 弄',
		zip: 200333

	}, {
		id: 3244343,
		date: '2016-05-03',
		name: '王小虎',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1516 弄',
		zip: 200333

	}, {
		id: 3244343,
		date: '2016-05-06',
		name: '王小虎11',
		province: '上海',
		city: '普陀区',
		address: '上海市普陀区金沙江路 1516 弄',
		zip: 200333

	}]

	//getters
};const getters = {
	tableList: state => state.tableList
};

const actions = {
	getTableList({ commit, state }, data) {
		console.log(data);
		return new Promise((resolve, reject) => {
			console.log(reject);
			commit('getTableList', data);
		});
	}
};

const mutations = {
	getTableList(state, data) {
		state.tableList = data;
		if (data) {
			/*for(let i=0;i < data.length;i++){
   	state.tableList.push(data[i]);
   }*/
		}
	}
};

/* harmony default export */ __webpack_exports__["a"] = ({
	state,
	getters,
	actions,
	mutations
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2795fb99_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("Cpyv");
function injectStyle (ssrContext) {
  __webpack_require__("ekXs")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2795fb99_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__("zL8q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_index_js__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_resource__ = __webpack_require__("ORbq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_common_css__ = __webpack_require__("ZsCP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_element_ui_lib_theme_default_index_css__ = __webpack_require__("q8zI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_element_ui_lib_theme_default_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_store_js__ = __webpack_require__("wtEF");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.







 //引入vuex

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3__router_index_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_resource__["a" /* default */]);
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__router_index_js__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_7__store_store_js__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
let routes = [{
	path: "*",
	component: resolve => __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("vkyI")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
}, {
	path: "/",
	// 需要登录才能进入的页面可以增加一个meta属性
	meta: {
		requireAuth: true
	},
	component: resolve => __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("vkyI")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe),
	children: [{
		path: "/",
		component: resolve => __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("gk7G")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
	}, {
		path: "/home/hello",
		component: resolve => __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("qSdX")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
	}, {
		path: "/home/form",
		component: resolve => __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("nIVG")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
	}]
}, {
	path: "/login",
	component: resolve => __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Luci")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe)
}];

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
	mode: 'history',
	routes: routes
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(res => res.meta.requireAuth)) {
		//判断是否需要登录权限
		console.log(to);
		if (localStorage.getItem('username')) {
			//判断是否登录
			next();
		} else {
			//没有登录则跳转到登录页面
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			});
		}
	} else {
		next();
	}
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ "ZsCP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ekXs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "q8zI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wtEF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_table__ = __webpack_require__("KLKA");



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
const debug = "production" !== 'production';
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
	modules: {
		table: __WEBPACK_IMPORTED_MODULE_2__modules_table__["a" /* default */]
	},
	strict: debug
}));

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.4ceb50868bdcb38d0a97.js.map