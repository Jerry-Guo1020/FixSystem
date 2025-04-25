<template>
    <h1>统计分析</h1>
    <div class="all">
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

        <!-- 条形统计图 -->
        <div class="chart">
            <div class="chart-container">
                <h2>各个维修类别的报修数量</h2>
                <!-- 制作图表 -->
                <div class="bar-chart">
                    <!-- v-for属于HTML的div标签的属性指令，用于遍历数组或对象，生成重复的元素。 -->
                    <div class="chart-item" v-for="(item, index) in chartData" :key="index">
                        <div class="bar-wrapper">
                            <div class="bar" :style="{ height: (item.value / maxvalue) * 100 + '%' }">
                                {{ item.value }}</div>
                        </div>
                        <div class="item-label">{{ item.label }}</div>

                    </div>
                </div>
            </div>

            <!-- 条形统计图 -->
            <div class="chart-container">
                <h2>各个维修类别的报修数量</h2>
                <!-- 制作图表 -->
                <div class="bar-chart">
                    <!-- v-for属于HTML的div标签的属性指令，用于遍历数组或对象，生成重复的元素。 -->
                    <div class="chart-item" v-for="(item, index) in chartData" :key="index">
                        <div class="bar-wrapper">
                            <div class="bar" :style="{ height: (item.value / maxvalue) * 100 + '%' }">
                                {{ item.value }}</div>
                        </div>
                        <div class="item-label">{{ item.label }}</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

//建立条形统计图的数据
const chartData = ref([
    { label: '空调', value: 10 },
    { label: '洗衣机', value: 15 },
    { label: '冰箱', value: 20 },
    { label: '电视', value: 25 },
])

// 计算最大值，用于确定条形图的比例
const maxValue = computed(() => {
    return Math.max(...chartData.value.map(item => item.value));
});
</script>

<style>
.body {
    margin: 0;
    /*外边框，背景影响完全不会被填充*/
    padding: 0;
    /*内边框，背景影响会被填充*/
}
.all {
    
}

.box {
    display: inline-flex;
}

.box1 {
    background-color: #5F96AA;
    display: flex;
    flex-direction: column;
    /* 改为纵向排列 */
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

.chart {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: none;

}


/* 条形统计图样式 */
.chart-container {
    background-color: white;
    padding: 20px;
    margin: 15px;
    margin-top: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    width: 600px;
    height: 320px;
}

/* 把这个容器有动画效果 */
.chart-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.chart-container h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

.bar-chart {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 200px;
}

.chart-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
}

.bar-wrapper {
    width: 50px;
    height: 150px;
    background-color: #f5f5f5;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
}

.bar {
    width: 100%;
    background: linear-gradient(180deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 4px 4px 0 0;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: height 0.8s ease;
}

.bar-value {
    color: white;
    font-weight: bold;
    padding-top: 5px;
}

.item-label {
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
}
</style>