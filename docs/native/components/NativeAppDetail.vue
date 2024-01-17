
<template>
    <div class="app-wrap">

        <NativeAppItem />
        <div class="item-wrap">
            <div class="name">应用截图</div>
        </div>
        <div class="item-wrap">
            <div class="name">应用介绍</div>
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
    company: "北京哎呦互娱科技有限公司",
 
}
onMounted(() => {

})

</script>
<style lang="scss" scoped>
.app-wrap {
    width: 60vw;
    min-height: 100vh;
    // background-color: #f9f9f9;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .item-wrap {
        width: 92%;
        padding: 15px 15px;
        margin-top: 30px;
        background-color: #FFFFFF;
        border-radius: 10px;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .name {
            font-size: 25px;
            font-weight: bold;
            color: #333333;
        }
    }
}
</style>