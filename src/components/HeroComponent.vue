<template>
  <section class="hero">
    <!-- HEADER FIJO -->
    <header class="header-fixed"><HeaderComponent /></header>

    <!-- CURSORES -->
    <div class="container cursores-hero">
      <a class="cursor-izq" @click="prevSlide">‹</a>
      <a class="cursor-der" @click="nextSlide">›</a>
    </div>

    <!-- CARRUSEL -->
    <div class="slider-container" ref="sliderRef">
      <div
        class="slides"
        :class="{ 'no-transition': disableTransition }"
        :style="{ transform: `translateX(-${currentSlide * 100}vw)` }"
        @transitionend="handleTransitionEnd"
      >
        <!-- Clon del último slide al principio -->
        <div class="slide slide-2">
          <div class="container hero-inner">
            <div style="max-width: 920px">
              <h1 class="hero-title">Ven a nuestros cursos de inglés First, Advanced o Proficiency</h1>
              <h2 class="hero-sub">Alcanza tus metas internacionales con nosotros</h2>
              <div
                class="hero-buttons"
                @mouseenter="pauseAutoSlide"
                @mouseleave="resumeAutoSlide"
              >
                <a class="btn-hero" href="#horarios-cursos-univeristarios">HORARIOS CURSOS</a>
                <a class="btn-hero" href="#">SOLICITAR PLAZA</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 0 real -->
        <div class="slide slide-1">
          <div
            class="hero-buttons slide-2-buttons"
            @mouseenter="pauseAutoSlide"
            @mouseleave="resumeAutoSlide"
          >
            <a class="btn-hero" href="#horarios">HORARIOS CURSOS</a>
            <a class="btn-hero" href="#formulario">SOLICITAR PLAZA</a>
          </div>
        </div>

        <!-- Slide 1 real -->
        <div class="slide slide-2">
          <div class="container hero-inner">
            <div style="max-width: 920px">
              <h1 class="hero-title">Ven a nuestros cursos de inglés First, Advanced o Proficiency</h1>
              <h2 class="hero-sub">Alcanza tus metas internacionales con nosotros</h2>
              <div
                class="hero-buttons"
                @mouseenter="pauseAutoSlide"
                @mouseleave="resumeAutoSlide"
              >
                <a class="btn-hero" href="#horarios-cursos-univeristarios">HORARIOS CURSOS</a>
                <a class="btn-hero" href="#">SOLICITAR PLAZA</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Clon del primer slide al final -->
        <div class="slide slide-1">
          <div
            class="hero-buttons slide-2-buttons"
            @mouseenter="pauseAutoSlide"
            @mouseleave="resumeAutoSlide"
          >
            <a class="btn-hero" href="#horarios">HORARIOS CURSOS</a>
            <a class="btn-hero" href="#formulario">SOLICITAR PLAZA</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';

const totalSlides = 2; // slides reales

const currentSlide = ref(1); // empezamos en 1 (slide real 0)
const disableTransition = ref(false);

let autoSlideInterval = null;

function nextSlide() {
  stopAutoSlide();
  currentSlide.value += 1;
  startAutoSlide();
}

function prevSlide() {
  stopAutoSlide();
  currentSlide.value -= 1;
  startAutoSlide();
}

function handleTransitionEnd() {
  if (currentSlide.value === totalSlides + 1) {
    disableTransition.value = true;
    currentSlide.value = 1;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        disableTransition.value = false;
      });
    });
  }

  if (currentSlide.value === 0) {
    disableTransition.value = true;
    currentSlide.value = totalSlides;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        disableTransition.value = false;
      });
    });
  }
}

function startAutoSlide() {
  stopAutoSlide(); // evitamos múltiples intervalos
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 6000);
}

function stopAutoSlide() {
  if (!autoSlideInterval) return;
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;
}

function pauseAutoSlide() {
  stopAutoSlide();
}

function resumeAutoSlide() {
  startAutoSlide();
}

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});

// ✅ Corrección clave: impedir que el slider se salga del rango permitido
watch(currentSlide, (newVal) => {
  if (newVal > totalSlides + 1) {
    currentSlide.value = totalSlides + 1;
  } else if (newVal < 0) {
    currentSlide.value = 0;
  }
});
</script>


<style scoped>
/* HEADER */
.header-fixed {
  z-index: 100;
  background-color: transparent;
  position: sticky;
  top: 0;
  width: 100%;
}

/* Contenedor principal */
.hero {
  height: 100vh;
  overflow: hidden;
}

/* Flechas */
.cursores-hero {
  position: absolute;
  top: 380px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 10;
}

.cursor-izq,
.cursor-der {
  color: white;
  font-size: 150px;
  cursor: pointer;
  user-select: none;
  filter: drop-shadow(0 0px 15px rgba(27, 37, 171, 1));
}

.cursor-izq:hover,
.cursor-der:hover {
  color: #facd00;
  transform: scale(1.2);
  transition: 0.5s;
}

/* Slider */
.slider-container {
  margin-top: -140px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.slides {
  display: flex;
  width: 400vw; /* 2 reales + 2 clones */
  height: 100%;
  transition: transform 0.8s ease-in-out;
}

.slides.no-transition {
  transition: none !important;
}

.slide {
  width: 100vw;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Slide 1 */
.slide-2 {
  background: url('../assets/academiasol-hero-background1ok.jpg');
  background-size: cover;
  background-position: center;
}

/* Slide 0 */
.slide-1 {
  background: url('../assets/academiasol-hero-background2bok.jpg');
  background-size: cover;
  background-position: center;
}

/* Texto */
.hero-inner {
  padding: 50px 450px 0px 100px;
}

.hero-title {
  color: white;
  font-size: 64px;
  font-weight: 600;
}

.hero-sub {
  color: white;
  font-weight: 300;
  font-size: 36px;
  margin: 50px 0;
  max-width: 650px;
}

/* Botones */
.hero-buttons {
  display: flex;
  gap: 30px;
}

.btn-hero {
  text-decoration: none;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  background-color: transparent;
  color: #facd00;
  border: 2px solid #facd00;
  border-radius: 30px;
  padding: 10px 18px;
  transition: 0.3s;
}

.btn-hero:hover {
  cursor: pointer;
  color: white;
}

/* Botones slide 1 */
.slide-2-buttons {
  position: relative;
  top: 200px;
  justify-content: center;
}
</style>
