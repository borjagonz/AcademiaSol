<script setup>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';

import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
    <section id="sobre-nosotros" class="sobre-nosotros-section">
            <div class="nosotros-header">
                <div class="historia-container">
                    <header-component/>
                    <div class="avantitle"><span class="nosotros-avantitle">Desde</span><span class="nosotros-avantitle-bold">1975</span><span class="nosotros-avantitle">formando universitarios</span></div>
                    <h1 class="nosotros-title">Academia Sol</h1>
                    <h2 class="nosotros-bienvenida">NUESTRA HISTORIA</h2>
                    <div class="body-container1">
                        <p class="nosotros-body1">En 1975 se fundó ACADEMIA SOL y actualmente es la mayor academia universitaria de Barcelona, somos un centro de enseñanza privado externo a la universidad que ofrece clases de apoyo de las asignaturas de los diferentes grados que se imparten en las universidades de Barcelona: UB, UPC, URL… <br><br>
                        Ofrecemos diferentes tipos de curso adaptados a las necesidades de cada alumno, cursos extensivos e intensivos para preparar los exámenes de evaluación continua, prácticas y los exámenes finales. Las clases se imparten en grupos reducidos y son muy prácticas, se explica la teoría de cada materia, pero, principalmente se realiza un gran número de ejercicios y se resuelven exámenes de convocatorias anteriores.</p>
                        <p class="nosotros-body1">Nuestro equipo de profesores está altamente cualificado y especializado en cada una de las asignaturas que imparten, su amplia experiencia les permite conocer la materia a la perfección consiguiendo año tras año un alto porcentaje de aprobados.
                        <br><br>
                        En todos estos años de formación a miles de alumnos hemos aprendido mucho para ser capaces de ofrecer lo mejor a nuestros alumnos, clases profesionales , útiles y de calidad para alcanzar así el objetivo que, desde siempre, nos hemos marcado, la excelencia. <br><br> <span class="objetivo">Nuestro objetivo, tu aprobado.</span></p>
                    </div>            
                </div>
            </div>
            <div>
                <h2 class="nosotros-numeros">NUESTROS NÚMEROS</h2>
                <div class="estadisticas">
                    <div class="estadistica"><h2 class="estad-numero">+50</h2><h2 class="estad-texto">Años de experiencia</h2></div>
                    <div class="estadistica"><h2 class="estad-numero">+95%</h2><h2 class="estad-texto">De aprobados</h2></div>
                    <div class="estadistica"><h2 class="estad-numero">+25.000</h2><h2 class="estad-texto">Alumnos</h2></div>
                    <div class="estadistica"><h2 class="estad-numero">4,8<span class="estrella">★</span></h2><h2 class="estad-texto">En reseñas de Google</h2></div>
                </div>
            </div>     

            <div class="tipos-curso">
                <h2 class="titulo-cursos">TODOS NUESTROS CURSOS</h2>
                <div class="cursos-container">
                    <ul class="ul">
                        <li class="curso">ADE</li>
                        <li class="curso">ECONOMIA</li>
                        <li class="curso">ESTADÍSTICA</li>
                        <li class="curso">MICRO</li>
                        <li class="curso">FINANZAS</li>
                    </ul>
                    <ul class="ul">
                        <li class="curso">INFORMÁTICA</li>
                        <li class="curso">ECONOMETRIA</li>
                        <li class="curso">IDIOMAS</li>
                        <li class="curso">QUÍMICA</li>
                        <li class="curso">FÍSICA</li>
                    </ul>
                    <ul class="ul">
                        <li class="curso">MECÁNICA</li>
                        <li class="curso">INGENIERÍAS</li>
                        <li class="curso">MATEMÁTICAS</li>
                        <li class="curso">CONTABILIDAD</li>
                        <li class="curso">ÁLGEBRA</li>
                    </ul>
                    <ul class="ul">
                        <li class="curso">FISCAL</li>
                        <li class="curso">CÁLCULO</li>
                        <li class="curso">DIBUJO</li>
                        <li class="curso">MACRO</li>
                    </ul>
                </div>
            </div>
            <div class="linea-container">
                <hr class="linea-blanca">
            </div>
    </section>
            <FooterComponent/>
</template>

<style scoped>


.historia-container {
    background-image: url(../assets/academiasol-nosotros-graduado.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
}

.avantitle {
    padding-top: 120px;
}

.nosotros-header {
    margin: 0 auto;
    text-align: center;
}

.nosotros-bienvenida {
    color: #facd00;
    margin: 0 auto;
    text-align: center;
    padding: 60px 20px 0px 20px;
    font-weight: 500; 
    letter-spacing: 5px;
}

.nosotros-numeros {
    color: #facd00;
    margin: 0 auto;
    text-align: center;
    padding: 100px 20px 0px 20px;
    font-weight: 500; 
    letter-spacing: 5px;
}

.nosotros-avantitle {
    color: #facd00;
    font-size: 22px;
    margin: 0 auto;
}

.nosotros-avantitle-bold {
    padding: 7px;
    font-size: 22px;
    color: #facd00;
    font-weight: 600;
}

.nosotros-title {
    font-size: 82px;
    color: white;
    margin: 30px 0px 20px 0px;
    font-weight: 600;
}

.body-container1 {
    display: flex;
    max-width: 1500px;
    margin: 0 auto;
    padding: 60px 0px 120px 0px;
    justify-content: center;
    gap: 60px;
}

.nosotros-body1 {
    color: white;
    text-align: justify;
    margin: 0;
    font-size: 20px;
    width: 40%;
}

.estadisticas {
    display: flex;
    justify-content: space-between;
    max-width: 1500px;
    padding: 60px 20px 0px 20px;
    margin: 0 auto;
}

.estadistica {
    border-radius: 30px;
    font-weight: 600;
    font-size: 22px;
    width: 23.5%;
    box-shadow:5px 5px 10px rgba(0, 0, 0, 0.18),-5px -5px 10px rgba(255, 255, 255, 0.15);
    margin: 0;
    padding: 0;
}

.estad-numero{
    color: #facd00;
    font-size: 60px;
    padding: 20px 20px 0px 20px;
    margin: 0;
    font-weight: 600;
    text-align: center;
}

.estad-texto {
    color: white;
    font-size: 22px;
    padding: 0px 20px 40px 20px;
    margin: 0;
    font-weight: 600;
    text-align: center;
}

.estadistica:hover {
    scale: 105%;
    transition: 0.3s;
}

.objetivo {
    text-align: center;
    color: #facd00;
    font-size: 20px;
    font-weight: 600;
    margin:0;
}

.titulo-cursos {
    color: #facd00;
    margin: 0 auto;
    text-align: center;
    padding: 100px 20px 60px 0px;
    font-weight: 500; 
    letter-spacing: 5px;
}

.linea-blanca {
  border: none; 
  height: 1px; 
  background-color: #facd00; 
  margin: 0 auto;
  width: 100%;
}

.cursos-container {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    max-width: 1500px;
    gap: 120px;
    padding-bottom: 100px;
}

.curso {
    color: white;
    padding: 4px;
}

.estrella {
    font-size: 35px;
    position:relative;
    bottom: 20px;
    padding: 0;
    margin-left: 2px;
}

.ul {
    padding: 0;
    margin: 0;
}

</style>