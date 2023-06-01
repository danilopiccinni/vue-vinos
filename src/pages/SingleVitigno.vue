<script >
import axios from 'axios';
export default {
  name: 'SingleVitigno',
  data() {
    return {
        id: '',

        vitigno: {},

        isLoading: false,
    }
  },

  mounted() {
    this.id = this.$route.params.id,

    this.getVitigno(this.id)

    console.log('http://127.0.0.1:8000/api/vitignos/' + this.id)
  },

  methods: {
    getVitigno(id) {
        this.isLoading = true
        axios.get('http://127.0.0.1:8000/api/vitignos/' + id).then(response => {
            console.log(response)
            this.vitigno = response.data.results
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
            <h1 class="card-title">{{ vitigno.nome }}</h1>

            <p class="card-text">{{vitigno.descrizione}}</p> 
        </div>

        <div class="my-5">
            <router-link :to="{name: 'vitignos'}" class="btn btn-outline-primary">Torna alla lista</router-link>
        </div>


    </div>
</template>

<style scoped>

</style>
