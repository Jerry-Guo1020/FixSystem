<template>
    <div>
        <h2>维修类别管理</h2>
        <input placeholder="请输入类别" class="search-dock" v-model="searchText">
        <button class="search-button" @click="handleSearch">查询</button>
        <button class="search-button">添加</button>
    </div>
    <main class="container-dormitory">
        <table class="fixSort-table">
            <thead>
                <tr>
                    <th>维修类别</th>
                    <th>备注</th>
                    <th>创建时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(fixSort, index) in pageFixSort" :key="index">
                    <td>{{ fixSort.sort }}</td>
                    <td>{{ fixSort.beizhu }}</td>
                    <td>{{ fixSort.createTime }}</td>
                    <td>
                        <button class="edit-button" @click="openDialog">编辑</button>
                        <button class="delete-button" @click="openDialog">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 分页按钮区域 -->
        <div class="pagenext">
            <button class="pageprev-button" @click="prevpage" :disabled="currentPage === 1">上一页</button>
            <span>第{{ currentPage }}页 || 共{{ allpage }}页</span>
            <button class="pagenext-button" @click="nextpage" :disabled="currentPage === allpage">下一页</button>
        </div>
    </main>
</template>

<script setup>
import { computed, ref } from 'vue';

const fixSort = ref([
    { sort: "空调", beizhu: "空调不制冷", createTime: "2025-03-01" },
    { sort: "水管", beizhu: "水管漏水", createTime: "2025-03-02" },
    { sort: "电灯", beizhu: "灯泡损坏", createTime: "2025-03-03" },
    { sort: "门锁", beizhu: "门锁损坏", createTime: "2025-03-04" },
    { sort: "窗户", beizhu: "窗户打不开", createTime: "2025-03-05" },
    { sort: "热水器", beizhu: "热水器不加热", createTime: "2025-03-06" },
    { sort: "马桶", beizhu: "马桶堵塞", createTime: "2025-03-07" },
    { sort: "洗手池", beizhu: "洗手池漏水", createTime: "2025-03-08" },
    { sort: "插座", beizhu: "插座无电", createTime: "2025-03-09" },
    { sort: "网络", beizhu: "网络不通", createTime: "2025-03-10" },
    { sort: "电梯", beizhu: "电梯故障", createTime: "2025-03-11" },
    { sort: "墙面", beizhu: "墙面脱落", createTime: "2025-03-12" },
    { sort: "地板", beizhu: "地板破损", createTime: "2025-03-13" },
    { sort: "桌椅", beizhu: "桌椅损坏", createTime: "2025-03-14" },
    { sort: "门铃", beizhu: "门铃不响", createTime: "2025-03-15" }
]);

//搜索栏搜索功能
const searchText = ref('');
/* 定义filteredFixSort 为输入框输入然后进行搜索的结果 ，然后初始值就是展示全部的内容，通过 “...”来进行复制原本内容*/
const filteredFixSort = ref([...fixSort.value]);     

// 输入内容然后点击查询按钮的结果输出的函数实现
function handleSearch() {
    /*定义keyword，然后获取搜索栏输入的内容信息searchText.value， trim()方法的作用是默认去除用户输入内容中的两端的空格，这样就会可以去查询内容不会收到影响 */
    const keyword = searchText.value.trim();
    /*if语句条件，如果搜索栏为空的话，那么 ...fixSort.value 全部都展示出来（正常情况） */
    if (keyword === '') {
        filteredFixSort.value = [...fixSort.value];
    } else {
        /*否则的话， 通过filter()方法进行搜索，通过includes()方法进行判断搜索栏输入的内容是否包含在fixSort.value中， 如果包含的话，就展示出来 */
        filteredFixSort.value = fixSort.value.filter(item =>item.sort.includes(keyword));
    }
    currentPage.value = 1;
}

// 分页相关
const pageSize = 10;
const currentPage = ref(1);

const allpage = computed(() => Math.ceil(filteredFixSort.value.length / pageSize));

const pageFixSort = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    return filteredFixSort.value.slice(start, start + pageSize);
});

function prevpage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}
function nextpage() {
    if (currentPage.value < allpage.value) {
        currentPage.value++;
    }
}

</script>

<style>
.container-dormitory {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-top: 10px;
}

.tbody {
    text-align: center;
}

/* 表格抬头部分的样式 */
.fixSort-table thead {
    background-color: gainsboro;
    color: white;
    border-bottom: 1px solid #c2ccd0;
    height: 40px;

}

.fixSort-table {
    width: 100%;
    height: auto;
    border-collapse: collapse;
    border-spacing: 0 10px;
    margin-top: 15px;
}

.fixSort-table tbody {
    background-color: #fff;
    color: #333;
    text-align: center;

}

.fixSort-table tbody tr:hover {
    background-color: #f1f1f1;
}

.fixSort-table td {
    padding: 12px 15px;
}

.fixSort-table .edit-button .search-button {
    justify-items: center;
    align-items: center;
}
</style>