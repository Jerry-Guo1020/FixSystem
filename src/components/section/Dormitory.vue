<template>
<div class="search-section">
    <h2>宿舍楼管理</h2>
        <input placeholder="请输入宿舍楼名" class="search-dock">
        <button class="search-button">查询</button>
        <button class="search-button">添加</button>
</div>
<main class="container-dormitory">
    <table class="student-table">
        <thead>
            <tr>
                <th>宿舍楼名字</th>
                <th>位置</th>
                <th>宿管</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(dormitory, index) in pageDormitory" :key="index">
                <td>{{ dormitory.name }}</td>
                <td>{{ dormitory.location }}</td>
                <td>{{ dormitory.leaderName }}</td>
                <td>{{ dormitory.createTime }}</td>
                <td>
                    <button class="edit-button">编辑</button>
                    <button class="delete-button">删除</button>
                </td>               
            </tr>
        </tbody>
    </table>
<!-- 分页按钮区域 -->
 <div class="pagenext">
    <button class="pageprev-button" @click="prevpage" :disabled="currentPage === 1">上一页</button>
    <span>第{{currentPage}}页 || 共{{ allpage }}页</span>
    <button class="pagenext-button" @click="nextpage" :disabled="currentPage === allpage">下一页</button>
 </div>
</main>
</template>

<script setup>
import { computed, ref } from 'vue';


const dormitory = ref([
    {name:"A栋", location:"A101", leaderName:"小明", createTime:"2024-05-01"},
    {name:"B栋", location:"B102", leaderName:"小红", createTime:"2024-05-02"},
    {name:"C栋", location:"C103", leaderName:"小刚", createTime:"2024-05-03"},
    {name:"D栋", location:"D104", leaderName:"小丽", createTime:"2024-05-04"},
    {name:"E栋", location:"E105", leaderName:"小强", createTime:"2024-05-05"},
    {name:"F栋", location:"F106", leaderName:"小芳", createTime:"2024-05-06"},
    {name:"G栋", location:"G107", leaderName:"小军", createTime:"2024-05-07"},
    {name:"H栋", location:"H108", leaderName:"小燕", createTime:"2024-05-08"},
    {name:"I栋", location:"I109", leaderName:"小伟", createTime:"2024-05-09"},
    {name:"J栋", location:"J110", leaderName:"小霞", createTime:"2024-05-10"},
    {name:"K栋", location:"K111", leaderName:"小鹏", createTime:"2024-05-11"},
    {name:"L栋", location:"L112", leaderName:"小翠", createTime:"2024-05-12"},
    {name:"M栋", location:"M113", leaderName:"小龙", createTime:"2024-05-13"},
    {name:"N栋", location:"N114", leaderName:"小娟", createTime:"2024-05-14"},
    {name:"O栋", location:"O115", leaderName:"小波", createTime:"2024-05-15"},
    {name:"P栋", location:"P116", leaderName:"小琴", createTime:"2024-05-16"},
    {name:"Q栋", location:"Q117", leaderName:"小宇", createTime:"2024-05-17"},
    {name:"R栋", location:"R118", leaderName:"小敏", createTime:"2024-05-18"},
    {name:"S栋", location:"S119", leaderName:"小志", createTime:"2024-05-19"},
    {name:"T栋", location:"T120", leaderName:"小霞", createTime:"2024-05-20"},
    {name:"U栋", location:"U121", leaderName:"小刚", createTime:"2024-05-21"},
    {name:"V栋", location:"V122", leaderName:"小丽", createTime:"2024-05-22"},
    {name:"W栋", location:"W123", leaderName:"小强", createTime:"2024-05-23"},
    {name:"X栋", location:"X124", leaderName:"小芳", createTime:"2024-05-24"},
    {name:"Y栋", location:"Y125", leaderName:"小军", createTime:"2024-05-25"},
    {name:"Z栋", location:"Z126", leaderName:"小燕", createTime:"2024-05-26"},
    {name:"AA栋", location:"AA127", leaderName:"小伟", createTime:"2024-05-27"},
    {name:"BB栋", location:"BB128", leaderName:"小霞", createTime:"2024-05-28"},
    {name:"CC栋", location:"CC129", leaderName:"小鹏", createTime:"2024-05-29"},
    {name:"DD栋", location:"DD130", leaderName:"小翠", createTime:"2024-05-30"},
    {name:"EE栋", location:"EE131", leaderName:"小龙", createTime:"2024-05-31"},
    {name:"FF栋", location:"FF132", leaderName:"小娟", createTime:"2024-06-01"},
    {name:"GG栋", location:"GG133", leaderName:"小波", createTime:"2024-06-02"},
    {name:"HH栋", location:"HH134", leaderName:"小琴", createTime:"2024-06-03"},
    {name:"II栋", location:"II135", leaderName:"小宇", createTime:"2024-06-04"}
]);

// 定义一页显示10个数据
const pageSize = 10;

// 定义当前页的变量，然后初始值为1
const currentPage = ref(1)

const allpage = computed(() => Math.ceil(dormitory.value.length / pageSize));     /*定义一个allpage，然后后面不会，大概的公式应该是算出所有的内容能够有多少页*/

const pageDormitory = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    return dormitory.value.slice(start, start + pageSize); 
})

// 构建翻页的函数，同时判断首页和尾页的禁用的按钮
function prevpage(){
    if(currentPage.value > 1){
        currentPage.value--;
    }
}
function nextpage(){
    if(currentPage.value < allpage.value){
        currentPage.value++;
    }
}



</script>

<style>
.container-dormitory{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    margin-top: 10px;
}

.tbody {
    text-align: center;
}

</style>