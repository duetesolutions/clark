<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <section
    class="relative flex min-h-[80vh] w-full items-center overflow-hidden pt-24"
    :style="{ backgroundColor: 'var(--color-bg)' }"
    aria-labelledby="hero-headline"
  >
    <!-- Background decoration: subtle radial gradient -->
    <div
      class="pointer-events-none absolute inset-0"
      style="
        background: radial-gradient(
          ellipse 70% 60% at 70% 40%,
          color-mix(in srgb, #46ce7a 10%, transparent) 0%,
          transparent 70%
        );
      "
      aria-hidden="true"
    />

    <!-- Floating decoration dots (top-right area) -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <!-- Large soft circle -->
      <div
        class="absolute rounded-full opacity-20"
        style="
          width: 480px;
          height: 480px;
          top: -80px;
          right: -120px;
          background: radial-gradient(circle, #46ce7a 0%, transparent 70%);
        "
      />
      <!-- Small accent dot 1 -->
      <div
        class="absolute rounded-full opacity-40"
        style="
          width: 12px;
          height: 12px;
          top: 18%;
          right: 28%;
          background-color: #46ce7a;
        "
      />
      <!-- Small accent dot 2 -->
      <div
        class="absolute rounded-full opacity-25"
        style="
          width: 8px;
          height: 8px;
          top: 62%;
          right: 15%;
          background-color: #46ce7a;
        "
      />
      <!-- Small accent dot 3 -->
      <div
        class="absolute rounded-full opacity-30"
        style="
          width: 6px;
          height: 6px;
          top: 35%;
          right: 45%;
          background-color: #3ab86b;
        "
      />
    </div>

    <!-- Main content grid -->
    <div class="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
      <!-- Left column: text content -->
      <div class="flex flex-col justify-center gap-6">
        <!-- Badge / pill -->
        <div class="flex">
          <span
            class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
            :style="{
              backgroundColor: 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
              color: 'var(--color-primary)',
              border: '1px solid color-mix(in srgb, var(--color-primary) 30%, transparent)',
            }"
          >
            <!-- Sparkle icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            Presença digital que converte
          </span>
        </div>

        <!-- H1 headline -->
        <h1
          id="hero-headline"
          class="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          :style="{ color: 'var(--color-text)', letterSpacing: '-0.03em' }"
        >
          Seu negócio merece uma presença digital
          <span :style="{ color: 'var(--color-primary)' }">de verdade</span>
        </h1>

        <!-- Subtitle -->
        <p
          class="max-w-lg text-lg leading-relaxed sm:text-xl"
          :style="{ color: 'var(--color-text-muted)' }"
        >
          Criamos sites e sistemas que geram resultados reais para pequenas e médias empresas
          brasileiras.
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-wrap gap-3">
          <Button variant="primary" size="lg">
            Começar agora
          </Button>
          <Button variant="secondary" size="lg">
            Ver planos
          </Button>
        </div>

        <!-- Social proof -->
        <div
          class="flex flex-wrap items-center gap-6 pt-2"
          :style="{ color: 'var(--color-text-muted)' }"
        >
          <!-- Metric 1 -->
          <div class="flex items-center gap-2">
            <span
              class="text-2xl font-bold"
              :style="{ color: 'var(--color-text)' }"
            >500+</span>
            <span class="text-sm leading-tight">
              projetos<br />entregues
            </span>
          </div>
          <!-- Divider -->
          <div
            class="hidden h-8 w-px sm:block"
            :style="{ backgroundColor: 'var(--color-border)' }"
            aria-hidden="true"
          />
          <!-- Metric 2 -->
          <div class="flex items-center gap-2">
            <span
              class="text-2xl font-bold"
              :style="{ color: 'var(--color-text)' }"
            >200+</span>
            <span class="text-sm leading-tight">
              empresas<br />atendidas
            </span>
          </div>
          <!-- Divider -->
          <div
            class="hidden h-8 w-px sm:block"
            :style="{ backgroundColor: 'var(--color-border)' }"
            aria-hidden="true"
          />
          <!-- Metric 3 -->
          <div class="flex items-center gap-2">
            <span
              class="text-2xl font-bold"
              :style="{ color: 'var(--color-text)' }"
            >98%</span>
            <span class="text-sm leading-tight">
              satisfação<br />dos clientes
            </span>
          </div>
        </div>
      </div>

      <!-- Right column: decorative visual -->
      <div
        class="relative mt-12 hidden items-center justify-center lg:mt-0 lg:flex"
        aria-hidden="true"
      >
        <!-- Outer glow ring -->
        <div
          class="absolute rounded-full opacity-30"
          style="
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, #46ce7a 0%, transparent 65%);
            animation: pulse-slow 4s ease-in-out infinite;
          "
        />

        <!-- Mock browser window card -->
        <div
          class="relative z-10 w-full max-w-sm overflow-hidden shadow-2xl"
          :style="{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
          }"
        >
          <!-- Browser chrome bar -->
          <div
            class="flex items-center gap-2 px-4 py-3"
            :style="{
              backgroundColor: 'var(--color-bg-muted)',
              borderBottom: '1px solid var(--color-border)',
            }"
          >
            <!-- Traffic lights -->
            <div class="flex items-center gap-1.5">
              <div class="h-3 w-3 rounded-full" style="background-color: #ff5f57" />
              <div class="h-3 w-3 rounded-full" style="background-color: #febc2e" />
              <div class="h-3 w-3 rounded-full" style="background-color: #28c840" />
            </div>
            <!-- Fake URL bar -->
            <div
              class="flex flex-1 items-center rounded-md px-3 py-1 text-xs"
              :style="{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)',
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-1.5"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              seusite.com.br
            </div>
          </div>

          <!-- Fake website content -->
          <div class="p-5 space-y-4">
            <!-- Hero area mockup -->
            <div
              class="rounded-md p-4 text-center"
              :style="{
                backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, transparent)',
                border: '1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)',
              }"
            >
              <!-- Fake logo bar -->
              <div
                class="mx-auto mb-3 h-4 w-24 rounded-full"
                :style="{ backgroundColor: 'var(--color-primary)', opacity: '0.7' }"
              />
              <!-- Fake headline lines -->
              <div
                class="mx-auto mb-2 h-3 w-48 rounded-full"
                :style="{ backgroundColor: 'var(--color-text)', opacity: '0.5' }"
              />
              <div
                class="mx-auto mb-4 h-3 w-36 rounded-full"
                :style="{ backgroundColor: 'var(--color-text)', opacity: '0.3' }"
              />
              <!-- Fake CTA button -->
              <div
                class="mx-auto h-8 w-32 rounded-md"
                :style="{ backgroundColor: 'var(--color-primary)', opacity: '0.9' }"
              />
            </div>

            <!-- Fake content cards row -->
            <div class="grid grid-cols-3 gap-2">
              <div
                v-for="i in 3"
                :key="i"
                class="rounded-md p-3 space-y-2"
                :style="{
                  backgroundColor: 'var(--color-bg-muted)',
                  border: '1px solid var(--color-border)',
                }"
              >
                <div
                  class="h-6 w-6 rounded-md"
                  :style="{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }"
                />
                <div
                  class="h-2 w-full rounded-full"
                  :style="{ backgroundColor: 'var(--color-text)', opacity: '0.3' }"
                />
                <div
                  class="h-2 w-3/4 rounded-full"
                  :style="{ backgroundColor: 'var(--color-text)', opacity: '0.2' }"
                />
              </div>
            </div>

            <!-- Fake stats bar -->
            <div
              class="flex items-center justify-between rounded-md px-4 py-3"
              :style="{
                backgroundColor: 'var(--color-bg-muted)',
                border: '1px solid var(--color-border)',
              }"
            >
              <div class="flex items-center gap-2">
                <div
                  class="h-2 w-2 rounded-full"
                  :style="{ backgroundColor: 'var(--color-primary)' }"
                />
                <div
                  class="h-2 w-16 rounded-full"
                  :style="{ backgroundColor: 'var(--color-text)', opacity: '0.3' }"
                />
              </div>
              <div
                class="h-3 w-12 rounded-full font-bold"
                :style="{ backgroundColor: 'var(--color-primary)', opacity: '0.7' }"
              />
            </div>
          </div>
        </div>

        <!-- Floating badge: performance score -->
        <div
          class="absolute -right-4 top-12 z-20 flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg"
          :style="{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }"
        >
          <div
            class="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
            :style="{
              backgroundColor: 'color-mix(in srgb, var(--color-primary) 15%, transparent)',
              color: 'var(--color-primary)',
            }"
          >
            98
          </div>
          <div class="text-xs">
            <div class="font-semibold" :style="{ color: 'var(--color-text)' }">Performance</div>
            <div :style="{ color: 'var(--color-primary)' }">Excelente</div>
          </div>
        </div>

        <!-- Floating badge: mobile ready -->
        <div
          class="absolute -left-4 bottom-16 z-20 flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg"
          :style="{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }"
        >
          <div
            class="flex h-8 w-8 items-center justify-center rounded-lg"
            :style="{
              backgroundColor: 'color-mix(in srgb, var(--color-primary) 15%, transparent)',
              color: 'var(--color-primary)',
            }"
          >
            <!-- Mobile phone icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </div>
          <div class="text-xs">
            <div class="font-semibold" :style="{ color: 'var(--color-text)' }">Mobile-first</div>
            <div :style="{ color: 'var(--color-text-muted)' }">100% responsivo</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.18;
  }
}
</style>
