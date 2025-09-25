<script setup>
</script>

<template>
    <section id="horarios" class="horarios-section">
        <div class="horarios-title">
            <h1 class="horarios-title-text">Descárgate los horarios de este nuevo curso</h1>
        </div>
        <div id="horarios-cursos-univeristarios">
            <h2 class="horarios-subtitle">CURSOS UNIVERSITARIOS</h2>
        </div>
        <div class="downloads-cursos">
            <div class="download-section1">
                <h3 class="titulo-curso">Ade y Economía</h3>
                <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="download-button">DESCARGAR HORARIOS <br> CURSO EXTENSIVO</a>
            </div>
            <div class="download-section1">
                <h3 class="titulo-curso">Ingeniería Civil</h3>
                <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="download-button">DESCARGAR HORARIOS <br> CURSO EXTENSIVO</a>
            </div>
            <div class="download-section1">
                <h3 class="titulo-curso">Ingeniería Ambiental y Ciencias del Mar</h3>
                <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="download-button">DESCARGAR HORARIOS <br> CURSO EXTENSIVO</a>
            </div>
            <div class="download-section1">
                <h3 class="titulo-curso">Arquitectura Técnica</h3>
                <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="download-button">DESCARGAR HORARIOS <br> CURSO EXTENSIVO</a>
            </div>
        </div>
        <div id="horarios-ingles">
            <h2 class="horarios-subtitle">CURSOS DE INGLÉS</h2>
        </div>
        <div class="downloads-english">
            <div class="download-section2">
                <h3 class="titulo-curso">Curso Intensivo</h3>
                <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="download-button">DESCARGAR HORARIOS, FECHAS Y PRECIO</a>
            </div>
            <div class="download-section2">
                <h3 class="titulo-curso">Curso Extensivo</h3>
                <a href="https://drive.google.com/file/d/1eeTBcYXA5fi0syvmVZCQyp1UFnQmLLC3/view?usp=drive_link" download="FLYER_A5_INGLES_ACSOL_1_PRINT.pdf" target="_blank" class="download-button">DESCARGAR HORARIOS, FECHAS Y PRECIO</a>
            </div>
        </div>

    </section>
</template>

<style scoped>

.horarios-section {
    background-color: #facd00;
    padding:0 20px;
}

.horarios-title {
    display: flex;
    max-width: 1500px;
    margin: 0px auto;
    padding: 120px 20px 80px 20px;
    justify-content: center;
}

.horarios-title-text {    
    color: #1b25ab;
    font-size: 64px;
    font-weight: 600;
    font-family: 'Montserrat';
    text-align: center;
    max-width: 900px;
    padding: 0;
    margin: 0 auto;
}

.horarios-subtitle {
    color: #1b25ab;
    text-align: center;
    margin: 0 auto;
    padding: 0;
    font-weight: 500; 
    letter-spacing: 5px;
}

.download-section1 {
    padding: 10px 30px 40px 30px;
    border-radius: 30px;
    border: px solid #1b25ab;
    width: 23.5%;
    align-content: center;
    box-shadow:
    5px 5px 10px rgba(0, 0, 0, 0.1), 
    -5px -5px 10px rgba(255, 255, 255, 0.3);
}

.download-section2 {
    box-shadow:
    5px 5px 10px rgba(0, 0, 0, 0.1), 
    -5px -5px 10px rgba(255, 255, 255, 0.3);
    padding: 10px 30px 40px 30px;
    border-radius: 30px;
    border: px solid #1b25ab;
    align-content: center;
}


.download-section1:hover {
    scale: 105%;
    transition: 0.3s;
}

.download-section2:hover {
    scale: 105%;
    transition: 0.3s;
}

.downloads-cursos {
    display: flex; 
    justify-content: space-between;
    padding-bottom: 80px;
    padding-top: 60px;
    max-width: 1500px;
    margin: 0px auto;
    text-align: center;    
}

.downloads-english {
    display: flex; 
    justify-content: center;
    gap: 30px;
    padding-top: 60px;
    padding-bottom: 120px;
    margin: 0 auto;
    text-align: center;
    max-width: 1500px;
}

.titulo-curso {
    color: #1b25ab;
    margin-bottom: 10px;
    padding-top: 0px;
    font-size: 22px;
    font-weight: 600;
}

.download-button {
    margin-top: 20px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    color:#1b25ab;
    border-radius:30px;
    background-color: #ecf0f1;
    padding:12px 25px;
    text-decoration: none;
    align-items: end;
    border: none;
    cursor: pointer;
    white-space: normal;
    display: inline-block;
    width: 100%;
}

.download-button:hover {
    color: #ecf0f1;
    background-color: #1b25ab;
    transition: 0.3s;
}
</style>