<script >
import VinoCard from '../components/VinoCard.vue'
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
        vinos: [],

        isLoading: false,
    }
  },

  components : {
    VinoCard,
  },

  mounted() {
    this.getVinos() 
    
  },

  methods: {
    getVinos() {

        this.isLoading = true;

        axios.get('http://127.0.0.1:8000/api/vinos').then(response => {
            console.log(response)
            this.vinos = response.data.results

            this.isLoading = false
        })
    }
  }
}
</script>

<template>
    <div class="container mt-5">
        <h1 class="mb-5 text-center">Lista Vini</h1>

        <div v-if="isLoading" class="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>


        <div v-else>
            <div class="row container row-gap-3 ">
                <div class="col-4" v-for="vino in vinos">
                    <VinoCard :vino="vino"></VinoCard>
                </div>
            </div>

        </div>
        

    </div>
</template>

<style scoped>

</style>
