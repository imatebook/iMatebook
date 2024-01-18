<template>
    <div :class="$style.layout">
        <h2 :class="$style.h2">月度账单</h2>
        <h4 :class="$style.h4">全部收入（{{ income }}）</h4>
        <div v-for="item in incomeList">
            <div class="name">{{ item.name }}</div>
            <div class="value">{{ item.value }}</div>
            <div class="time">{{ item.time }}</div>
        </div>
        <h4 :class="$style.h4">全部支出（{{ disburse }}）</h4>
        <bolck v-if="disburseList.length > 0">
            <div v-for="item in incomeList"></div>
        </bolck>
        <bolck v-else>
            <div>暂无</div>
        </bolck>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const incomeList = ref([
    {
        name: '工资',
        value: 2000,
        time: '2024年1月10日'
    }
])
const disburseList = [

]
const income = computed(() => {
    let income = incomeList.length == 0 ? 0
        : incomeList.map(item => item.value).reduce((accumulator, current) => accumulator + current)
    console.log(incomeList.map(item => item.value))
    console.log(incomeList.map(item => item.value).reduce((accumulator, current) => accumulator + current))
    return `+${income}`
})
const disburse = computed(() => {
    let disburse = disburseList.reduce((accumulator, value) => accumulator + value)
    return disburse < 0 ? `-${disburse}` : 0
})
</script>
<style>
.style {
    border: 1px dashed #ccc;
}
</style>