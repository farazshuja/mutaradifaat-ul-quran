<template>
    <component v-for="m in words" :is="m.cname"
        :href="`https://archive.org/details/mutaradifaatulquranurdu/page/n${m.page}/mode/1up`"
        class="base-word-mean" target="_blank">
        {{ m.text }}
    </component>
</template>
<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
    mean: string | string[],
    page?: number | number[],
}

const props = withDefaults(defineProps<Props>(), {
    mean: () => [],
    page: () => [],
});

const arrayToObj = (p: number, t: string) => ({
    page: p,
    text: t,
    cname: p ? 'a' : 'span'
});

const words = computed(() => {
    if (Array.isArray(props.mean) && Array.isArray(props.page)) {
        return props.mean.map((m, i) => arrayToObj(props.page[i], m));
    }

    const page = Array.isArray(props.page) ? props.page[0] : props.page;
    const mean = Array.isArray(props.mean) ? props.mean[0] : props.mean;
    return [arrayToObj(page, mean)];
})


</script>

<style>
    .base-word-mean {
        display: inline-block;
        padding-inline-end: 10px;
    }
</style>