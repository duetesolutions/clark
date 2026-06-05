<script setup lang="ts">
import SectionNavbar from '@/components/sections/SectionNavbar.vue'
import SectionHero from '@/components/sections/SectionHero.vue'
import SectionPricing from '@/components/sections/SectionPricing.vue'
import SectionTimeline from '@/components/sections/SectionTimeline.vue'
import SectionFeatures from '@/components/sections/SectionFeatures.vue'
import SectionTestimonials from '@/components/sections/SectionTestimonials.vue'
import SectionFAQ from '@/components/sections/SectionFAQ.vue'
import SectionCTA from '@/components/sections/SectionCTA.vue'
import SectionFooter from '@/components/sections/SectionFooter.vue'
</script>

<template>
  <SectionNavbar />
  <main>
    <SectionHero />
    <SectionFeatures />
    <SectionPricing />
    <SectionTimeline />
    <SectionTestimonials />
    <SectionFAQ />
    <SectionCTA />
  </main>
  <SectionFooter />
</template>
