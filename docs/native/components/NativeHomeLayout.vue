<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import NativeAppList from "/components/NativeAppList.vue"
const { theme, frontmatter } = useData()
const blogList = ref([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
])
function fetchData() {
    blogList.value.forEach((item, index) => {
        item.path = "/"
        item.title = `标题${index + 1}`
        item.frontmatter = {
            titleTag: "测试",
            date: "2020-12-12"
        }
        item.excerpt = "显示"
        item.key = index
        item.author = {
            name: "作者",
            href: '/'
        }
        item.tags = []
    })
}
fetchData()
</script>

<template>
    <div class="layout">
        <h2 class="h2">高分项目</h2>
        <NativeAppList />
        <!-- <h2 class="h2">特色功能</h2>
        <h4 class="h4">一站式技术搜索</h4>
        <div>本站内容中包含部分技术教程，可以利用搜索框快速搜索到相关文档,快速到达你想要找的内容。</div>
        <h4 class="h4">深色模式</h4>
        <div>关爱程序员，保护视力，点击右上角的主题模式按钮试试吧~</div> -->

        <transition-group v-if="frontmatter.nativeBlog" tag="div" name="post">
            <div class="post card-box" v-for="(item, index) in blogList" :key="item.key">
                <div class="title-wrapper">
                    <h2>
                        <router-link :to="item.path">
                            {{ item.title }}
                            <span class="title-tag" v-if="item.frontmatter.titleTag">{{
                                item.frontmatter.titleTag
                            }}</span>
                        </router-link>
                    </h2>
                    <div class="article-info">
                        <a title="作者" class="iconfont icon-touxiang" target="_blank" v-if="item.author && item.author.href"
                            :href="item.author.href">{{ item.author.name ? item.author.name : item.author }}</a>
                        <span title="作者" class="iconfont icon-touxiang" v-else-if="item.author">{{ item.author.name ?
                            item.author.name : item.author }}</span>

                        <span title="创建时间" class="iconfont icon-riqi" v-if="item.frontmatter.date">{{
                            item.frontmatter.date.split(' ')[0] }}</span>
                        <!-- <span title="分类" class="iconfont icon-wenjian" v-if="$themeConfig.category !== false && item.frontmatter.categories
                            ">
                            <router-link :to="`/categories/?category=${encodeURIComponent(c)}`"
                                v-for="(c, index) in item.frontmatter.categories" :key="index">{{ c }}</router-link>
                        </span> -->
                        <!-- <span title="标签" class="iconfont icon-biaoqian tags" v-if="$themeConfig.tag !== false &&
                            item.frontmatter.tags &&
                            item.frontmatter.tags[0]
                            ">
                            <router-link :to="`/tags/?tag=${encodeURIComponent(t)}`"
                                v-for="(t, index) in item.frontmatter.tags" :key="index">{{ t }}</router-link>
                        </span> -->
                    </div>
                </div>
                <div class="excerpt-wrapper" v-if="item.excerpt">
                    <div class="excerpt" v-html="item.excerpt"></div>
                    <router-link :to="item.path" class="readmore iconfont icon-jiantou-you">阅读全文</router-link>
                </div>
            </div>
        </transition-group>
    </div>
</template>
<style lang="scss" scoped>
.layout {
    margin: 0 8vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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




/* //   .post

//     &.post-leave-active
//       display none
//     &.post-enter
//       opacity 0
//       transform translateX(-20px)
//     &::before
//       position absolute
//       top -1px
//       right 0
//       font-size 2.5rem
//       color $activeColor
//       opacity 0.85
//     .title-wrapper
//       a
//         color var(--textColor)
//         &:hover
//           color $accentColor
//       h2
//         margin 0.5rem 0
//         font-size 1.4rem
//         border none
//         .title-tag
//           height 1.2rem
//           line-height 1.2rem
//           border 1px solid $activeColor
//           color $activeColor
//           font-size 0.8rem
//           padding 0 0.35rem
//           border-radius 0.2rem
//           margin-left 0rem
//           transform translate(0, -0.15rem)
//           display inline-block
//         a
//           display block
//           @media (max-width $MQMobile)
//             font-weight 400
//       .article-info
//         > a, > span
//           opacity 0.7
//           font-size 0.8rem
//           margin-right 1rem
//           cursor pointer
//           &::before
//             margin-right 0.3rem
//           a
//             margin 0
//             &:not(:first-child)
//               &::before
//                 content '/'
//         .tags a:not(:first-child)::before
//           content '、'
//     .excerpt-wrapper
//       border-top 1px solid var(--borderColor)
//       margin 0.5rem 0
//       overflow hidden
//       .excerpt
//         margin-bottom 0.3rem
//         font-size 0.92rem
//         h1, h2, h3
//           display none
//         img
//           max-height 280px
//           max-width 100% !important
//           margin 0 auto
//       .readmore
//         float right
//         margin-right 1rem
//         line-height 1rem
//         &::before
//           float right
//           font-size 0.8rem
//           margin 0.1rem 0 0 0.2rem
// .theme-style-line
//   .post-list
//     border 1px solid var(--borderColor)
//     border-bottom none
//     border-radius 5px
//     overflow hidden
//     .post
//       margin-bottom 0
//       border none
//       border-bottom 1px solid var(--borderColor)
//       border-radius 0 */
</style>