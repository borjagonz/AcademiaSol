<script setup>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';

import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
    <section id="sobre-nosotros" class="sobre-nosotros-section">
        <header-component />
            <div>
                <h1>Contacto</h1>
            </div>
        <FooterComponent/>
    </section>
</template>

<style scoped>
</style>