<template>
  <div id="wrapper" v-show="loading">
    <nuxt>
    </nuxt>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  mounted() {
    return this.$store.dispatch('me/me')
      .then(() => {
        this.loading = true
      })
      .catch(() => {
        this.$router.push('/login')
      })
  }
}
</script>