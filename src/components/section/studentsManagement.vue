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
                        <button class="edit-button" @click="openDialog">编辑</button>
                        <button class="delete-button"  @click="openDialog">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 分页按钮：当数据过多的时候，就需要翻下一页 -->
        <div class="pagenext">
            <!-- :disabled="currentPage===1" 的解析 ： 这个一般用于动态禁用按钮元素。 
                 这个的意思是：当currentPage等于1的时候，那就这个按钮禁用，然后currentPage是定义初始的代码 -->
            <button class="pageprev-button" @click="prevpage" :disabled="currentPage === 1">上一页</button>
            <span>第{{ currentPage }}页 || 共{{ allpage }}页</span>
            <!-- :disabled="currentPage===allpage" 的解析 ： 这个一般用于动态禁用按钮元素。 -->
            <button class="pagenext-button" @click="nextpage" :disabled="currentPage === allpage">下一页</button>
        </div>
        <!-- 弹窗部分，添加动画 -->
        <transition name="popup-fade">
            <div v-if="showDialog" class="popup-mask">
                <div class="popup-card">
                    <div class="popup-title">提示</div>
                    <div class="popup-content">此功能正在开发中<br>敬请期待…</div>
                    <button class="popup-button" @click="closeDialog">确定</button>
                </div>
            </div>
        </transition>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue';

const pageSize = 10;     /*定义一页显示十个内容 */
const currentPage = ref(1);     /* 定义初始的页码，不会 ref(1)*/
const allpage = computed(() => Math.ceil(students.value.length / pageSize));     /*定义一个allpage，然后后面不会，大概的公式应该是算出所有的内容能够有多少页*/

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
    { phone: '13800000001', name: '张三', gender: '男', class: '一班', dorm: '101' },
    { phone: '13800000002', name: '李四', gender: '女', class: '二班', dorm: '102' },
    { phone: '13800000003', name: '王五', gender: '男', class: '三班', dorm: '103' },
    { phone: '13800000004', name: '赵六', gender: '女', class: '四班', dorm: '104' },
    { phone: '13800000005', name: '钱七', gender: '男', class: '一班', dorm: '105' },
    { phone: '13800000006', name: '孙八', gender: '女', class: '二班', dorm: '106' },
    { phone: '13800000007', name: '周九', gender: '男', class: '三班', dorm: '107' },
    { phone: '13800000008', name: '吴十', gender: '女', class: '四班', dorm: '108' },
    { phone: '13800000009', name: '郑一', gender: '男', class: '一班', dorm: '109' },
    { phone: '13800000010', name: '王二', gender: '女', class: '二班', dorm: '110' },
    { phone: '13800000011', name: '冯三', gender: '男', class: '三班', dorm: '111' },
    { phone: '13800000012', name: '陈四', gender: '女', class: '四班', dorm: '112' },
    { phone: '13800000013', name: '褚五', gender: '男', class: '一班', dorm: '113' },
    { phone: '13800000014', name: '卫六', gender: '女', class: '二班', dorm: '114' },
    { phone: '13800000015', name: '蒋七', gender: '男', class: '三班', dorm: '115' },
    { phone: '13800000016', name: '沈八', gender: '女', class: '四班', dorm: '116' },
    { phone: '13800000017', name: '韩九', gender: '男', class: '一班', dorm: '117' },
    { phone: '13800000018', name: '杨十', gender: '女', class: '二班', dorm: '118' },
    { phone: '13800000019', name: '朱一', gender: '男', class: '三班', dorm: '119' },
    { phone: '13800000020', name: '秦二', gender: '女', class: '四班', dorm: '120' },
    { phone: '13800000021', name: '尤三', gender: '男', class: '一班', dorm: '121' },
    { phone: '13800000022', name: '许四', gender: '女', class: '二班', dorm: '122' },
    { phone: '13800000023', name: '何五', gender: '男', class: '三班', dorm: '123' },
    { phone: '13800000024', name: '吕六', gender: '女', class: '四班', dorm: '124' },
    { phone: '13800000025', name: '施七', gender: '男', class: '一班', dorm: '125' },
]);

/* 定义一个函数，来实现一个弹窗 */
const showDialog = ref(false);

function openDialog() {
    showDialog.value = true;
}
function closeDialog() {
    showDialog.value = false;
}

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
    padding: 0px;
    margin: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}


/* 表格抬头部分的样式 */
.student-table thead {
    background-color: gainsboro;
    color: white;
    border-bottom: 1px solid #c2ccd0;
    height: 40px;

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
    cursor: pointer;

}

.delete-button {
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 20px;
    cursor: pointer;
}

 .pagenext {
    text-align: center;
    padding: 5px;
}

.pageprev-button{
    background-color: dodgerblue;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 20px;
}

.pagenext-button{
    background-color: dodgerblue;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px ;
    margin-right: 20px;
    margin-left: 20px;
}

.popup-mask {
    position: fixed;
    left: 0; /* 距离左侧的距离 */
    top: 0; /* 距离顶部的距离 */
    right: 0; /* 距离右侧的距离 */
    bottom: 0; /* 距离底部的距离 */
    background-color: rgba(0, 0, 0, 0.5); /* 半透明的黑色背景 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.popup-card {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 400px;
    width: 100%;
}

.popup-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px; 
}

.popup-content {
    font-size: 16px;
    margin-bottom: 20px;
}

.popup-button{
    background-color: dodgerblue;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px ;
    margin-right: 20px;
    margin-left: 20px;
    width: 80px;
    height: 30px
}

/* 弹窗动画样式ai */
.popup-fade-enter-active, .popup-fade-leave-active {
    transition: opacity 0.3s cubic-bezier(.55,0,.1,1), transform 0.3s cubic-bezier(.55,0,.1,1);
}
.popup-fade-enter-from, .popup-fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
.popup-fade-enter-to, .popup-fade-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>