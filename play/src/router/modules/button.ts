export default [
    {
        path: '/',
        name: 'Home',
        redirect: '/button',
    },
    {
        path: '/button',
        name: 'ButtonTest',
        component: () => import('@/views/ButtonTest.vue'),
    }
]