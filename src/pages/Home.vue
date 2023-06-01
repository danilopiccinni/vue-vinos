<script >
export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>

<template>
<div class="container mt-5">
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odit praesentium iure non inventore consequuntur aliquam labore voluptates cupiditate rem tenetur accusantium repellat quia porro veritatis hic quos explicabo dolores.</p>

    <router-link :to="{ name : 'vinos'}">Vai alla lista vini</router-link>
</div>
</template>

<style scoped>

</style>
