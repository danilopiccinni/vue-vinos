<script>
export default {
  name: 'Header',

  data() {
    return {

    }
  },
}
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Besoff</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" :to="{ name: 'home'}">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link active" aria-current="page" :to="{ name: 'vinos'}">Vini</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link active" aria-current="page" :to="{ name: 'cantinas'}">Cantine</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link active" aria-current="page" :to="{ name: 'vitignos'}">Vitigni</router-link>
                </li>
                <!-- <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
                </li> -->
            </ul>
            </div>
        </div>
        </nav>
  </div>
</template>

<style lang="scss" scoped>



  .router-link-active {
    background-color: rgba(0, 0, 0, 0.136);
    font-weight: bold;
    color: white;
  }

</style>