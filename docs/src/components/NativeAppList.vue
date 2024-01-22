
<template>
    <div class="app-wrap">
        <NativeAppItem v-for="item in appList" @click="tapItem(item)" />
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import NativeAppItem from './NativeAppItem.vue';
const router = useRouter()
const appList = ref([])
onMounted(() => {
    fetch("/mock/app-list.json")
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((data) => {
            console.log(data)
            appList.value = data
        }).catch((error) => {
            console.error('无法获取 JSON 数据', error);
        });
})

function tapItem(item: any) {
    router.go(`/pages/about/product/detail?id=${item.id}`)
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