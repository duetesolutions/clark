<script setup lang="ts">
import SectionNavbar from '@/components/sections/SectionNavbar.vue'
import SectionHero from '@/components/sections/SectionHero.vue'
import SectionServices from '@/components/sections/SectionServices.vue'
import SectionProcess from '@/components/sections/SectionProcess.vue'
import SectionAbout from '@/components/sections/SectionAbout.vue'
import SectionTestimonials from '@/components/sections/SectionTestimonials.vue'
import SectionFAQ from '@/components/sections/SectionFAQ.vue'
import SectionCTA from '@/components/sections/SectionCTA.vue'
import SectionFooter from '@/components/sections/SectionFooter.vue'
</script>

<template>
  <SectionNavbar />
  <main>
    <SectionHero />
    <SectionServices />
    <SectionProcess />
    <SectionAbout />
    <SectionTestimonials />
    <SectionFAQ />
    <SectionCTA />
  </main>
  <SectionFooter />
</template>
