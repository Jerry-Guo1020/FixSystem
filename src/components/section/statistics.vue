<template>
    <h1>统计分析</h1>
    <div class="box">
        <div class="box1">
            <h2>学生数</h2>
            <div class="item2">3名</div>
            <div class="item3">当前注册的学生</div>
        </div>

        <div class="box1">
            <h2>保修数</h2>
            <p class="item2">3名</p>
            <div class="item3">当前注册的学生</div>
        </div>

        <div class="box1">
            <h2>未完成订单</h2>
            <p class="item2">1个</p>
            <div class="item3">当前注册的学生</div>
        </div>

        <div class="box1">
            <h2>评论数</h2>
            <p class="item2">1个</p>
            <div class="item3">当前注册的学生</div>
        </div>
    </div>


</template>

<script setup>



</script>

<style>
.body {
    margin: 0;      /*外边框，背景影响完全不会被填充*/
    padding: 0;     /*内边框，背景影响会被填充*/
}

.box{
    display: inline-flex;
}

.box1 {
    background-color: #5F96AA;
    display: flex;
    flex-direction: column;     /* 改为纵向排列 */
    height: 150px;
    width: 250px;
    margin: 15px;
    border-radius: 10px;
    padding: 0 30px;
    transition: all 0.8s ease;
}

.box1 h2 {
    margin-top: 10px;
    font-size: 20px;
    margin-bottom: 1px;
}

.item2 {
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0;
    text-align: center;
    color: azure;
    margin-bottom: 5px;
}

.item3 {
    font-size: 14px;
    font-weight: bolder;

}

.box1:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>