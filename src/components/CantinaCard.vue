<script>
export default {
    name: 'CantinaCard',
    data() {
        return {

        
        }
    },

    props: {
        cantina : Object
    },

    computed: {

    }
}
</script>

<template>
    <div>
        <div class="card"  style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ cantina.nome }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary"> {{ cantina.indirizzo }} </h6>
            <p class="card-text">{{cantina.comune}}</p>
            <p class="card-text">{{cantina.provincia}}</p>
            <p class="card-text">{{cantina.regione}}</p>
            <p class="card-text">{{cantina.nazione}}</p>
            <p class="card-text">{{cantina.telefono}}</p>
            <p class="card-text">{{cantina.email}}</p>


            <router-link class="nav-link active btn btn-secondary" aria-current="page" :to="{ name: 'cantina', params: {id : cantina.id}}">apri</router-link>
            <!-- <a href="#" class="card-link">Another link</a> -->
        </div>
</div>
    </div>
</template>

<style scoped lang="scss">



</style>