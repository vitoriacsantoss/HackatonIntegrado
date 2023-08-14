import { createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import TerrenoView from '@/views/TerrenoView.vue'
import ApartamentoView from '@/views/ApartamentoView.vue'
import CasaView from '@/views/CasaView.vue'
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
            path: '/terreno',
            name: 'terreno',
            component: TerrenoView
        },
        {
            path: '/apartamento',
            name: 'apartamento',
            component: ApartamentoView
        },
        {
            path: '/casa',
            name: 'casa',
            component: CasaView
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