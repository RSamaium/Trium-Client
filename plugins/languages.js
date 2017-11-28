import Vue from 'vue'
import Languages from 'languages-js/languages.es5'
import fr from '../languages/fr_FR.json'
import en from '../languages/en_EN.json'

Vue.use(Languages.load.Vue)

Languages.packages({fr_FR: fr, en_EN: en}).default('en_EN')

export default Languages
