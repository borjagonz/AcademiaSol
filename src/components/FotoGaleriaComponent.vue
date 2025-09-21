<template>
  <section class="galeria-fotos">
    <div class="header-galeria">
      <h1 class="title-galeria">Nuestras Instalaciones</h1>
      <div class="direccion-container">
        <span class="direccion">Nos encontramos en</span> 
        <a class="direccion-maps" 
           href="https://www.google.com/maps/place/Acad%C3%A8mia+SOL,+Campus+Nord/@41.3865385,2.1136412,17z/data=!3m1!4b1!4m6!3m5!1s0x12a498572850f531:0xc5c483aabc52e0fc!8m2!3d41.3865385!4d2.1136412!16s%2Fg%2F1ptx10xpw?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D"
           target="_blank">
           c/Trias i Giró, 15-19
        </a>
      </div>
    </div>
    <div 
      class="slider" 
      @mouseenter="pauseAutoplay" 
      @mouseleave="resumeAutoplay"
    >
      <div class="slider-inner">
        <div 
          class="slider-track"
          :style="{ transform: `translateX(-${offset}px)` }"
          ref="trackRef"
        >
          <div
            v-for="(image, index) in loopImages"
            :key="index"  
            class="slide"
          >
            <img :src="image" alt="slider image" />
          </div>
        </div>
      </div>
      <!-- Contenedor botones
      <div class="slider-nav">
        <button class="nav prev" @click="prevImage" aria-label="Anterior">‹</button>
        <button class="nav next" @click="nextImage" aria-label="Siguiente">›</button>
      </div> -->
    </div>
    <div class="linea-container">
      <hr class="linea-blanca">
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

import img1 from "../assets/foto_3-600x600.jpg"
import img2 from "../assets/foto_2-600x600.jpg"
import img3 from "../assets/foto_4-600x600.jpg"
import img4 from "../assets/foto_5-600x600.jpg"
import img5 from "../assets/foto_6-600x600.jpg"

const images = [img1, img2, img3, img4, img5]

const loopImages = [...images, ...images]

const trackRef = ref(null)
const slideWidth = 580 
const offset = ref(0)

let animationFrame = null

const moveSlider = () => {
  offset.value += 1 
  const totalWidth = slideWidth * images.length
  if (offset.value >= totalWidth) {
    offset.value = 0 
  }
  animationFrame = requestAnimationFrame(moveSlider)
}

const nextImage = () => {
  offset.value += slideWidth
  if (offset.value >= slideWidth * images.length) offset.value = 0
}

const prevImage = () => {
  offset.value -= slideWidth
  if (offset.value < 0) offset.value = slideWidth * (images.length - 1)
}

const pauseAutoplay = () => cancelAnimationFrame(animationFrame)
const resumeAutoplay = () => moveSlider()

onMounted(() => moveSlider())
onBeforeUnmount(() => cancelAnimationFrame(animationFrame))
</script>

<style scoped>
.galeria-fotos {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.header-galeria {
  justify-items: center;
  margin: 0 auto;
  text-align: center;
}

.title-galeria {
  color: white;
  font-size: 60px;
  padding: 120px 20px 0px 20px;
  font-weight: 500;
  margin: 0 auto;
}

.direccion {
  color: #facd00;
  font-size: 20px;
  font-weight: 200;
}

.direccion-maps {
  color: #facd00;
  text-underline-offset: 4px;
  font-size: 20px;
  font-weight: 200;
  text-decoration-thickness: 1px;
}

.direccion-maps:hover {
  font-weight: 400;
  text-decoration-thickness: 2px;
}

.direccion-container {
  padding-top: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.slider {
  margin-top: 70px;
  width: 100%;
  height: 580px;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.slider-inner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.slider-track {
  display: flex;
  align-items: center;
  transition: transform 0.2s linear; 
  height: 100%;
}

.slide {
  flex: 0 0 auto;
  width: 580px;
  height: 580px;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  box-shadow: 0 0px 30px rgba(0,0,0,0.2);
}

.slider-nav {
  width: 100%;
  max-width: 1500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 2;
}

.nav {
  background: #facd00;
  border: none;
  color: #1b25ab;
  width: 48px;
  height: 48px;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 6px 18px rgba(0,0,0,0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding-bottom: 6px;
}

.nav:hover { scale: 110%; transition: 0.3s; }

.linea-blanca {
  border: none; 
  height: 1px; 
  background-color: #facd00; 
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 720px) {
  .slider { height: 300px; }
  .slide img { height: 300px; }
  .slider-nav { margin-top: -150px; }
}
</style>
