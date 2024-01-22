
<template>
    <div class="item-wrap">
        <div class="name">
            <text>{{ app.name }}</text>
            <span>{{ app.age || '18+' }}</span>
            <span>{{ app.download || ''}}</span>
        </div>
        <div class="content">
            <div class="logo">
                <img :src="app.logo" />
            </div>
            <div class="labels">
                <div>
                    <span>{{ app.category || '娱乐软件' }}</span>
                </div>
                <div v-if="app.labels" class="wrap">
                    <span v-for="(item, index) in app.labels"
                        :class="index % 3 == 0 ? 'blue' : index % 3 == 1 ? 'green' : 'red'">{{ item }}</span>
                </div>
                <div v-if="app.company">
                    <span>{{ app.company }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'

const app = {
    name: "好看阅读",
    logo: "/images/apps/logo.png",
    age: '18+',
    download: '<1万次打开',
    category: '中文 · 娱乐软件 · 快应用',
    company: "北京哎呦互娱科技有限公司",
    labels: ['小说', '电子书', '阅读', '新闻阅读']
}

onMounted(() => {
    fetch('/')
})

</script>
<style lang="scss" scoped>
.item-wrap {
    width: 92.5%;
    padding: 15px 15px;
    margin-top: 30px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 0 6px 40px 0 rgba(0, 0, 0, 0.065);

    .name {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 25px;
        font-weight: bold;
        color: #333333;

        span {
            padding: 1px 10px;
            margin-left: 5px;
            border: 1px solid #cfd9df;
            border-radius: 15px;
            font-size: 10px;
            line-height: 15px;
            color: #666666;
            filter: blur(0.25px);
        }
    }

    .content {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .logo {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        background-color: #F9F9F9;

        img {
            width: 100%;
            height: 100%;
            background-color: 10px;
        }
    }

    .labels {
        margin-left: 15px;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        div {
            margin: 2px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;

            text {
                color: #666666;
                font-weight: bold;
            }

            span {
                font-weight: 500;
                color: #999999;
            }
        }

        .wrap {
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        .blue {
            padding: 1px 6px;
            margin: 0 5px 5px 0;
            background-image: linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%);
            border-radius: 15px;
            font-size: 10px;
            line-height: 15px;
            text-align: center;
            color: #666666;
            filter: blur(0.25px);
        }

        .green {
            padding: 1px 6px;
            margin: 0 5px 5px 0;
            background-image: linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%);
            border-radius: 15px;
            font-size: 10px;
            line-height: 15px;
            text-align: center;
            color: #279a00;
            filter: blur(0.25px);
        }

        .red {
            padding: 1px 6px;
            margin: 0 5px 5px 0;
            background-image: linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%);
            border-radius: 15px;
            font-size: 10px;
            line-height: 15px;
            text-align: center;
            color: #ff6a6a;
            filter: blur(0.25px);
        }
    }
}
</style>