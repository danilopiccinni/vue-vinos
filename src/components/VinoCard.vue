<script>
export default {
    name: 'VinoCard',
    data() {
        return {

        
        }
    },

    props: {
        vino : Object
    },

    computed: {
        getColor() {
            if(this.vino.colore == 'rosso') {
                return 'red'
            } else if(this.vino.colore == 'bianco') {
                return 'white'
            } else if (this.vino.colore == 'rose') {
                return 'pink'
            }
        }
    }
}
</script>

<template>
    <div>
        <div class="card text-center"  style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ vino.nome }}</h5>
                <div class="my-3" :style="{ backgroundColor: getColor}" style="height: 15px;"></div>
            <h6 class="card-subtitle mb-2 text-body-secondary"> {{ vino.colore }} </h6>
            <p class="card-text">{{vino.tipologia}}</p>
            <p class="card-text">{{vino.annata}}</p>
            <p class="card-text">{{vino.estratto}}</p>
            <p class="card-text">{{vino.acidita}}</p>
            <p class="card-text">{{vino.gradazione}}</p>


            <router-link class="nav-link active btn btn-secondary" aria-current="page" :to="{ name: 'vino', params: {id : vino.id}}">apri</router-link>
            <!-- <a href="#" class="card-link">Another link</a> -->
        </div>
</div>
    </div>
</template>

<style scoped lang="scss">



</style>