<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top"
      aria-label="Volver arriba"
    >
      <img :src="icon" alt="Volver arriba" class="icon" />
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import icon from "@/icons/ScrollToTopButton.svg";

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 100px;
  right: 35px;
  background: transparent; 
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 1000;
}

.scroll-to-top:hover {
  scale: 110%;
  transition: 0.3s;
}

.icon {
  display: block;
  width: 50px;  
  height: 50px;
  filter: drop-shadow(0 0px 8px rgba(27, 37, 171, 0.25));
  transition: transform 0.3s ease, filter 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
