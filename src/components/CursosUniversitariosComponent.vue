<script setup>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';

import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
    <section id="cursos-universitarios" class="cursos-universitarios-section">
        <div class="tipos-cursos-container">
            <HeaderComponent />
            <div class="titulo-cursos-universitarios">
                <h1 class="titulo-section">Nuestros cursos universitarios</h1>
                <p class="destacado-body">Te ofrecemos 2 semanas de prueba gratis para probar nuestros cursos, apúntate y sin ningún compromiso ven a conocer a nuestros profesores.</p>
            </div>
            <div class="container cursos">
                <h2 class="titulo-cursos">TIPOS DE CURSOS</h2>
                <div class="tipos-cursos">
                    <div class="tipo-curso">
                        <h3 class="titulo-tipo-curso">Extensivos</h3>
                        <h4 class="claim-titulo">LA OPCIÓN MÁS INTELIGENTE</h4>
                        <p class="body-titulo">Es el curso más completo y por lo tanto el más recomendado, abarca todo el cuatrimestre, de 12 a 15 semanas lectivas. Se imparte con detalle la materia desde cero, se explica la teoría, se realiza un gran número de ejercicios, se resuelven exámenes de convocatorias anteriores y se ayudará al alumno en toda la evaluación continua añadiendo clases extras de repaso y dudas.</p>
                    </div>
                    <div class="tipo-curso">
                        <h3 class="titulo-tipo-curso">Intensivos Parciales</h3>
                        <h4 class="claim-titulo">OPTIMIZA TU TIEMPO</h4>
                        <p class="body-titulo">Son cursos intensivos de pocas horas que se imparten los días previos a los exámenes parciales. Se basan en la realización de exámenes de convocatorias anteriores acompañado de un breve repaso de teoría.</p>
                    </div>       
                    <div class="tipo-curso">
                        <h3 class="titulo-tipo-curso">Intensivos Finales</h3>
                        <h4 class="claim-titulo">AUMENTA TUS POSIBILIDADES</h4>
                        <p class="body-titulo">Son cursos intensivos de aproximadamente 15‐21 horas de clase que se imparten los días previos a los exámenes finales. Son clases centradas en aprobar, te enseñarán como enfocar la materia y cómo solucionar los diferentes problemas que te planteen de una forma más intensiva.
                        Se basan en la realización de exámenes de convocatorias anteriores acompañado de un breve repaso de teoría.</p>
                    </div> 
                    <div class="tipo-curso">
                    <h3 class="titulo-tipo-curso">Intensivos de Recuperación</h3>
                        <h4 class="claim-titulo">APRUEBA CON NOSOTROS</h4>
                        <p class="body-titulo">Son cursos intensivos para preparar las convocatorias de reevaluación y se imparten los días previos a cada examen. Son clases centradas en aprobar, te enseñarán como enfocar la materia y cómo solucionar los diferentes problemas que te planteen de una forma más intensiva.
                        Se basan en la realización de exámenes de convocatorias anteriores acompañado de un breve repaso de teoría.</p>
                    </div>     
                </div>
            </div>
        </div>
        <div class="cursos-universitarios-listado">
            <h1 class="titulo-section2">Descárgate los horarios de nuestros cursos</h1>
            <h2 class="titulo-cursos">FACULTAD DE ECONOMÍA Y EMPRESA (UB)</h2>
            <div class="grados">
                <div class="grado-container">
                    <img class="img-grado" src="../assets/asol-gradoeconomia-blue.jpg" alt="">
                    <h2 class="titulo-grado">Grado en ADE y Economía</h2>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO EXTENSIVO</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO PARCIAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO FINAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO DE RECUPERACIÓN</a>
                </div>
                <div class="grado-container">
                    <img class="img-grado" src="../assets/asol-gradoempresainternacional-blue.jpg" alt="">
                    <h2 class="titulo-grado">Grado en Empresa Internacional</h2>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO EXTENSIVO</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO PARCIAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO FINAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO DE RECUPERACIÓN</a>
                </div>
                <div class="grado-container">
                    <img class="img-grado" src="../assets/asol-gradosociologia-blue.jpg" alt="">
                    <h2 class="titulo-grado">Grado en Sociología</h2>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO EXTENSIVO</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO PARCIAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO FINAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO DE RECUPERACIÓN</a>
                </div>
                <div class="grado-container">
                    <img class="img-grado" src="../assets/asol-gradoestadistica-blue.jpg" alt="">
                    <h2 class="titulo-grado">Grado en Estadística</h2>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO EXTENSIVO</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO PARCIAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO FINAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button">DESCARGAR HORARIOS CURSO INTENSIVO DE RECUPERACIÓN</a>
                </div>
            </div>
            <h2 class="titulo-cursos">ESCUELA DE INGENIEROS DE CAMINOS, CANALES Y PUERTOS (ETSECCP-UPC)</h2>
            <div class="grados2">
                <div class="grado-container2">
                    <img class="img-grado" src="../assets/asol-gradoingenieriacivil-bue.jpg" alt="">
                    <h2 class="titulo-grado">Grado en Ingeniería Civil</h2>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO EXTENSIVO</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO PARCIAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO FINAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO DE RECUPERACIÓN</a>
                </div>
                <div class="grado-container2">
                    <img class="img-grado" src="../assets/asol-gradotecnologiacaminos-blue.jpg" alt="">
                    <h2 class="titulo-grado">Grado en Tecnologías de Caminos, Canales y Puertos</h2>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO EXTENSIVO</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO PARCIAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO FINAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO DE RECUPERACIÓN</a>
                </div>
            </div>
            <h2 class="titulo-cursos">FACULTAD DE INFORMÁTICA (FIB-UPC)</h2>
            <div class="grados2">
                <div class="grado-container2">
                    <img class="img-grado" src="../assets/asol-gradoingenieriainformatica-blue.jpg" alt="">
                    <h2 class="titulo-grado">Grado en Ingeniería Informática</h2>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO EXTENSIVO</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO PARCIAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO FINAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO DE RECUPERACIÓN</a>
                </div>
                <div class="grado-container2">
                    <img class="img-grado" src="../assets/asol-gradoingenieriadatos-blue.jpg" alt="">
                    <h2 class="titulo-grado">Grado en Ciencia e Ingeniería de Datos</h2>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO EXTENSIVO</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO PARCIAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO FINAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO DE RECUPERACIÓN</a>
                </div>
            </div>        
                        <h2 class="titulo-cursos">ESCUELA TÉCNICA SUPERIOR DE INGENIERÍA DE TELECOMUNICACIÓN (ETSETB-UPC)</h2>
            <div class="grados2">
                <div class="grado-container2">
                    <img class="img-grado" src="../assets/asol-gradoingenieriatelecos-blue.jpg" alt="">
                    <h2 class="titulo-grado">Grado en Ingeniería de Telecomunicación</h2>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO EXTENSIVO</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO PARCIAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO FINAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO DE RECUPERACIÓN</a>
                </div>
                <div class="grado-container2">
                    <img class="img-grado" src="../assets/asol-gradoingenieriafisica-blue.jpg" alt="">
                    <h2 class="titulo-grado">Grado en Ciencia e Ingeniería Física</h2>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO EXTENSIVO</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO PARCIAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO FINAL</a>
                    <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="cursos-univ-button2">DESCARGAR HORARIOS CURSO INTENSIVO DE RECUPERACIÓN</a>
                </div>
            </div>        
        </div>
    </section>
    <FooterComponent/>
