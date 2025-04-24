<template>
  <div class="app-container">
    <div class="navbar">
      <h2 class="title">大学保修管理系统</h2>
      <div class="menu-container">
        <div v-for="item in more" :key="item.key" class="menu-more">
          {{ item.label }}
          <div v-if="item.children" class="sub-menu">
            <div 
              v-for="child in item.children" 
              :key="child.label" 
              class="sub-menu-item"
              @click="handleMoreClick(child.label)"
            >
              {{ child.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-container">
      <div class="side-menu">
        <div v-for="item in menu" :key="item.key" class="menu-item">
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
import { useRouter } from 'vue-router';
import Home from '../../Home/Home.vue';


const router = useRouter();


const more = [
  {
    label: '更多',
    key: 'projects',
    children: [
      { label: '账号设置' },
      { label: '退出登录' }
    ],
  },
]

const menu = [
  { label: '统计分析', key: 'statistics', icon: '<BadgeCheck /> ', path : '/'},
  { label: '学生管理', key: 'students', icon: 'fa fa-user' },
  { label: '维修人员管理', key: 'repairmen', icon: 'fa fa-wrench' },
  { label: '宿舍楼管理', key: 'dormitories', icon: 'fa fa-building' },
  { label: '维修类别管理', key: 'categories', icon: 'fa fa-list' },
  { label: '维修管理', key: 'repairs', icon: 'fa fa-tools' },
  { label: '接单管理', key: 'orders', icon: 'fa fa-clipboard' },
  { label: '评论管理', key: 'comments', icon: 'fa fa-comments' },
  { label: '公告管理', key: 'announcements', icon: 'fa fa-bullhorn' },
  { label: '管理员管理', key: 'admins', icon: 'fa fa-users' },
]


</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

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

.content-container {
  display: flex;
  margin-top: 60px;
  height: calc(100vh - 60px);
}

.side-menu {
  width: 200px;
  background-color: cornflowerblue;
  height: 100%;
  overflow-y: auto;
}

.menu-item {
  padding: 15px 30px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s;
  text-align: center;  /* 文字居中 */
  margin-top: 20px;    /* 第一个菜单项的顶部间距 */
}

/* 为第一个菜单项添加特殊的顶部间距 */
.side-menu .menu-item:first-child {
  margin-top: 30px;
}

/* 当鼠标悬停时添加背景色变化 */
.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-more {
  position: relative;
  padding: 0 15px;
}

.sub-menu {
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
  font-size: 20px;
  margin: 0;
}
</style>