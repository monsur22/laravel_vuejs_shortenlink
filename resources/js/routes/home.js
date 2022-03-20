const home = () =>import ( '../components/app.vue')
const a = () =>import ( '../components/a.vue')
const b = () =>import ( '../components/b.vue')
const UrlList = () =>import ( '../components/UrlList.vue')

export default [
    {
        path: '/',
        component: UrlList,
        name: 'UrlList',
    },
    {
        path: '/a',
        component: a,
        name: 'a',
    },
    {
        path: '/b',
        component: b,
        name: 'b',
    },
]
