/*现在这一个部分遇到了一个问题：我首先在表格是弄了一个容器，然后通过这个容器来装里面的数据，但是 */
<template>
    
    <div class="search-section">
        <h2>学生管理</h2>
        <input placeholder="请输入手机号" class="search-dock">
        <button class="search-button">查询</button>
        <button class="search-button">添加</button>
    </div>
    <main class="container-studentmanagement">
        <table class="student-table">
            <thead>
                <tr>
                    <th>手机号码</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>班级</th>
                    <th>宿舍号</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student, index) in pagedStudents" :key="index">
                    <td>{{ student.phone }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.gender }}</td>
                    <td>{{ student.class }}</td>
                    <td>{{ student.dorm }}</td>
                    <td>
                        <button class="edit-button">编辑</button>
                        <button class="delete-button">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 分页按钮：当数据过多的时候，就需要翻下一页 -->
        <div class="pagenext">
            <!-- :disabled="currentPage===1" 的解析 ： 这个一般用于动态禁用按钮元素。 
                 这个的意思是：当currentPage等于1的时候，那就这个按钮禁用，然后currentPage是定义初始的代码 -->
            <button class="pagenext-button" @click="prevpage" :disabled="currentPage === 1">上一页</button>
            <span>第{{ currentPage }}页 || 共{{ allpage }}页</span>
            <!-- :disabled="currentPage===allpage" 的解析 ： 这个一般用于动态禁用按钮元素。 -->
            <button class="pagenext-button" @click="nextpage" :disabled="currentPage === allpage">下一页</button>
        </div>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue';

const pageSize = 10;     /*定义一页显示十个内容 */
const currentPage = ref(1);     /* 定义初始的页码，不会 ref(1)*/
const allpage = computed(() => Math.ceil(students.value.length / pageSize));     /*定义一个allpage，然后后面不会*/

/* 定义一个pagedStudents，然后后面不会 */
const pagedStudents = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    return students.value.slice(start, start + pageSize);
});

/*新建一个函数，通过if语句来执行上一页 */
function prevpage() {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}

/*新建一个函数，通过if语句来执行下一页 */
function nextpage() {
    if (currentPage.value < allpage.value) {
        currentPage.value++
    }
}

const students = ref([
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '1234567890', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
    { phone: '9876543210', name: '李四', gender: '女', class: '二班', dorm: '202' },
]);


</script>

<style>
.serch-section {
    margin: 10px;
    width: 50px;
    height: 30px;
    display:flex;
    margin-bottom: 20px;
}

.search-dock {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: none;
    margin-top: 0;
}

.search-button {
    width: 50px;
    height: 30px;
    border-radius: 5px;
    background-color: #0c8918;
    border: none;
    margin-left: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    color: azure;
}



.container-studentmanagement {
    border-radius: 10px;
    width: auto;
    height: auto;
    transition: 0.5s;
    padding: 1px;
    margin: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}


/* 表格抬头部分的样式 */
.student-table thead {
    background-color: gainsboro;
    color: white;
    border-bottom: 1px solid #c2ccd0;
    height: 50px;

}

.student-table {
    width: 100%;
    height: auto;
    border-collapse: collapse;
    border-spacing: 0 10px;
    margin-top: 15px;
}

.student-table tbody {
    background-color: #fff;
    color: #333;
    text-align: center;

}

.student-table tbody tr:hover {
    background-color: #f1f1f1;
}

.student-table td {
    padding: 12px 15px;
}

.student-table .edit-button .search-button {
    justify-items: center;
    align-items: center;
}

.edit-button {
    background-color: dodgerblue;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 20px;
}

.delete-button {
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 20px;
}
</style>