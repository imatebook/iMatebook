
<template>
    <div class="app-wrap n-f">
        <router-link v-for="item in appList" :to="item.path">
            <NativeBlogItem :blog="item" />
        </router-link>

    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import NativeBlogItem from './NativeBlogItem.vue';
import { type BlogProp } from "../types/index"

const props = defineProps<{ isTop: boolean }>()

const router = useRouter()
const appList = ref<BlogProp[]>([])
onMounted(() => {
    fetch("/mock/blog-list.json")
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((data: BlogProp[]) => {
            appList.value = props.isTop ? data.filter((item) => item.isTop == props.isTop) : data
        }).catch((error) => {
            console.error('无法获取 JSON 数据', error);
        });
})

function tapItem(item: BlogProp) {
    router.go(item.path)
}
</script>
<style lang="scss" scoped>
.app-wrap {
    width: 100%;
}
</style>