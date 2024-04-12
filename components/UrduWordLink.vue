<template>
    <component v-for="m in words" :is="m.cname"
        :href="`https://archive.org/details/mutaradifaatulquranurdu/page/n${m.page}/mode/1up`"
        class="base-word-mean" target="_blank">
        {{ m.text }}
        <a v-if="m.qref" :href="`https://quran.com/${m.qref}`">({{  m.qref }})</a>
    </component>
</template>
<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
    mean: string | string[],
    page?: number | number[],
    qRef?: string | string[]
}

const props = withDefaults(defineProps<Props>(), {
    mean: () => [],
    page: () => [],
    qRef: () => [],
});

const arrayToObj = (p: number, t: string, qref: string) => ({
    page: p,
    text: t,
    cname: p ? 'a' : 'span',
    qref,
});

const words = computed(() => {
    if (Array.isArray(props.mean) && Array.isArray(props.page) && Array.isArray(props.qRef)) {
        return props.mean.map((m, i) => arrayToObj(props.page[i], m, props.qRef[i]));
    }

    const page = Array.isArray(props.page) ? props.page[0] : props.page;
    const mean = Array.isArray(props.mean) ? props.mean[0] : props.mean;
    const qRef = Array.isArray(props.qRef) ? props.qRef[0] : props.qRef;
    return [arrayToObj(page, mean, qRef)];
})


</script>

<style>
    .base-word-mean {
        display: inline-block;
        padding-inline-end: 10px;
        margin-inline-end: 10px;
        border-inline-end: 1px solid var(--vp-c-gray-1);
    }
</style>