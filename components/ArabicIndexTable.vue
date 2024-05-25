<template>
    <div class="arabic font-nn">       
        <template v-for="con in arabicIndex" :key="con.bw">
            <HeadText :text="con.core" :id="con.core" cname="h2" />
            <div class="grid-container">
                <div v-for="(word, idx) in con.data" class="sec">
                    <HeadText :text="word.root_ar" :id="word.root_ar" cname="h3" />

                    <div v-for="(w, idx) in word.words">
                        <div class="word">
                            <span class="base-word">{{ w.word_ar }}</span>
                            <span class="mean-word-ur">{{  w.mean_ur }}</span>
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
}
</style>