
<template>
    <div class="n-page">
        <div class="n-container">
            <NativeAppItem :app="app" :shadow="true" />
            <div class="n-card-wrap n-card">
                <div class="n-tabs" m-b-20>
                    <div @click="index = 0" :class="{ active: index == 0 }">应用内容</div>
                    <div @click="index = 1" :class="{ active: index == 1 }">应用截图</div>
                    <div @click="index = 2" :class="{ active: index == 2 }">应用荣誉</div>
                </div>
                <block v-if="index == 0">
                    <block v-for="item in introList">
                        <div class="title" v-if="item.title">{{ item.title }}</div>
                        <div class="intro" v-for="intro in item.intros">{{ intro }}</div>
                    </block>
                </block>
                <block v-else-if="index == 1">
                    <div class="scroll">
                        <div class="container">
                            <div class="item" v-for="(image, index) in screenshot">
                                <img :src="image" @click="tapImage(image, index)" />
                            </div>
                        </div>
                    </div>
                </block>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { showImagePreview } from 'vant';
import NativeAppItem from './NativeAppItem.vue';

import { type AppProp, type AppIntroProp } from "../types/index"

const app = ref<AppProp>({
    name: "",
    logo: "",
    age: "",
    download: "",
    category: "",
    company: "",
    labels: "",
    intro: "",
    screenshot: []
})
const index = ref(0)
const screenshot = ref<string[]>([])
const introList = ref<AppIntroProp[]>([])
onMounted(() => {
    const query = getQueryData(window.location.search)
    let id = query["id"] || "yuwan"
    fetch(`/mock/app/detail/${id}.json`)
        .then((response) => {
            return response.json()
        })
        .then((data: AppProp) => {
            app.value = data
            screenshot.value = data.screenshot || []
            introList.value = [
                { intros: [data.intro || ''] },
                ...(data.introList || [])
            ]
        }).catch((error) => {
            console.error('无法获取 JSON 数据', error);
        });
})

function tapImage(image: string, index: number) {
    console.log("tapImage")
    // showImagePreview(screenshot.value, index)
}

function getQueryData(search = '') {
    let searchArray = search.length > 1 ? search.substring(1, search.length).split("&") : [];
    let queryData = new Object();
    for (var i = 0; i < searchArray.length; i++) {
        var queryArray = searchArray[i].split("=");
        queryData[decodeURIComponent(queryArray[0])] = decodeURIComponent(queryArray[1]);
    }
    return queryData;
}
</script>
<style lang="scss" scoped>
.n-card-wrap {
    width: 100%;
    padding: 15px 15px;
    margin: 20px auto;

    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;


    .title {
        margin: 10px 0;
        display: flex;
        box-sizing: border-box;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 17px;
        font-weight: bold;
        color: #333333;
    }

    .intro {
        margin-bottom: 20px;
        font-size: 15px;
        font-weight: 500;
        color: #888888;
    }

    .scroll {
        width: 100%;
        margin: 10px 0 20px;
        display: flex;
        box-sizing: border-box;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        // overflow: hidden;
        overflow-x: auto;


        .container {
            display: flex;
            box-sizing: border-box;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
        }

        .item {
            width: 20vw;
            margin: 0 30px;
            border-radius: 10px;
        }
    }


}
</style>