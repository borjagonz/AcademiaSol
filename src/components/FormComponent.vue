<template>
  <section id="formulario" class="form-section">
    <div class="head-form">
        <div class="claim-form">
            <h2 class="avant-title-form">Nuestro objetivo, tu aprobado.</h2>
            <h1 class="title-form">¡No pierdas ni un minuto más!</h1>
            <h2 class="subtitle-form">Reserva tu plaza ahora:</h2>
        </div>
        <div> <img class="icono-graduado" src="/src/icons/Icono-Graduado.svg" alt="Icono de diplomado"></div>
    </div>
    <form class="form-grid">
            <div class="form-col">
        <div class="form-group">
          <label for="nombre">Nombre y Apellidos *</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="telefono">Teléfono *</label>
          <input type="tel" id="telefono" name="telefono" required />
        </div>
      </div>
      <div class="form-col">
        <div class="form-group">
          <label for="grado">Seleccionar grado *</label>
          <select id="grado" name="grado" required>
            <option value="">Selecciona un grado</option>
            <option value="grado1">Grado 1</option>
            <option value="grado2">Grado 2</option>
            <option value="grado3">Grado 3</option>
          </select>
        </div>
        <div class="form-group">
          <label for="asignatura">Indicar asignatura *</label>
          <input type="text" id="asignatura" name="asignatura" required />
        </div>
        <div class="form-group">
          <label for="grupo">Seleccionar grupo *</label>
          <select id="grupo" name="grupo" required>
            <option value="">Selecciona un grupo</option>
            <option value="grupoA">Grupo A</option>
            <option value="grupoB">Grupo B</option>
            <option value="grupoC">Grupo C</option>
          </select>
        </div>
      </div>
      <div class="form-col">
        <div class="form-group">
          <label for="curso">Tipo de curso *</label>
          <select id="curso" name="curso" required>
            <option value="">Selecciona un curso</option>
            <option value="curso1">Curso 1</option>
            <option value="curso2">Curso 2</option>
            <option value="curso3">Curso 3</option>
          </select>
        </div>
        <div class="form-group comentarios">
          <label for="comentarios">Comentarios *</label>
          <textarea id="comentarios" name="comentarios" rows="6" required></textarea>
        </div>
      </div>
    </form>
    <div class="form-actions">
        <label class="privacy-check">
        <input type="checkbox" required /><p>Acepto las condiciones de privacidad del sitio web.</p><a class="ver-condiciones" href="">(Ver condiciones*)</a>
        </label>
        <button class="button" type="submit">QUIERO RESERVAR</button>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>

.html {
  scroll-behavior: smooth;
}

.form-section {
    background-color: #ecf0f1;
    padding-top: 60px ;
}

.head-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px;
  max-width: 1500px;
  margin: 20px auto;
  padding:0 20px;
  justify-items: center;
}

.claim-form {
  max-width: 1450px;
  margin: auto;
  color: #1b25ab;
}

.avant-title-form {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0px;
    padding-top: 40px;
}

.title-form {
    font-size: 64px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 0;
}

.subtitle-form {
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 100px;
    font-size: 36px;
}

.icono-graduado {
  width: 100%;
  padding-left: 90px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1500px;
  margin: 20px auto;
  padding:0 20px;
}

.form-col {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  color: #1b25ab;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 6px;
}

.form-group input,
.form-group select,
.form-group textarea {
  border: none;
  border-bottom: 1px solid #facd00;
  background: transparent;
  padding: 6px 2px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Montserrat';
  outline: none;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-bottom-color: #1b25ab;
}

.form-group select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-position: right 8px center;
  background-repeat: no-repeat;
}

.comentarios textarea {
  height: 115px;
}

.form-actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px;
  max-width: 1500px;
  margin: 0px auto;
  padding:0 20px;
  padding-top: 50px;
  padding-bottom: 120px;
}

.privacy-check input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #facd00; 
  background-color: white;
  border: 2px solid #facd00;
  color: #1b25ab;
  border-radius: 0px;
  cursor: pointer;
}

.privacy-check {
  justify-self: start; 
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  color: #1b25ab;
}

.button {
  justify-self: end; 
  padding: 15px 0px;
  background: #facd00;
  color: #1b25ab;
  border: none;
  border-radius: 0px;
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  width: 60%;
  border-radius: 30px;
}

.form-actions button:hover {
  background: #1b25ab;
  color: white;
  transition: 0.3s;
}

.ver-condiciones {
    color: grey;
    font-size: 16px;
    text-decoration: none;
}

.ver-condiciones:hover {
  text-decoration: underline;
}

</style>
