<template>
    <div class="urdu font-nn">       
        <template v-for="con in urduIndex" :key="con.core">
            <HeadText :text="con.core" :id="con.core" cname="h2" class="mean-word-ur" />
            <div class="grid-container">
                <div v-for="(data, idx) in con.data" class="sec">
                    <HeadText :text="data.word_ur" :id="data.word_ur" cname="h3" class="mean-word-ur" />
                    <div class="word">
                        <span v-for="w in data.words" :key="w.word_ar">{{ w.word_ar }}</span>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import HeadText from '../components/HeadText.vue';
import { getUrduIndexData } from '../data/dataLayer';
import UrduWordLink from '../components/UrduWordLink.vue';

const urduIndex = getUrduIndexData();
</script>

<style>
.urdu {
    direction: rtl;

    .sec {
        padding-bottom: 10px;
    }

    h2 {
        font-size: 60px;
        text-align: center;
    }

    h3 {
        margin: 12px 0;
        font-size: 28px;
    }

    .word {
        font-size: 20px;
        margin-block-end: 5px;
    }

    .word > span:not(:last-child)::after {
        content: " - ";  /* Content to be displayed as dash */
    }
}
</style>