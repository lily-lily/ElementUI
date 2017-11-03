import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementUi from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale  from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)
Vue.use(elementUi)
Vue.config.lang = 'zh'
Vue.locale('zh',zhLocale)
Vue.locale('en',enLocale)

const locales = {
	zh:{
		static:{
			currency:'币种'
		}
	},
	en:{
		static:{
			currency:'currency'
		}
	}
}

const i18n = new CSSValueList8n({
	locale:'zh',
	locales
})

Vue.use(elementUi, {
  i18n: (key, value) => i18n._t(key, value)
})

new Vue({ i18n }).$mount('#app')