<script setup lang="ts">
import { ref } from 'vue'
import AccordionItem from './AccordionItem.vue'
import { useReveal } from '@/composables/useReveal'

const { reveal } = useReveal()

const props = withDefaults(
  defineProps<{
    items: Array<{ question: string; answer: string }>
    multiple?: boolean
  }>(),
  {
    multiple: false,
  },
)

const openItems = ref<Set<number>>(new Set())

function toggle(index: number) {
  if (props.multiple) {
    // Allow multiple items open simultaneously
    if (openItems.value.has(index)) {
      openItems.value.delete(index)
    } else {
      openItems.value.add(index)
    }
    // Trigger reactivity by reassigning
    openItems.value = new Set(openItems.value)
  } else {
    // Single open at a time: close if already open, otherwise open only this one
    if (openItems.value.has(index)) {
      openItems.value = new Set()
    } else {
      openItems.value = new Set([index])
    }
  }
}
</script>

<template>
  <div class="accordion">
    <AccordionItem
      v-for="(item, index) in props.items"
      :key="index"
      v-motion="reveal(index)"
      :question="item.question"
      :answer="item.answer"
      :is-open="openItems.has(index)"
      @toggle="toggle(index)"
    />
  </div>
</template>

<style scoped>
.accordion {
  width: 100%;
}
</style>
