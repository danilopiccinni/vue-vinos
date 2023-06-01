
import Home from './pages/Home.vue';
import Vinos from './pages/Vinos.vue';
import SingleVino from './pages/SingleVino.vue';
import Cantinas from './pages/Cantinas.vue';
import Vitignos from './pages/Vitignos.vue';
import SingleCantina from './pages/SingleCantina.vue';
import SingleVitigno from './pages/SingleVitigno.vue';

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path:'/vinos',
            name:'vinos',
            component: Vinos
        },
        {
            path: '/vinos/:id',
            name: 'vino',
            component: SingleVino
        },
        {
            path: '/cantinas',
            name: 'cantinas',
            component: Cantinas
        },
        {
            path: '/cantinas/:id',
            name: 'cantina',
            component: SingleCantina
        },
        {
            path: '/vitignos',
            name: 'vitignos',
            component: Vitignos
        },
        {
            path: '/vitignos/:id',
            name: 'vitigno',
            component: SingleVitigno
        },

    ]
});

export {router} ;