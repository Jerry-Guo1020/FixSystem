<template>
    <div class="container1">
    <div class="container">
        <div class="allcontent">
        <h1 class="header">请输入账号密码</h1>
        <br>
        <p class="content">账号：
        <input name="account" placeholder="📪请输入账号"></p>
        <p class="content">密码：
        <input name="password" placeholder="🔒请输入密码" ></p>
        <br>
        <button @click="gotosection">登录</button>
        <button>注册</button>
    </div>
    </div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router =useRouter();

function gotosection(){
        router.push("/adminNavbar")
}
</script>
 <style>


.container allcontent {
    padding: 100px;
    text-align: center;
    display: flex;
    justify-content: center;                   /*在水平方向上对齐容器内的子元素*/
    align-items: center;   
}

.container1 {
        /*背景色*/
    display: flex;                             /*弹性容器，可以让容器里面的元素自动调节大小和位置*/
    justify-content: center;                   /*在水平方向上对齐容器内的子元素*/
    align-items: center;                       /*在垂直方向上对齐容器内的子元素*/
    height: 100vh;                             /*将容器的高度设置为视口的高度的100% */
                                               /*导入照片*/
    background-size: cover;                    /*将整个照片覆盖整个屏幕 */
    background-repeat: no-repeat;              /* 防止背景图片重复 */
}

.container {
    width: 900px;
    height: 500px;
    padding: 50px;
    border-radius: 10px;                              /* 设置边框的弧度*/
    box-shadow: 0 0 4px 8px rgba(0, 0, 0, 0.1);     /*设置这个box 的阴影部分*/
    background-color: whitesmoke;

}

.content {
    font-size: 18px;     
    line-height: 1.8;     /*设置行距 */
    color: gray;
    
}

.p account{
    display: flex;
}

/*响应式布局学习 */
@media (max-width: 900px) {
    .container {
        padding: 30px;
        width: 95%;
        height: 210px;
    }

    .header {
        font-size: 24px;
        justify-self: start;
    }

    .content {
        font-size: 14px;
    }
}
</style> 