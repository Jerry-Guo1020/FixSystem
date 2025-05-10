import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home/Home.vue";
import Login from "./components/Login/Login.vue";
import adminNavbar from "./components/navbar/adminNavbar.vue";
import AdminStatistics from "./components/adminSection/statistics.vue";
import AdminStudentManagement from "./components/adminSection/studentsManagement.vue";
import AdminfixPersonnelManagement from "./components/adminSection/fixPersonnelManagement.vue";
import AdminDormitory from "./components/adminSection/Dormitory.vue";
import AdminManagement from "./components/adminSection/AdminManagement.vue";
import AdminfixManagement from "./components/adminSection/fixManagement.vue";
import AdminfixSortManagement from "./components/adminSection/fixSortManagement.vue";
import AdminNotionManagement from "./components/adminSection/notionManagement.vue";
import AdminOrderManagement from "./components/adminSection/orderManagement.vue";
import AdminSpeakingManagement from "./components/adminSection/AdiminspeakingManagement.vue";
import UserNavBar from "./components/navbar/userNavBar.vue";
import UserFixManagement from "./components/uesrSection/fixManagement.vue";
import UserNotionManagement from "./components/uesrSection/notionManagement.vue"
import UserOrderManagement from "./components/uesrSection/orderManagement.vue"
import UserSpeakingManagement from "./components/uesrSection/UserspeakingManagement.vue"
import firstAlert from "./components/common/firstAlert.vue"


const routes = [
    {
        path: "/",
        name: "firstAlert",
        component: firstAlert,
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/adminNavbar",
        name: "adminNavbar",
        component: adminNavbar,
        children: [
            {
                path: '', // 默认子路由
                redirect: 'AdminStatistics'
            },
            {
                path: "/AdminStatistics",
                name: "statistics",
                component: AdminStatistics,
            },
            {
                path: "/Adminstudentmanagement",
                name: "studentManagement",
                component: AdminStudentManagement,
            },
            {
                path: "/AdminfixPersonnelManagement",
                name: "fixPersonnelManagement",
                component: AdminfixPersonnelManagement,
            },
            {
                path: "/AdminDormitory",
                name: "Dormitory",
                component: AdminDormitory,
            },
            {
                path: "/AdminfixManagement",
                name: "fixManagement",
                component: AdminfixManagement,
            },
            {
                path: "/AdminfixSortManagement",
                name: "fixSortManagement",
                component: AdminfixSortManagement,
            },
            {
                path: "/AdminnotionManagement",
                name: "notionManagement",
                component: AdminNotionManagement,
            },
            {
                path: "/AdminorderManagement",
                name: "orderManagement",
                component: AdminOrderManagement,
            },
            {
                path: "/AdminManagement",
                name: "AdminManagement",
                component: AdminManagement,
            },
            {
                path: "/AdminspeakingManagement",
                name: "adminspeakingManagement",
                component: AdminSpeakingManagement,
            }
        ],
    },
    {
        path: "/usernavbar",
        name: "userNavbar",
        component: UserNavBar,
        children: [
            {
              path: '', // 默认子路由
              redirect: 'UserFixManagement'
            },
            {
                path: "/userfixManagement",
                name: "userfixManagement",
                component: UserFixManagement
            },
            {
                path: "/userorderManagement",
                name: "userorderManagement",
                component: UserOrderManagement
            },
            {
                path: "/usernotionManagement",
                name: "userNotionManagement",
                component: UserNotionManagement
            },
            {
                path: "/userspeakingManagement",
                name: "userspeakingManagement",
                component: UserSpeakingManagement
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
