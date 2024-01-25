
<template>
    <div class="item-wrap n-f-s" :class="{ 'item-shadow': shadow }">
        <div class="name" n-f-r>
            <div class="text">{{ blog.name }}</div>
            <div>
                <span>原创</span>
            </div>
        </div>
        <div n-f-r class="labels">
            <span>{{ blog.author }}</span>
            <span> · 最近更新</span>
            <span> · {{ blog.label }}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { type BlogProp } from "../types/index"
defineProps<{ blog: BlogProp, shadow?: boolean }>()

onMounted(() => {

})

</script>
<style lang="scss" scoped>
.item-shadow {}

.item-wrap {
    width: 100%;
    padding: 15px 15px;
    margin: 10px auto 5px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 6px 40px 0 rgba(0, 0, 0, 0.065);

    .name {

        .text {
            font-size: 20px;
            font-weight: 500;
            color: #333333;
        }

        span {
            padding: 1px 6px;
            margin: 0 5px 5px 0;
            background-image: linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%);
            border-radius: 15px;
            font-size: 10px;
            line-height: 15px;
            text-align: center;
            color: #ff6a6a;
            filter: blur(0.25px);
        }
    }

    &:hover {
        background-color: #FFFFFF;
        border-radius: 10px;
        box-shadow: 0 6px 40px 0 rgba(0, 0, 0, 0.065);

        .name {
            .text{
                color: #ff6a6a;
            }
          
        }
    }

    .labels {
        font-size: 13px;
        color: #999999;
    }
}
</style>