import { createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import BuscarView from '@/views/BuscarView.vue'
import ContatoView from '@/views/ContatoView.vue'
import SaibaMais01View from '@/views/SaibaMais01View.vue'
import SaibaMais02View from '@/views/SaibaMais02View.vue'
import SaibaMais03View from '@/views/SaibaMais03View.vue'
import SaibaMais04View from '@/views/SaibaMais04View.vue'


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
        {
            path: '/saibamais01',
            name: 'saibamais01',
            component: SaibaMais01View
        },
        {
            path: '/saibamais02',
            name: 'saibamais02',
            component: SaibaMais02View
        },
        {
            path: '/saibamais03',
            name: 'saibamais03',
            component: SaibaMais03View
        },
        {
            path: '/saibamais04',
            name: 'saibamais04',
            component: SaibaMais04View
        },
    ]
}) 

export default router