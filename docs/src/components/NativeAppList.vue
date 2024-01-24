
<template>
    <div class="app-wrap n-f">
        <NativeAppItem v-for="item in appList" :app="item" @click="tapItem(item)" />
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import NativeAppItem from './NativeAppItem.vue';
import { type AppProp } from "../types/index"

const props = defineProps<{ isTop: boolean }>()

const router = useRouter()
const appList = ref<AppProp[]>([])
onMounted(() => {
    fetch("/mock/app/app-list.json")
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((data: AppProp[]) => {
            appList.value = props.isTop ? data.filter((item) => item.isTop == props.isTop) : data
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
    width: 100%;
}
</style>