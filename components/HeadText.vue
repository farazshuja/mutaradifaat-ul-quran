<template>
  <component :is="cname" class="head-text" :id="id" tabindex="-1">
    {{ text }}


    <a class="header-anchor" :href="`#${id}`" :aria-label="`Permalink to &quot;${id}&quot;`">​</a>

  </component>


</template>
<script setup lang="ts">

export interface Props {
  id: string,
  text: string,
  cname?: string,
}

withDefaults(defineProps<Props>(), {
  id: () => '',
  text: () => '',
  cname: () => 'h1',
})


</script>