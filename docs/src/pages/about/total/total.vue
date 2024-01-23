<template>
    <div class="total">
        <div class="container">
            <div class="hero">
                <div class="card" v-for="item in hero">
                    <div>
                        <span class="clip">{{ item.value }}</span>
                    </div>
                    <span class="text">{{ item.text }}</span>
                </div>
            </div>
            <h2 class="h2">
                <div>月度账单</div>
                <h4 class="h4">（￥ {{ surplus }}）</h4>
                <h4 class="h4" @click="tapManager">管理</h4>
            </h2>
            <h4 class="h4">全部收入（￥ {{ income }}）</h4>
            <div class="item" v-for="item in incomeList">
                <div class="name">{{ item.time }}</div>
                <div class="value">￥ +{{ item.value }}</div>
                <div class="name">{{ item.name }}</div>
            </div>
            <h4 class="h4">全部支出（￥ {{ disburse }}）</h4>
            <div class="item" v-for="item in disburseList">
                <div class="name">{{ item.time }}</div>
                <div class="value">￥ {{ item.value }}</div>
                <div class="name">{{ item.name }}</div>
            </div>
        </div>
        <FloatingBubble></FloatingBubble>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
// import { FloatingBubble } from 'vant';
const baseBalance = 349500
const incomeList = [
    {
        name: '月度工资（待缴）',
        value: 4000,
        time: '2024年01月10日'
    },
    {
        name: '基本工资（已入账2000）',
        value: 8900,
        time: '2024年01月10日'
    },
    {
        name: '绩效工资（已入账8000）',
        value: 9400,
        time: '2024年01月15日'
    },
    {
        name: '银行理财（待入账）',
        value: 203800,
        time: '2024年01月26日'
    },
]
const disburseList = [
    {
        name: '上月支出（生活）',
        value: -6400,
        time: '2023年12月'
    },
    {
        name: '上月支出（预留现金）',
        value: -600,
        time: '2023年12月'
    },
    {
        name: '本月支出（学费）',
        value: 0,
        time: '2023年01月'
    },
    {
        name: '本月支出（奖励老婆）',
        value: -500,
        time: '2023年01月'
    },
    {
        name: '本月支出（奖励老公）',
        value: -300,
        time: '2023年01月'
    },
]

const income = computed(() => formatNum(total(incomeList)))
const disburse = computed(() => formatNum(total(disburseList)))
const surplus = computed(() => {
    let _income = total(incomeList)
    let _disburse = total(disburseList)
    let _surplus = _income + _disburse
    return formatNum(_surplus)
})
const hero = computed(() => {
    let _income = total(incomeList)
    let _disburse = total(disburseList)
    let _balance = baseBalance + _income + _disburse
    return [{ value: formatNum(_balance), text: '总存款（本月预估）' }, { value: formatNum(baseBalance), text: '总存款（截止上月）' }]
})

function total(list = []) {
    return list.length === 0 ? 0 : list.map(item => item.value).reduce((accumulator, current) => accumulator + current)
}

function formatNum(num = 0) {
    const isNegative = num < 0;
    if (isNegative) num = Math.abs(num);
    let c = num !== 0 ? num.toString().replace(/(\d)(?=(\d{4})+$)/g, '$1,') : '0';
    return isNegative ? `-${c}` : c;
}
function tapManager() {

}
</script>
<style lang="scss" scoped>
.total {
    padding: 30px 24px 48px;
}

.container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1152px;
}

@media (min-width: 640px) {
    .total {
        padding: 30px 30px 64px;
    }
}

@media (min-width: 960px) {
    .total {
        padding: 30px;
    }
}

.hero {
    display: flex;
    flex-direction: column;

    .card {
        flex: 1;
        padding: 30px 0 15px;
        margin: 0 5px;
        background-color: #FFFFFF;
        border-radius: 10px;
        box-shadow: 0 6px 40px 0 rgba(0, 0, 0, 0.065);
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            font-size: 50px;
            margin-bottom: 20px;
        }

        &:hover {
            opacity: 0.8;

            .clip {
                transform: scale(1.2);
                opacity: 1;
            }
        }

        .clip {
            background: var(--vp-home-hero-name-background);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: var(--vp-home-hero-name-color);


        }

        .text {
            font-size: 15px;
            color: #999999;
        }
    }
}

@media (min-width: 960px) {
    .hero {
        flex-direction: row;
    }
}






.h2 {
    margin: 20px 0 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
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
    padding: 8px 10px;
    flex: 1;
    display: flex;
    justify-content: scenter;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    color: #333333;
}

.value {
    height: 100%;
    padding: 8px 10px;
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