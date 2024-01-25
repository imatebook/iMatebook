<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import NativeAppList from "/components/NativeAppList.vue"
import NativeBlogList from "/components/NativeBlogList.vue"
const { theme, frontmatter } = useData()

</script>

<template>
    <div class="layout">

        <div class="card">
            <div class="title" n-f-r-b>
                <span>优秀项目</span>
                <a href="/pages/about/product/">全部项目 </a>
            </div>
            <NativeAppList :is-top="true" />
        </div>
        <div class="card">
            <div class="title" n-f-r-b>
                <span>技术博客</span>
                <a href="/pages/technology/blog/">全部博客 </a>
            </div>
            <NativeBlogList :is-top="true" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.layout {
    max-width: 1152px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

}

.card {
    width: 100%;

    .title {
        width: 100%;
        padding: 30px 0 10px;

        span {
            font-size: 30px;
            font-weight: bold;
            color: #333333;
        }

        a {
            font-weight: 500;
            color: #47caff;
        }
    }
}
</style>