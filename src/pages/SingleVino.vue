<script >
import axios from 'axios';
export default {
  name: 'SingleVino',
  data() {
    return {
        id: '',

        vino: {},

        isLoading: false,
    }
  },

  mounted() {
    this.id = this.$route.params.id,

    this.getVino(this.id)

    console.log('http://127.0.0.1:8000/api/vinos/' + this.id)
  },

  methods: {
    getVino(id) {
        this.isLoading = true
        axios.get('http://127.0.0.1:8000/api/vinos/' + id).then(response => {
            console.log(response)
            this.vino = response.data.results
            this.isLoading = false
        })
    }
  }


}
</script>

<template>

    <div class="container mt-5 text-center">

        <div v-if="isLoading">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <div v-else>
            <h1 class="card-title">{{ vino.nome }}</h1>
            <h6 class="card-subtitle mb-2 text-body-secondary"> {{ vino.colore }} </h6>
            <p class="card-text">{{vino.tipologia}}</p>
            <p class="card-text">{{vino.annata}}</p>
            <p class="card-text">{{vino.estratto}}</p>
            <p class="card-text">{{vino.acidita}}</p>
            <p class="card-text">{{vino.gradazione}}</p>
        </div>

        <div class="my-5">
            <router-link :to="{name: 'vinos'}" class="btn btn-outline-primary">Torna alla lista</router-link>

        </div>


    </div>
</template>

<style scoped>

</style>
