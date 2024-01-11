---
layout: home

hero:
  name: "￥ 34,9500"
  # text: 总存款
  tagline: 总存款（计算日期截止至上月）
  image:
    src: "https://istatic.netlify.app/blog/logo_large.png"
    alt: logo
  actions:
    - theme: brand
      text: 首页

features:
  - title: "￥ +18500"
    details: 本月预估存款（预估收入25500 - 预估支出7000）

  - title: "￥ +25500"
    details: 本月预估收入（工资21500 + 工资4000）

  - title: "￥ -7000"
    details: 本月预估支出（消费5440 + 学费1560）

  - title: "￥ 0"
    details: 上月实际存款（实际收入0 - 实际支出0）

  - title: "￥ 0"
    details: 上月实际收入（工资0+ 工资0）

  - title: "￥ 0"
    details: 上月实际支出（消费0 + 学费0）
---

<script setup>
import { ref, computed } from 'vue'
const incomeList = [
    {
        name: '月度工资（待缴）',
        value: 4000,
        time: '2024年1月10日'
    },
    {
        name: '基本工资（上缴）',
        value: 2000,
        time: '2024年1月10日'
    },
    {
        name: '基本工资（取现）',
        value: 6900,
        time: '2024年1月10日'
    },
]
const disburseList = [
    {
        name: '上月支出',
        value: -6400,
        time: '2023年12月'
    },
    {
        name: '预留现金',
        value: -600,
        time: '2023年12月'
    }
]
const income = computed(() => {
    let _income = incomeList.length == 0 ? 0 
    : incomeList.map(item => item.value).reduce((accumulator, current) => accumulator + current) 
    return _income > 0 ? `+${_income}` : '0'
})
const disburse = computed(() => {
  let _disburse = disburseList.length == 0 ? 0 
    : disburseList.map(item => item.value).reduce((accumulator, current) => accumulator + current) 
    return `${_disburse}`
})
const balance = computed(() => {
    let _income = incomeList.length == 0 ? 0 
    : incomeList.map(item => item.value).reduce((accumulator, current) => accumulator + current) 
    let _disburse = disburseList.length == 0 ? 0 
    : disburseList.map(item => item.value).reduce((accumulator, current) => accumulator + current) 
    let _balance = _income + _disburse
    return _balance > 0 ? `+${_balance}` : '0'
})
</script>

<div :class="$style.layout">
    <h2 :class="$style.h2">
        <div>月度账单</div>
        <div :class="$style.h4">（￥ {{ balance }}）</div>
    </h2>
    <h4 :class="$style.h4">全部收入（￥ {{ income }}）</h4>
    <div :class="$style.item" v-for="item in incomeList">
        <div :class="$style.name">{{ item.time }}</div>
        <div :class="$style.value">￥ +{{ item.value }}</div>
        <div :class="$style.name">{{ item.name }}</div>
    </div>
    <h4 :class="$style.h4">全部支出（￥ {{ disburse }}）</h4>
    <div :class="$style.item" v-for="item in disburseList">
        <div :class="$style.name">{{ item.time }}</div>
        <div :class="$style.value">￥ {{ item.value }}</div>
        <div :class="$style.name">{{ item.name }}</div>
    </div>
</div>

<style module>
.layout {
    margin:0 12vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.h2 {
    margin: 20px 0 5px;
    font-size: 20px;
    font-weight: bold;
    color: #333333;
}
.h4 {
    margin: 10px 0 5px;
    font-size: 16px;
    font-weight: bold;
    color: #333333;
}
.item {
    width: 100%;
    padding: 8px 0;
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: aliceblue;
    border: 1px dashed #ccc;
}
.name {
    height: 100%;
    padding: 0 10px;
    flex: 1;
    display: flex;
    justify-content: scenter;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    color: #333333;
}
.unit {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: scenter;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    color: #333333;
}
.value {
    height: 100%;
    padding: 0 10px;
    flex: 1;
    border-left: 1px dashed #ccc;
    border-right: 1px dashed #ccc;
    display: flex;
    flex-direction: row;
    justify-content: scenter;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    color: #333333;
}
</style>
