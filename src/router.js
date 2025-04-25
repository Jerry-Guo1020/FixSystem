import { createRouter, createMemoryHistory } from "vue-router";
import Home from "./Home/Home.vue";
import Login from "./components/Login/Login.vue";
import Section from "./components/navbar/navbar.vue";
import Statistics from "./components/section/statistics.vue";
import StudentManagement from "./components/section/studentsManagement.vue";
import fixPersonnelManagement from "./components/section/fixPersonnelManagement.vue";
import Dormitory from "./components/section/Dormitory.vue";
import AdminManagement from "./components/section/AdminManagement.vue";
import fixManagement from "./components/section/fixManagement.vue";
import fixSortManagement from "./components/section/fixSortManagement.vue";
import notionManagement from "./components/section/notionManagement.vue";
import orderManagement from "./components/section/orderManagement.vue";
import speakingManagement from "./components/section/speakingManagement.vue";



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
    path: "/section",
    name: "section",
    component: Section,
    children: [
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
        component: notionManagement,
      },
      {
        path: "/orderManagement",
        name: "orderManagement",
        component: orderManagement,
      },
      {
        path: "/speakingManagement",
        name: "speakingManagement",
        component: speakingManagement,
      },
      {
        path: "/AdminManagement",
        name: "AdminManagement",
        component: AdminManagement,
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
