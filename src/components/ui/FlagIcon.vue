<script setup lang="ts">
defineProps<{
  code: 'pt' | 'en'
}>()
</script>

<template>
  <span
    class="inline-block overflow-hidden rounded-[2px]"
    :style="{ width: '20px', height: '14px', lineHeight: 0 }"
    aria-hidden="true"
  >
    <!-- Brazil -->
    <svg v-if="code === 'pt'" viewBox="0 0 640 480" width="20" height="14">
      <path fill="#229e45" d="M0 0h640v480H0z" />
      <path fill="#f8e509" d="m321 22 297 218-297 218L24 240z" />
      <circle cx="321" cy="240" r="100" fill="#2b49a3" />
    </svg>
    <!-- United States -->
    <svg v-else viewBox="0 0 640 480" width="20" height="14">
      <rect width="640" height="480" fill="#fff" />
      <g fill="#b22234">
        <rect width="640" height="37" y="0" />
        <rect width="640" height="37" y="74" />
        <rect width="640" height="37" y="148" />
        <rect width="640" height="37" y="222" />
        <rect width="640" height="37" y="296" />
        <rect width="640" height="37" y="370" />
        <rect width="640" height="37" y="444" />
      </g>
      <rect width="256" height="259" fill="#3c3b6e" />
    </svg>
  </span>
</template>
