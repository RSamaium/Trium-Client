<template>
  <div class="container">
    <alert :error="error"></alert>
    <form>
      <div class="field" :class="{error: errors.any('email')}">
        <input type="text" v-model.trim="username" :placeholder='"email" | t' name="email" v-validate="'required|email'" :data-vv-as='"email" | t' autofocus>
        <strong v-show="errors.has('email')">{{ errors.first('email') }}</strong>
      </div>
      <div class="field" :class="{error: errors.any('password')}">
        <input type="password" v-model="password" :placeholder='"password" | t' name="password" v-validate="'required'" :data-vv-as='"password" | t'>
        <strong v-show="errors.has('password')">{{ errors.first('password') }}</strong>
      </div>
      <button :class="{loading: loading}" type="button" @click="login">{{"connection" | t}}</button>
    </form>
  </div>
</template>

<script>
import { Validator } from 'vee-validate'
import Alert from '~/components/Alert'
import Token from '~/core/token'

export default {
  data() {
    return {
      username: '',
      password: '',
      error: {},
      loading: false,
      remember: true
    }
  },
  layout: 'login',
  created() {
    Token.delete()
  },
  methods: {
    async login(platform) {

      if (!platform) this.loading = true

      try {
        const result = await this.$validator.validateAll()
        if (!result) {
          throw new Error('Formulaire Invalide.')
        }
        await this.$store.dispatch('me/login', {
          platform,
          username: this.username,
          password: this.password,
          remember: this.remember
        })
        this.$router.push('/')
      }
      catch (err) {
        this.loading = false
        this.error = new Error(`Impossible de se connecter.
          Veuillez vérifier votre mot de passe ou nom d'utilisateur`)
      }

    }
  },
  components: {
    Alert
  }
}
</script>