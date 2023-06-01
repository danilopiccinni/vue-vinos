<script >
import CantinaCard from '../components/CantinaCard.vue';
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
        cantinas: [],

        isLoading: false,
    }
  },

  components : {
    CantinaCard,
  },

  mounted() {
    this.getCantinas() 
    
  },

  methods: {
    getCantinas() {

        this.isLoading = true;

        axios.get('http://127.0.0.1:8000/api/cantinas').then(response => {
            console.log(response)
            this.cantinas = response.data.results

            this.isLoading = false
        })
    }
  }
}
</script>

<template>
    <div class="container mt-5">
        <h1 class="mb-5 text-center">Lista Cantine</h1>

        <div v-if="isLoading" class="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>


        <div v-else>
            <div class="row container row-gap-3 ">
                <div class="col-4" v-for="cantina in cantinas">
                    <CantinaCard :cantina="cantina"></CantinaCard>
                </div>
            </div>

        </div>
        

    </div>
</template>

<style scoped>

</style>
