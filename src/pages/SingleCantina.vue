<script >
import axios from 'axios';
export default {
  name: 'SingleCantina',
  data() {
    return {
        id: '',

        cantina: {},

        isLoading: false,
    }
  },

  mounted() {
    this.id = this.$route.params.id,

    this.getCantina(this.id)

    console.log('http://127.0.0.1:8000/api/cantinas/' + this.id)
  },

  methods: {
    getCantina(id) {
        this.isLoading = true
        axios.get('http://127.0.0.1:8000/api/cantinas/' + id).then(response => {
            console.log(response)
            this.cantina = response.data.results
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

            <h5 class="card-title">{{ cantina.nome }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary"> {{ cantina.indirizzo }} </h6>
            <p class="card-text">{{cantina.comune}}</p>
            <p class="card-text">{{cantina.provincia}}</p>
            <p class="card-text">{{cantina.regione}}</p>
            <p class="card-text">{{cantina.nazione}}</p>
            <p class="card-text">{{cantina.telefono}}</p>
            <p class="card-text">{{cantina.email}}</p>

        </div>

        <div class="my-5">
            <router-link :to="{name: 'cantinas'}" class="btn btn-outline-primary">Torna alla lista</router-link>

        </div>


    </div>
</template>

<style scoped>

</style>
