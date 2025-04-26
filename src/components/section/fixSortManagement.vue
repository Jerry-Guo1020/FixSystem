<template>
    <div>
        <h2>维修类别管理</h2>
            <input placeholder="请输入类别">
            <button>查询</button>
            <button>添加</button>
    </div>
    <main class="container-dormitory">
        <table>
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
                        <button>编辑</button>
                        <button>删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    <!-- 分页按钮区域 -->
     <div class="pagenext">
        <button class="prevpage" @click="prevpage" :disabled="currentPage === 1">上一页</button>
        <span>第{{currentPage}}页 || 共{{ allpage }}页</span>
        <button class="nextpage" @click="nextpage" :disabled="currentPage === allpage">下一页</button>
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
    
    // 定义一页显示10个数据
    const pageSize = 10;
    
    // 定义当前页的变量，然后初始值为1
    const currentPage = ref(1)
    
    const allpage = computed(() => Math.ceil(fixSort.value.length / pageSize));     /*定义一个allpage，然后后面不会，大概的公式应该是算出所有的内容能够有多少页*/
    
    const pageFixSort = computed(() => {
        const start = (currentPage.value - 1) * pageSize;
        return fixSort.value.slice(start, start + pageSize); 
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