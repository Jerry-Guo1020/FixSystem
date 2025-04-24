import { createRouter, createMemoryHistory } from "vue-router";
import Home from "./Home/Home.vue";
import Login from "./components/Login/Login.vue";
import Section from "./components/navbar/navbar.vue"

const routes = [ 
    {
        path: '/',
        name: "home",
        component: Home 
    },
    {
        path: '/login',
        name: "login",
        component: Login 
    },
    {
        path: '/section',
        name: "section",
        component: Section
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes 
});

export default router; 