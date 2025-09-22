<template>
  <header class="container header">
    <a href="/" class="escudo-academiasol"><img src="/src/logo/escudo-academiasol.svg" alt="Logo" style="height:130px" /></a>
    <nav class="nav-links">
      <router-link class="nav-link1" to="/sobre-nosotros">SOBRE NOSOTROS</router-link>
      <router-link class="nav-link1" to="/cursos-universitarios">CURSOS UNIVERSITARIOS</router-link>
      <router-link class="nav-link1" to="/cursos-ingles">CURSOS DE INGLÉS</router-link>
      <router-link class="nav-link1" to="/contacto">CONTACTO</router-link>
      <a class="cta-btn" href="/#horarios">HORARIOS</a>
      <a class="cta-btn" href="/#formulario">SOLICITAR PLAZA</a>
    </nav>
  </header>
  
</template>

<script>
export default { name: 'HeaderMain' }
</script>

<style scoped>
</style>
