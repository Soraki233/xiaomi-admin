import { createRouter, createWebHashHistory } from 'vue-router'
// import beforeEach from "@/router/beforeEach";

export const constantRouter = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:"/login",
        component:() => import("../views/login.vue"),
        name:"login"
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouter,
})

// //自动导入路由
// let routerList= []
// const files = import.meta.globEager("./modules/*.ts")
// Object.keys(files).forEach(el => {
//     routerList.push(...files[el].default)
// })
//
// router.addRoute({
//     path: '/',
//     redirect: '/dashBoard',
//     component: layout,
//     name: 'home',
//     children: routerList
// })

//路由拦截器
// router.beforeEach((to, from, next) => {
//     beforeEach(to, from, next)
// })

export default router