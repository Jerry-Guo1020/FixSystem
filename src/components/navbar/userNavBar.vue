<template>
<div class="user-container">
    <div class="navbar">
        <h2 class="title">大学保修管理系统</h2>
        <div class="menu-container">

        </div>
    </div>  
    
    <div class="content-container">
        <div class="side-menu">
            <div v-for="item in menu" :key="item.key" class="side-menu" @click="toSectionClick(item.path)">
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
const menu = [
    {label:"维修管理" , path :"/FixManagement"},
    {label:"下单管理" , path :"/olderManagement"},
    {label:"评论区" , path :"/speakingManagement"},
    {label:"公告栏" , path :"/notionManagement"}
];
</script>

<style>

</style>