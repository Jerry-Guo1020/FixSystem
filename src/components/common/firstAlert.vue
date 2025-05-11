<template>
    <transition name="popup-fade">
        <div class="box">
            <div class="popup-mask">
                <div class="contanier">
                    <div class="title">用户使用协议</div>
                    <div class="content">
                        欢迎您使用我们的系统，<br>
                        本系统旨在用于教育用途，
                        并不其他用途，<br>
                        谢谢您的理解与支持
                    </div>
                    <!-- <button class="btn" :disabled="i > 0" @click="goToHome">{{ i > 0 ? `已经阅读了这个协议(${i})` : `好的，欢迎使用~` }}</button> -->
                    <button class="btn" disabled @click="goToHome">已经阅读了这个协议(6)</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // 修改为使用useRouter


// 获取路由实例
const router = useRouter();

// 定义跳转函数
const goToHome = () => {
    router.push('/home'); // 跳转到根路径，即Home页面
}

(function setBtnTimer() {
    //获取元素
    const btn = document.querySelector('.btn')
    if (!btn) {
        setTimeout(setBtnTimer, 1);
        return ;
    }
    //倒计时
    let i = 6;
    //开启定时器
    let n = setInterval(function() {
        i--;
        btn.innerHTML = `已经阅读了这个协议(${i})`
        if (i === 0) {
            clearInterval(n)
            // 定时器停止了，我就可以按钮了
            btn.disabled = false;
            btn.innerHTML = '同意'
        }
    }, 1000)
})();

// //获取元素
// const i = ref(5)
    
// //开启定时器
// onMounted(() => {
//     let n = setInterval(() => {
//         i.value--
//         if (i.value < 0) {
//             //定时器会停止并开放按钮
//             clearInterval(n)
//         }
//     }, 1000)
// })
</script>

<style scoped>
.box {
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;

}

.contanier {
    width: 500px;
    height: 500px;
    background-color: white;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

}

.title {
    padding-top: 50px;
    text-align: center;
}

.content {
    padding-top: 50px;
    padding-left: 75px;
    padding-right: 75px;
}

.btn {
    border-radius: 15px;
    border: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: greenyellow;    
    width: 250px;
    height: 50px;
    margin-top: 150px;
    cursor: pointer;
}

.popup-mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.popup-fade-enter-active,
.popup-fade-leave-active {
    transition: opacity 0.5s cubic-bezier(.55, 0, .1, 1),
        transform 0.3s cubic-bezier(.55, 0, .1, 1);
}

.popup-fade-enter-from,
.popup-fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>