<template>
    <div class="item-wrap" n-f-s :class="{ 'card-box': shadow }">
        <div class="name" n-f-r>
            <div class="text">{{ app.name }}</div>
            <div>
                <span>{{ app.age || '18+' }}</span>
                <span>{{ app.download || '' }}</span>
            </div>
        </div>
        <div class="content">
            <div class="logo">
                <img :src="app.logo" />
            </div>
            <div class="labels">
                <div>
                    <span>{{ app.category || '娱乐软件' }}</span>
                </div>
                <div v-if="app.labels" class="wrap">
                    <span v-for="(item, index) in app.labels"
                        :class="index % 3 == 0 ? 'blue' : index % 3 == 1 ? 'green' : 'red'">{{ item }}</span>
                </div>
                <div v-if="app.company">
                    <span>{{ app.company }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { type AppProp } from "../types/index"
defineProps<{ app: AppProp, shadow?: boolean }>()
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
            font-size: 23px;
            font-weight: bold;
            color: #333333;
        }

        span {
            padding: 1px 10px;
            margin-left: 5px;
            border: 1px solid #cfd9df;
            border-radius: 15px;
            font-size: 10px;
            color: #666666;
            filter: blur(0.25px);
        }
    }

    .content {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    &:hover {
        background-color: #FFFFFF;
        border-radius: 10px;
        box-shadow: 0 6px 40px 0 rgba(0, 0, 0, 0.065);

        .logo {
            transform: scale(1.1);
            opacity: 1;
        }
    }

    .logo {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        background-color: #F9F9F9;

        img {
            width: 100%;
            height: 100%;
            background-color: 10px;
        }

        &:hover {
            opacity: 0.8;
            transform: scale(1.1);
        }
    }


    .labels {
        margin-left: 15px;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        div {
            margin: 2px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;

            text {
                color: #666666;
                font-weight: bold;
            }

            span {
                font-weight: 500;
                color: #999999;
            }
        }

        .wrap {
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        .blue {
            padding: 1px 6px;
            margin: 0 5px 5px 0;
            background-image: linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%);
            border-radius: 15px;
            font-size: 10px;
            line-height: 15px;
            text-align: center;
            color: #666666;
            filter: blur(0.25px);
        }

        .green {
            padding: 1px 6px;
            margin: 0 5px 5px 0;
            background-image: linear-gradient(0deg, #cfd9df 0%, #e2ebf0 100%);
            border-radius: 15px;
            font-size: 10px;
            line-height: 15px;
            text-align: center;
            color: #279a00;
            filter: blur(0.25px);
        }

        .red {
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
}
</style>