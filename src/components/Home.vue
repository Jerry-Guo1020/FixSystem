<template>
    <div class="container">
        <h1 class="header">欢迎使用大学保修管理系统</h1>
        <h2 class="content">欢迎使用大学保修管理系统，这里是您校园保修管理的专属平台，您可以在这里查询到您的设备保修情况，并及时掌握设备保修的最新动态。</h2>
        <h2 class="content">我们通过高效率的系统方式来方便便捷的去管理校园</h2>
    </div>
</template>

<script setup>
</script>

<style>
* {
    margin: 0;                  /*外边距*/
    padding: 0;                 /*内边距*/
    box-sizing: border-box;     /*盒模型*/
    justify-items: center;
}

body {
    background-color: #f5f5f5;   /*背景色*/
    display: flex;                 /*弹性容器，可以让容器里面的元素自动调节大小和位置*/
    justify-content: center;       /*在水平方向上对齐容器内的子元素*/
    align-items: center;           /*在垂直方向上对齐容器内的子元素*/
    height: 100vh;                 /*将容器的高度设置为视口的高度的100% */
    
}

.container {
    width: 90%;
    max-width: 800px;
    padding: 50px;
    text-align: center;
    border-radius: 10px;                             /* 设置边框的弧度*/
    box-shadow: 0 0 4px 8px rgba(0, 0, 0, 0.1)     /*设置这个box 的阴影部分*/

}

.content {
    font-size: 18px;     
    line-height: 1.8;     /*设置行距 */
    color: gray;
    text-align: center;
}

/*响应式布局学习 */
@media (max-width: 600px) {
    .container {
        padding: 30px;
        width: 95%;
        height: 210px;
    }

    .header {
        font-size: 24px;
    }

    .content {
        font-size: 14px;
    }
}
</style>