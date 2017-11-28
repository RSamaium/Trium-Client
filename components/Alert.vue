<template>
  <transition name="alert">
    <div class="ui negative message" v-if="error.message">
        <i class="close icon" @click="error = {}"></i>
        <div class="header">
           {{error.message}}
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style>

.alert {
  transition: all .5s ;
}

.alert-enter, .alert-leave-active {
  opacity: 0;
}
</style>