
<template>
    <div class="app-wrap">
        <NativeAppItem />
        <div class="item-wrap">
            <div class="title">
                <div class="adorn"></div>
                <text>应用截图</text>
                <div class="adorn"></div>
            </div>
            <div class="scroll">
                <div class="container">
                    <div class="item" v-for="item in app.screenshot"></div>
                </div>
            </div>
            <div class="title">
                <div class="adorn"></div>
                <text>应用介绍</text>
                <div class="adorn"></div>
            </div>
            <div class="intro">{{ app.intro }}</div>
            <div class="title">
                <div class="adorn"></div>
                <text>玩法介绍</text>
                <div class="adorn"></div>
            </div>
            <div class="intro">{{ app.intro }}</div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import NativeAppItem from './NativeAppItem.vue';
const app = {
    name: "好看阅读",
    logo: "",
    language: '',
    category: '',
    screenshot: ['', '', '', '', '', '', ''],
    company: "北京哎呦互娱科技有限公司",
    intro: "好看阅读快应用拥有海量的原创小说内容，分类众多，如果你想找最新最热门的小说，不妨来这里看看；即搜即看，书荒从此说再见；"
}
onMounted(() => {

})

</script>
<style lang="scss" scoped>
.app-wrap {
    width: 100vw;
    min-height: 100vh;
    // background-color: #f9f9f9;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .item-wrap {
        width: 92.5%;
        padding: 15px 15px;
        margin: 20px auto;
        background-color: #FFFFFF;
        border-radius: 10px;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        box-shadow: 0 6px 40px 0 rgba(0, 0, 0, 0.065);


        .title {
            margin: 10px 0;
            display: flex;
            box-sizing: border-box;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            font-size: 25px;
            font-weight: bold;
            color: #333333;

            text {
                margin: auto 8px;
            }

            .adorn {
                width: 6px;
                height: 20px;
                border-radius: 10px 0 10px 0;
                background-image: linear-gradient(0deg, #f83600 0%, #f9d423 100%)
            }
        }

        .scroll {
            width: 100%;
            margin: 10px 0 20px;
            overflow: hidden;
            overflow-x: auto;


            .container {
                display: flex;
                box-sizing: border-box;
                flex-direction: row;
                justify-content: center;
                align-items: flex-start;
            }

            .item {
                width: 30vw;
                height: 100px;
                margin: 30px;
                background-color: #f83600;
                border-radius: 10px;
            }
        }

        .intro {
            margin-bottom: 20px;
            font-size: 15px;
            font-weight: 500;
            color: #888888;
        }
    }
}
</style>