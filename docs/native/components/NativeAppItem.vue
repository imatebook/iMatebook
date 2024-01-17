
<template>
    <div class="item-wrap">
        <div class="name">
            <text>{{ app.name }}</text>
            <span>{{ app.age || '18+' }}</span>
        </div>
        <div class="content">
            <div class="logo">
                <img :src="app.logo" />
            </div>
            <div class="labels">
                <div>
                    <text>软件类别：</text>
                    <span>{{ app.category || '娱乐软件' }}</span>
                </div>
                <div>
                    <text>软件语言：</text>
                    <span>{{ app.language || '中文' }}</span>
                </div>
                <div>
                    <text>开发者：</text>
                    <span>{{ app.company || '未知' }}</span>
                </div>
                <div v-if="app.labels">
                    <span v-for="(item, index) in app.labels"
                        :class="index % 3 == 0 ? 'blue' : index % 3 == 1 ? 'green' : 'red'">{{ item }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, ref, onMounted } from 'vue'

const app = {
    name: "好看阅读",
    logo: "",
    age: '18+',
    language: '',
    category: '',
    company: "北京哎呦互娱科技有限公司",
    labels: ['小说', '电子书', '阅读', '新闻阅读']
}

onMounted(() => {

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
            margin: 3px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;

            text {
                color: #666666;
                font-weight: 500;
            }

            span {
                font-weight: 500;
                color: #999999;
            }
        }

        .blue {
            padding: 1px 10px;
            margin-right: 5px;
            background-image: linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%);
            border-radius: 15px;
            font-size: 12px;
            line-height: 20px;
            color: #666666;
            filter: blur(0.25px);
        }

        .green {
            padding: 1px 10px;
            margin-right: 5px;
            background-image: linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%);
            border-radius: 15px;
            font-size: 12px;
            line-height: 20px;
            color: #279a00;
            filter: blur(0.25px);
        }

        .red {
            padding: 1px 10px;
            margin-right: 6px;
            background-image: linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%);
            border-radius: 15px;
            font-size: 12px;
            line-height: 20px;
            color: #ff6a6a;
            filter: blur(0.25px);
        }
    }
}
</style>