<script>
export default {
    name: 'VitignoCard',
    data() {
        return {

        
        }
    },

    props: {
        vitigno : Object
    },

    computed: {

    }
}
</script>

<template>
    <div>
        <div class="card"  style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ vitigno.nome }}</h5>

            <p class="card-text">{{vitigno.descrizione}}</p>



            <router-link class="nav-link active btn btn-secondary" aria-current="page" :to="{ name: 'vitigno', params: {id : vitigno.id}}">apri</router-link>
            <!-- <a href="#" class="card-link">Another link</a> -->
        </div>
</div>
    </div>
</template>

<style scoped lang="scss">



</style>