import { createRouter, createMemoryHistory } from "vue-router";
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
import notionManagement from "./components/adminSection/notionManagement.vue";
import orderManagement from "./components/adminSection/orderManagement.vue";
import speakingManagement from "./components/adminSection/speakingManagement.vue";
import UserNavBar from "./components/navbar/userNavBar.vue";
import FixManagement from "./components/uesrSection/fixManagement.vue";
import NotionManagement from "./components/uesrSection/notionManagement.vue"
import OrderManagement from "./components/uesrSection/orderManagement.vue"
import SpeakingManagement from "./components/uesrSection/speakingManagement.vue"


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
                // {
                //     path:"/",
                //     component:
                // },
                {
                    path : "/userfixManagement",
                    name : "userfixManagement",
                    component :FixManagement
                },
                {
                    path : "/notionManagement",
                    name : "notionManagement",
                    component : notionManagement
                },
                {
                    path : "/orderManagement",
                    name : "orderManagement",
                    component :orderManagement
                },
                {
                    path : "/speakingManagement",
                    name : "speakingManagement",
                    component : speakingManagement
                },

        ]
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
