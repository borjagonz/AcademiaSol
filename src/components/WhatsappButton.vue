<template>
  <a
    :href="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-button"
    aria-label="Contactar por WhatsApp"
  >
    <img :src="icon" alt="WhatsApp" class="icon" />
  </a>
</template>

<script setup>
import icon from "@/icons/Icono-whatsapp.svg"; 

const phoneNumber = "+34678175775";

const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 30px; 
  right: 30px;
  z-index: 1000;
  display: inline-block;
  background: transparent; 
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;
}

.whatsapp-button:hover {
  scale: 110%;
  transition: 0.3s;
}

.icon {
  display: block;
  width: 60px; 
  height: 60px;
  filter: drop-shadow(0 0px 8px rgba(27, 37, 171, 0.25));
  transition: transform 0.3s ease, filter 0.3s ease;
}


</style>
