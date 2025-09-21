<script setup>
import ScrollToTopButton from "@/components/ScrollToTopButton.vue"
import WhatsappButton from './components/WhatsappButton.vue'
</script>

<template>
  <div id="app">
    <main>
      <router-view />
    </main>
    <ScrollToTopButton />
    <WhatsappButton />
  </div>
</template>
