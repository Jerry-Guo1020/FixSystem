<template>
<div class="navbar">
    <h2 class="title">大学保修管理系统</h2>
    <div class="menu-container">
      <div v-for="item in more" :key="item.key" class="menu-item">
        {{ item.label }}
        <div v-if="item.children" class="sub-menu">
          <div v-for="child in item.children" :key="child.label" class="sub-menu-item">
            {{ child.label }}
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router =useRouter();

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

function gotologin(){
        router.push("/login")
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

 .h2.title{
    font-size: 6px;

}

menu-item {
  position: relative;
  cursor: pointer;
  padding: 5px 10px;
}

.sub-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 4px;
  display: none;
}

.menu-item:hover .sub-menu {
  display: block;
}

.sub-menu-item {
  padding: 8px 15px;
  cursor: pointer;
}

.sub-menu-item:hover {
  background-color: #f0f0f0;
}

button {
  padding: 5px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>