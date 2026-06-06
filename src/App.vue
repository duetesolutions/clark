<script setup lang="ts">
import SectionAbout from '@/components/sections/SectionAbout.vue'
import SectionCTA from '@/components/sections/SectionCTA.vue'
import SectionFAQ from '@/components/sections/SectionFAQ.vue'
import SectionFooter from '@/components/sections/SectionFooter.vue'
import SectionHero from '@/components/sections/SectionHero.vue'
import SectionNavbar from '@/components/sections/SectionNavbar.vue'
import SectionProcess from '@/components/sections/SectionProcess.vue'
import SectionServices from '@/components/sections/SectionServices.vue'
import SectionTestimonials from '@/components/sections/SectionTestimonials.vue'
</script>

<template>
  <main>
    <SectionNavbar />
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
