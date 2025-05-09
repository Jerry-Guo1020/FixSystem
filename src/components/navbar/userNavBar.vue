<template>
  <div class="user-container">
    <div class="user-navbar">
      <h2 class="title">大学保修管理系统</h2>
      <div class="menu-container">
        <!-- 更多菜单显示 -->
        <div v-for="item in more" :key="item.key" class="menu-more">
          {{ item.label }}
          <div v-if="item.children" class="sub-menu">
            <div v-for="child in item.children" :key="child.label" class="sub-menu">
              {{ child.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="user-content-container">
      <div class="user-side-menu">
        <div v-for="item in menu" :key="item.key" class="side-menu-item" @click="toSectionClick(item.path)">
          {{ item.label }}
        </div>
      </div>
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const toSectionClick = (path) => {
  router.push(path);
}

// 优化后的 menu 路径，全部加上 /usernavbar/ 前缀，避免与 adminNavBar 冲突
const menu = [
  { label: "维修管理", key: 'userfixManagement', path: "/userfixManagement" },
  { label: "下单管理", key: 'orderManagement', path: "userorderManagement" },
  { label: "评论区", key: 'speakingManagement', path: "/userspeakingManagement" },
  { label: "公告栏", key: 'notionManagement', path: "/usernotionManagement" }
];

const more = [
  {
    label: '更多',
    key:'projects',
    children:[
      {label :'账号设置'},
      {label :'退出登录' , path:'/login'}
    ]
  }
]
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

.user-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

.user-navbar,
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 60px;
}

.user-content-container,
.content-container {
  display: flex;
  margin-top: 60px;
  height: calc(100vh - 60px);
}

.user-side-menu,
.side-menu {
  width: 200px;
  background-color: cornflowerblue;
  height: 100%;
  overflow-y: auto;
}

.side-menu-item,
.menu-item {
  padding: 15px 30px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s;
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

/* 为第一个菜单项添加特殊的顶部间距 */
.user-side-menu .side-menu-item:first-child,
.side-menu .menu-item:first-child {
  margin-top: 30px;
}

/* 当鼠标悬停时添加背景色变化 */
.side-menu-item:hover,
.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-more {
  position: relative;
  padding: 0 15px;
  text-align: center;
}

.sub-menu,
.user-sub-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-width: 120px;
  display: none;
  z-index: 1001;
}

.menu-more:hover .sub-menu {
  display: block;
}

.sub-menu-item {
  padding: 10px 15px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s;
}

.sub-menu-item:hover {
  background-color: #f5f5f5;
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #f0f2f5;
}

.title {
  font-size: 30px;
  margin: 0;
}
</style>