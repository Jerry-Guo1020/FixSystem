<template>
  <transition name="popup-fade">
    <div v-if="show" class="popup-mask">
      <div class="popup-card">
        <div class="popup-title">{{ title }}</div>
        <div class="popup-content">
          <slot>
            {{ content }}
          </slot>
        </div>
        <button class="popup-button" @click="$emit('close')">确定</button>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  show: Boolean,
  title: {
    type: String,
    default: '提示'
  },
  content: {
    type: String,
    default: '此功能正在开发中<br>敬请期待…'
  }
});
</script>

<style scoped>
.popup-mask {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex; justify-content: center; align-items: center;
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
.popup-button {
  background-color: dodgerblue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 20px;
  margin-left: 20px;
  width: 80px;
  height: 30px;
}
.popup-fade-enter-active, .popup-fade-leave-active {
  transition: opacity 0.5s cubic-bezier(.55,0,.1,1), 
  transform 0.3s cubic-bezier(.55,0,.1,1);
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