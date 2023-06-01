<script >
import Header from './components/Header.vue';
export default {
  name: 'App',
  data() {
    return {

    }
  },

  components: {
    Header,
  }
}
</script>

<template>
<div>
  <Header></Header>
  
  <router-view></router-view>

</div>
</template>

<style scoped>

</style>