</template>

<style scoped>

.tipos-cursos-container {    
    background-image: url(../assets/academiasol-cursosuniversitarios-background3.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0;
    margin: 0;}

.cursos { 
}

.tipos-curso-fondo {
    position: absolute;
    top: 0px;
    opacity: 1;
    z-index: -1;
    margin: 0 auto;
    height: 150%;
}

.cursos-universitarios-section { 
}

.cursos-universitarios {
    max-width: 1500px;
}

.titulo-cursos-universitarios {
    padding-bottom: 100px;
}

.cursos-universitarios-listado {
    background-color: #ecf0f1;
}

.titulo-section {
    font-size: 64px;
    text-align: center;
    color: #1b25ab;
    font-weight: 600;
    padding-top: 120px;
    padding-bottom: 60px;
    margin: 0 auto;
}

.titulo-section2 {
    font-size: 64px;
    text-align: center;
    color: #1b25ab;
    font-weight: 600;
    padding-top: 120px;
    padding-bottom: 60px;
    margin: 0 auto;
    max-width: 900px;
}

.titulo-cursos {
    color: #1b25ab;
    margin: 0 auto;
    text-align: center;
    padding: 0px 20px 60px 0px;
    font-weight: 500; 
    letter-spacing: 5px;
    max-width: 900px;
}

.tipos-cursos {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px 0px 120px 0px;
    gap: 25px;
}

.tipo-curso {
    width: 49%;
    color: #1b25ab;
    text-align: center;
    background-color: transparent;
    padding: 30px;
    border-radius: 30px;
    box-shadow:5px 5px 10px rgba(0, 0, 0, 0.12),-5px -5px 10px rgba(255, 255, 255, 0.5);
}

.tipo-curso:hover {
    scale: 105%;
    transition: 0.3s;
    background-color: white;
}

.destacado-body {
    font-weight: 600;
    color: #1b25ab;
    text-align: center;
    max-width: 950px;
    margin: 0 auto;
    font-size: 22px;
}

.titulo-tipo-curso {
    font-size: 32px;
    margin: 0;
    padding: 20px 20px 30px 20px;
    font-weight: 600;
}

.claim-titulo {
    background-color: #facd00;
    padding: 10px;
    margin: 0 auto;
    border-radius: 30px;
    max-width: 50%;
    font-weight: 600;
}

.body-titulo {
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
}

.linea-blanca {
    border: 1px solid #1b25ab;
}

.img-grado{
    border-radius: 20px;
    margin-bottom: 25px;
    max-height: 200px;
    opacity: 0.9;
    max-width: 100%;
    height: auto;
}

.grados {
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
    max-width: 1500px;
    padding: 0px 20px 100px 20px;
    gap: 30px;
}

.grados2 {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 30px;
    max-width: 1500px;
    padding: 0px 20px 100px 20px;
}

.grado-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 23.5%;
    text-align: center;
    border-radius: 30px;
    box-shadow:5px 5px 10px rgba(0, 0, 0, 0.12),-5px -5px 10px rgba(255, 255, 255, 0.5);
    padding: 30px;    
}

