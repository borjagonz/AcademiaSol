<script setup>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';

import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
    <section id="sobre-nosotros" class="sobre-nosotros-section">
        <header-component />
            <div class="linea-container">
                <hr class="linea-blanca">
            </div>
            <div class="nosotros-header">
                <span class="nosotros-avantitle">Desde</span><span class="nosotros-avantitle-bold">1975</span><span class="nosotros-avantitle">formando universitarios</span>
                <h1 class="nosotros-title">Academia Sol</h1>
                <h2 class="nosotros-bienvenida">NUESTRA HISTORIA</h2>
                <div class="body-container1">
                        <p class="nosotros-body1">Fundada en 1975, Academia Sol Nord se ha consolidado como la mayor academia universitaria de Barcelona. Somos un centro de enseñanza privado, independiente de las universidades, que ofrece clases de apoyo para las asignaturas de los diferentes grados impartidos en las universidades de Barcelona, como la UB, UPC, URL, entre otras. <br><br>

Nuestro objetivo es adaptarnos a las necesidades de cada estudiante. Por eso, ofrecemos una variedad de cursos —extensivos e intensivos— para preparar los exámenes de evaluación continua, las prácticas y los exámenes finales. <br><br>Las clases se imparten en grupos reducidos y tienen un enfoque muy práctico. Si bien explicamos la teoría de cada materia, nos centramos especialmente en realizar ejercicios y resolver exámenes de convocatorias anteriores, lo que permite a nuestros alumnos familiarizarse con el formato y la dificultad de los exámenes reales.</p>
                        <p class="nosotros-body1">Nuestro equipo de profesores está altamente cualificado y especializado en las asignaturas que imparte. Gracias a su experiencia y conocimiento profundo de cada materia, logramos año tras año un alto porcentaje de aprobados, lo que respalda la calidad educativa de nuestra academia. <br><br>

A lo largo de estos años formando a miles de alumnos, hemos aprendido y perfeccionado nuestras metodologías, para ofrecer clases profesionales, útiles y de alta calidad. Todo esto con el único objetivo de lograr lo que nos hemos propuesto desde nuestros inicios: la excelencia educativa. <br><br> <span class="objetivo">Nuestro objetivo, tu aprobado.</span></p>
      
                </div>
                <div class="estadisticas">
                    <div class="estadistica"><h2 class="estad-numero">+50</h2><h2 class="estad-texto">Años de experiencia</h2></div>
                    <div class="estadistica"><h2 class="estad-numero">+95%</h2><h2 class="estad-texto">De aprobados</h2></div>
                    <div class="estadistica"><h2 class="estad-numero">+25.000</h2><h2 class="estad-texto">Alumnos</h2></div>
                </div>
                <div class="estadisticas">
                </div>
                <div class="body-container">
                </div>
            </div>
            <div>
                <img class="nosotros-fondo" src="../logo/escudo-academiasol.svg" alt="">
            </div>        

            <div class="tipos-curso">
                <h2 class="titulo-cursos">TODOS NUESTROS CURSOS</h2>
                <div class="cursos-container">
                    <ul>
                        <li class="curso">ADE</li>
                        <li class="curso">ECONOMIA</li>
                        <li class="curso">ESTADÍSTICA</li>
                        <li class="curso">MICRO</li>
                        <li class="curso">FINANZAS</li>
                    </ul>
                    <ul>
                        <li class="curso">INFORMÁTICA</li>
                        <li class="curso">ECONOMETRIA</li>
                        <li class="curso">IDIOMAS</li>
                        <li class="curso">QUÍMICA</li>
                        <li class="curso">FÍSICA</li>
                    </ul>
                    <ul>
                        <li class="curso">MECÁNICA</li>
                        <li class="curso">INGENIERÍAS</li>
                        <li class="curso">MATEMÁTICAS</li>
                        <li class="curso">CONTABILIDAD</li>
                        <li class="curso">ÁLGEBRA</li>
                    </ul>
                    <ul>
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
        <FooterComponent/>
    </section>
</template>

<style scoped>

.nosotros-fondo {
    position: absolute;
    left: 0;
    top: 0px;
    width: 100%;
    height: auto;
    opacity: 0.06;
    z-index: -1;
    margin: 0 auto;
    padding-bottom: -500px;
}

.nosotros-header {
    margin: 0 auto;
    max-width: 1500px;
    padding: 120px 20px 0px 20px;
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
    font-size: 64px;
    color: white;
    margin: 20px 0px 20px 0px;
    font-weight: 600;
}

.body-container1 {
    display: flex;
    max-width: 1500px;
    margin: 0 auto;
    padding: 60px 20px 40px 20px;
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
    margin: 0 auto;
    justify-content: center;
    max-width: 1500px;
    padding: 0;
}

.estadistica {
    margin: 20px 20px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 22px;
    width: 23.5%;
}

.estad-numero{
    color: #facd00;
    font-size: 60px;
    padding: 0px 20px 0px 20px;
    margin: 0;
    font-weight: 400;
}

.estad-texto {
    color: white;
    font-size: 22px;
    padding: 0px 20px 40px 20px;
    margin: 0;
    font-weight: 600;
}

.estadistica:hover {
    scale: 105%;
    transition: 0.3s;
}

.objetivo {
    text-align: center;
    color: #facd00;
    font-size: 20px;
    font-weight: 400;
    margin:0;
    font-weight: 700;
}

.titulo-cursos {
    color: #facd00;
    margin: 0 auto;
    text-align: center;
    padding: 60px 20px 60px 0px;
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
    gap: 80px;
    padding-bottom: 100px;
}

.curso {
    color: white;
    padding: 4px;
}



</style>