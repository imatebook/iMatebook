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
            <div class="title">
                <span>优秀项目</span>
                <a href="/pages/about/product/">全部项目 </a>
            </div>
            <NativeAppList :is-top="true" />
        </div>
        <div class="card">
            <div class="title">
                <span>技术博客</span>
                <a href="/pages/about/product/">全部博客 </a>
            </div>
            <NativeBlogList :is-top="true" />
        </div>
        <!-- <h2 class="h2">特色功能</h2>
        <h4 class="h4">一站式技术搜索</h4>
        <div>本站内容中包含部分技术教程，可以利用搜索框快速搜索到相关文档,快速到达你想要找的内容。</div>
        <h4 class="h4">深色模式</h4>
        <div>关爱程序员，保护视力，点击右上角的主题模式按钮试试吧~</div> -->
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
    // padding: 15px 15px;
    margin: 20px auto 10px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 6px 40px 0 rgba(0, 0, 0, 0.065);

    .title {
        margin: 20px 15px 5px;

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

.h2 {
    margin: 20px 0 5px;
    font-size: 20px;
    font-weight: bold;
    color: #333333;
}

.h4 {
    margin: 10px 0 5px;
    font-size: 16px;
    font-weight: bold;
    color: #333333;
}

.blog-item {
    width: 100%;
    /* height: 100px; */
    position: relative;
    padding: 1rem 1.5rem;
    margin-bottom: 0.8rem;
    transition: all 0.3s;

    /* border-bottom 1px solid var(--borderColor) */
    /* &:last-child {
        border-bottom none;
    } */

}
</style>