import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home/Home.vue";
import Login from "./components/Login/Login.vue";
import adminNavbar from "./components/navbar/adminNavbar.vue";
import Statistics from "./components/adminSection/statistics.vue";
import StudentManagement from "./components/adminSection/studentsManagement.vue";
import fixPersonnelManagement from "./components/adminSection/fixPersonnelManagement.vue";
import Dormitory from "./components/adminSection/Dormitory.vue";
import AdminManagement from "./components/adminSection/AdminManagement.vue";
import fixManagement from "./components/adminSection/fixManagement.vue";
import fixSortManagement from "./components/adminSection/fixSortManagement.vue";
import NotionManagement from "./components/adminSection/notionManagement.vue";
import OrderManagement from "./components/adminSection/orderManagement.vue";
import SpeakingManagement from "./components/adminSection/speakingManagement.vue";
import UserNavBar from "./components/navbar/userNavBar.vue";
import userFixManagement from "./components/uesrSection/fixManagement.vue";
import userNotionManagement from "./components/uesrSection/notionManagement.vue"
import userOrderManagement from "./components/uesrSection/orderManagement.vue"
import userSpeakingManagement from "./components/uesrSection/speakingManagement.vue"
import UserHome from "./Home/userHome.vue";


const routes = [
    {
        path: "/",
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
                redirect: 'Statistics'
            },
            {
                path: "/Statistics",
                name: "statistics",
                component: Statistics,
            },
            {
                path: "/studentmanagement",
                name: "studentManagement",
                component: StudentManagement,
            },
            {
                path: "/fixPersonnelManagement",
                name: "fixPersonnelManagement",
                component: fixPersonnelManagement,
            },
            {
                path: "/Dormitory",
                name: "Dormitory",
                component: Dormitory,
            },
            {
                path: "/fixManagement",
                name: "fixManagement",
                component: fixManagement,
            },
            {
                path: "/fixSortManagement",
                name: "fixSortManagement",
                component: fixSortManagement,
            },
            {
                path: "/notionManagement",
                name: "notionManagement",
                component: NotionManagement,
            },
            {
                path: "/orderManagement",
                name: "orderManagement",
                component: OrderManagement,
            },
            {
                path: "/speakingManagement",
                name: "speakingManagement",
                component: SpeakingManagement,
            },
            {
                path: "/AdminManagement",
                name: "AdminManagement",
                component: AdminManagement,
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
              redirect: 'UserHome'
            },
            {
                path: "userHome",
                name: "userHome",
                component: UserHome
            },
            {
                path: "userfixManagement",
                name: "userfixManagement",
                component: userFixManagement
            },
            {
                path: "userorderManagement",
                name: "userorderManagement",
                component: userOrderManagement
            },
            {
                path: "speakingManagement",
                name: "speakingManagement",
                component: userSpeakingManagement
            },
            {
                path: "notionManagement",
                name: "userNotionManagement",
                component: userNotionManagement
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
