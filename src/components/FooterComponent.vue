<script setup>
</script>

<template>
    <section class="">
        <div class="container footer">
            <a href="/"><img class="logo-academiasol" src="../logo/logo-academiasol.svg" alt="Logo Academia Sol"></a>
            <p class="copyright">© 2020 ACADEMIA SOL NORD</p>
            <a class="footer-link" href="#">Aviso Legal y Política de Privacidad</a>
            <a class="footer-link" href="#">Uso de Cookies</a>
        </div>
    </section>
</template>

<style scoped>

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

.logo-academiasol {
    width: 250px;
}

.copyright {
    color: white;
}

.footer-link {
    text-decoration: none;
    color: white;
}

.footer-link:hover {
    color: #facd00;
    transition: 0.3s;
}

</style>