import type { MotionVariants } from '@vueuse/motion'

/**
 * Reveal-on-scroll helper for @vueuse/motion.
 * Returns a `v-motion` variant that fades + slides an element up once it
 * enters the viewport. Pass an index to stagger items in a cascade.
 */
export function useReveal() {
  const reveal = (index = 0): MotionVariants<string> => ({
    initial: { opacity: 0, y: 32 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: { duration: 550, ease: 'easeOut', delay: index * 110 },
    },
  })

  return { reveal }
}
