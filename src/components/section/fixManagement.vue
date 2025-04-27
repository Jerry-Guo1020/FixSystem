<template>
    <div>
        <h2>维修管理</h2>
        <input placeholder="请输入维修单号" class="search-dock" v-model="searchText">
        <button @click="handleSearch" class="button-search">查询</button>
        <button>添加</button>
    </div>
    <main class="container-fixManagement">
        <table class="fixManagement-table">
            <thead>
                <tr>
                    <th>宿舍楼</th>
                    <th>维修类别</th>
                    <th>学生</th>
                    <th>详细地址</th>
                    <th>联系电话</th>
                    <th>状态</th>
                    <th>创建时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(fixManagement, index) in pageFixManagement" :key="index">
                    <td>{{ fixManagement.name }}</td>
                    <td>{{ fixManagement.fixSort }}</td>
                    <td>{{ fixManagement.studentName }}</td>
                    <td>{{ fixManagement.detailLocation }}</td>
                    <td>{{ fixManagement.telephone }}</td>
                    <td><button>还没想好这个</button></td>
                    <td>{{ fixManagement.createTime }}</td>
                    <td>
                        <button class="edit-button" @click="openDialog">编辑</button>
                        <button class="delete-button" @click="openDialog">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- 分页按钮：当数据过多的时候，就需要翻下一页 -->
        <div class="pagenext">
            <button class="pageprev-button" @click="prevPage" :disabled="currentPage === 1">上一页</button>
            <span>第{{ currentPage }}页 || 共{{ allPage }}页</span>
            <button class="pageprev-button" @click="nextPage" :disabled="currentPage === allPage">下一页</button>
        </div>
    </main>
</template>

<script setup>
import { computed, ref } from 'vue';

const pageFixManagement = ref([
    { name: "A栋", fixSort: "空调", studentName: "小明", detailLocation: "A101", telephone: "13532013554", createTime: "2025-03-01" },
    { name: "B栋", fixSort: "水管", studentName: "小红", detailLocation: "B102", telephone: "13532013555", createTime: "2025-03-02" },
    { name: "C栋", fixSort: "电灯", studentName: "小刚", detailLocation: "C103", telephone: "13532013556", createTime: "2025-03-03" },
    { name: "D栋", fixSort: "门锁", studentName: "小丽", detailLocation: "D104", telephone: "13532013557", createTime: "2025-03-04" },
    { name: "E栋", fixSort: "窗户", studentName: "小强", detailLocation: "E105", telephone: "13532013558", createTime: "2025-03-05" },
    { name: "F栋", fixSort: "热水器", studentName: "小芳", detailLocation: "F106", telephone: "13532013559", createTime: "2025-03-06" },
    { name: "G栋", fixSort: "马桶", studentName: "小军", detailLocation: "G107", telephone: "13532013560", createTime: "2025-03-07" },
    { name: "H栋", fixSort: "洗手池", studentName: "小燕", detailLocation: "H108", telephone: "13532013561", createTime: "2025-03-08" },
    { name: "I栋", fixSort: "插座", studentName: "小伟", detailLocation: "I109", telephone: "13532013562", createTime: "2025-03-09" },
    { name: "J栋", fixSort: "网络", studentName: "小霞", detailLocation: "J110", telephone: "13532013563", createTime: "2025-03-10" },
    { name: "K栋", fixSort: "电梯", studentName: "小鹏", detailLocation: "K111", telephone: "13532013564", createTime: "2025-03-11" },
    { name: "L栋", fixSort: "墙面", studentName: "小翠", detailLocation: "L112", telephone: "13532013565", createTime: "2025-03-12" },
    { name: "M栋", fixSort: "地板", studentName: "小龙", detailLocation: "M113", telephone: "13532013566", createTime: "2025-03-13" },
    { name: "N栋", fixSort: "桌椅", studentName: "小娟", detailLocation: "N114", telephone: "13532013567", createTime: "2025-03-14" },
    { name: "O栋", fixSort: "门铃", studentName: "小波", detailLocation: "O115", telephone: "13532013568", createTime: "2025-03-15" },
    { name: "P栋", fixSort: "空调", studentName: "小琴", detailLocation: "P116", telephone: "13532013569", createTime: "2025-03-16" },
    { name: "Q栋", fixSort: "水管", studentName: "小宇", detailLocation: "Q117", telephone: "13532013570", createTime: "2025-03-17" }
]);

//定义搜索框的内容
const searchText =ref('');
const searchResult = ref([...pageFixManagement.value]);

function handleSearch(){
    const searchContent = searchText.value.trim();

    if(searchContent === "") {
        searchResult.value = [...pageFixManagement.value];
    } else {
        searchResult.value = pageFixManagement.value.filter(item => item.sort.includes(searchResult))
    }
    currentPage.value =1;
}



//分页相关的内容
const pageSize = 10;
const currentPage = ref(1);
//箭头函数
const allPage = computed(() => Math.ceil())
function prevPage() {
    if(currentPage.value > 1) {
        currentPage.value--;
    }
}

function nextPage() {
    if(currentPage.value < allPage.value) {
        currentPage.value++;
    }
}


</script>

<style>
.fixManagement-table {
    text-align: center;
    width: 100%;
    height: auto;
    border-collapse: collapse; /*相邻的两个边框 */
    border-spacing: 0 10px;
    margin-top: 15px;
}

.container-fixManagement{
    box-shadow: 0 8px 16px 0  rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-top: 10px;
}

.fixManagement-table thead {
    background-color: gainsboro;
    color: white;
    border-bottom: 1px solid #c2ccd0;
    
}


</style>