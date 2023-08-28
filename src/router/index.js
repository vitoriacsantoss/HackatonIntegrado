import { createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import BuscarView from '@/views/BuscarView.vue'
import ContatoView from '@/views/ContatoView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/buscar',
            name: 'buscar',
            component: BuscarView
        },
        {
            path: '/contato',
            name: 'contato',
            component: ContatoView
        },


    ]
}) 

export default router