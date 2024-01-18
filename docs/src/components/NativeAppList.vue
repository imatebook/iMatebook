
<template>
    <div class="app-wrap">
        <NativeAppItem v-for="item in appList" @click="tapItem" />
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import NativeAppItem from './NativeAppItem.vue';
const router = useRouter()
const appList = ['', '', '', '', '', '', '', '', '', '', '', '', '']
onMounted(() => {

})

function tapItem() {
    router.go('/pages/about/product/detail')
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