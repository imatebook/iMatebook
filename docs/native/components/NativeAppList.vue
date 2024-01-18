
<template>
    <div class="app-wrap">
        <router-link v-for="item in appList" to="/about/product/detail">
            <NativeAppItem />
        </router-link>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import NativeAppItem from './NativeAppItem.vue';
const appList = ['', '', '', '', '', '', '', '', '', '', '', '', '']
onMounted(() => {

})

function tapItem() {

}
</script>
<style lang="scss" scoped>
.app-wrap {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>