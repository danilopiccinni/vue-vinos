<script >
import VitignoCard from '../components/VitignoCard.vue';
import axios from 'axios';
export default {
  name: 'Vitignos',
  data() {
    return {
        vitignos: [],

        isLoading: false,
    }
  },

  components : {
    VitignoCard,
  },

  mounted() {
    this.getVitignos() 
    
  },

  methods: {
    getVitignos() {

        this.isLoading = true;

        axios.get('http://127.0.0.1:8000/api/vitignos').then(response => {
            console.log(response)
            this.vitignos = response.data.results

            this.isLoading = false
        })
    }
  }
}
</script>

<template>
    <div class="container mt-5">
        <h1 class="mb-5 text-center">Lista Vitigni</h1>

        <div v-if="isLoading" class="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>


        <div v-else>
            <div class="row container row-gap-3 ">
                <div class="col-4" v-for="vitigno in vitignos">
                    <VitignoCard :vitigno="vitigno"></VitignoCard>
                </div>
            </div>

        </div>
        

    </div>
</template>

<style scoped>

</style>
