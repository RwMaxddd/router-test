import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: { path: '/TheLogin' }
    },
    {
        path: '/TheLogin',
        component: () => import('../views/TheLogin'),
        meta: { requiresAuth111: true },
    },
    {
        path: '/Personal',
        component: () => import('../views/TheMain'),
        meta: { requiresAuth111: true },
        children: [
            {
                path: 'MyHome',
                component: () => import('../components/MyHome'),
                meta: { requiresAuth: true }
            },
            {
                path: 'ParamsTest/:Test/:Params',
                name: 'ParamsTest',
                component: () => import('../components/ParamsTest'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
router.beforeEach(async (to, from) => {
    console.log('------------beforeEach开始------------')
    console.log('to',to)
    console.log('from',from)
    console.log('------------beforeEach结束------------\n')
})

export default router