.grado-container2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 29%;
    text-align: center;
    border-radius: 30px;
    box-shadow:5px 5px 10px rgba(0, 0, 0, 0.12),-5px -5px 10px rgba(255, 255, 255, 0.5);
    padding: 30px;
}

.grado-container:hover{
    scale: 105%;
    transition: 0.3s;
    background-color: #facd00;
}

.grado-container2:hover{
    scale: 105%;
    transition: 0.3s;
    background-color: #facd00;
}

.titulo-grado{
    font-size: 22px;
    color: #1b25ab;
    font-weight: 600;
    margin: 0;
    padding: 0px 20px 15px 20px;
}

.cursos-univ-button {
    border: none;
    border-radius: 60px;
    background-color: #1b25ab;
    color: white;
    padding: 15px 30px;
    margin: 10px 0px 0px 0px;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    align-items: center;
}

.cursos-univ-button2 {
    border: none;
    border-radius: 60px;
    background-color: #1b25ab;
    color: white;
    padding: 15px 30px;
    margin: 10px 0px 0px 0px;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    max-width: 85%;
}

.cursos-univ-button:hover {
    background-color: white;
    color: #1b25ab;
    transition: 0.3s;
}

.cursos-univ-button2:hover {
    background-color: white;
    color: #1b25ab;
    transition: 0.3s;
}


</style>

#facd00