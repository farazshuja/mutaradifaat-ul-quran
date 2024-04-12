<template>
    <div class="arabic font-nn">       
        <template v-for="con in arabicIndex" :key="con.bw">
            <HeadText :text="con.ab" :id="con.bw" cname="h2" />
            <div class="grid-container">
                <div>
                    <div v-for="(word, idx) in con.list">
                        <HeadText v-if="word[idx]?.root !== word[idx-1]?.root" :text="word.root" :id="word.root_bw" cname="h3" />
                        <div class="word">
                            <span class="base-word">{{ word.word }}</span>
                            <UrduWordLink :mean="word.urdu_mean" :page="word.page" :q-ref="word.q_ref" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import HeadText from '../components/HeadText.vue';
import { getArabicIndexData } from '../data/dataLayer';
import UrduWordLink from '../components/UrduWordLink.vue';

const arabicIndex = getArabicIndexData();
</script>

<style>
.arabic {
    container-name: arabic-index;
    container-type: inline-size;
    direction: rtl;

    .grid-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        width: 100%;

        > div1 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        .base-word {
            display: inline-block;
            padding-inline-end: 10px;
        }
    }

    h2 {
        font-size: 36px;
    }

    h3 {
        margin: 12px 0;
        font-size: 28px;
    }

    .word {
        font-size: 20px;
        margin-block-end: 5px;
    }
}
</style>