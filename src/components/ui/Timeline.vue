<script setup lang="ts">
import TimelineItem from './TimelineItem.vue'

defineProps<{
  items: Array<{
    step?: number | string
    title: string
    description: string
  }>
}>()
</script>

<template>
  <div class="timeline">
    <TimelineItem
      v-for="(item, index) in items"
      :key="index"
      :step="item.step ?? index + 1"
      :title="item.title"
      :description="item.description"
      :isLast="index === items.length - 1"
    />
  </div>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
}
</style>
