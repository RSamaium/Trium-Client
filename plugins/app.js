// eslint-disable-next-line
import Interceptors from '../core/interceptors'
import VeeValidate, { Validator } from 'vee-validate'
import Vue from 'vue'
import ElementUI from 'element-ui'

import * as filters from '../filters'
import * as directives from '../directives'

import locale from 'element-ui/lib/locale/lang/en'
import messages from 'vee-validate/dist/locale/fr'

Validator.addLocale(messages)

Vue.use(ElementUI, {locale})
Vue.use(VeeValidate, { 
  locale: 'fr'
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})