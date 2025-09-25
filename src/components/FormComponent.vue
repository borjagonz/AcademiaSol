<template>
  <section id="formulario" class="form-section">
    <div class="head-form">
      <div class="claim-form">
        <h2 class="avant-title-form">Nuestro objetivo, tu aprobado.</h2>
        <h1 class="title-form">¡No pierdas ni un minuto más!</h1>
        <h2 class="subtitle-form">Solicita tu plaza ahora:</h2>
      </div>
      <div>
        <img
          class="icono-graduado"
          src="/src/icons/Icono-Graduado.svg"
          alt="Icono de diplomado"
        />
      </div>
    </div>
    <form class="form-grid" @submit.prevent="submitForm">
      <div class="form-col">
        <div class="form-group">
          <label for="nombre">Nombre y Apellidos *</label>
          <input type="text" id="nombre" v-model="form.nombre" required />
        </div>
        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="telefono">Teléfono *</label>
          <input type="tel" id="telefono" v-model="form.telefono" required />
        </div>
      </div>

      <div class="form-col">
        <div class="form-group">
          <label for="grado">Seleccionar grado *</label>
          <select id="grado" v-model="form.grado" required>
            <option value="">Selecciona un grado</option>
            <optgroup label="FACULTAD DE ECONOMÍA Y EMPRESAS - UB">
              <option>Grado en ADE y Economía</option>
              <option>Grado en Empresa Internacional</option>
              <option>Grado en Estadística</option>
              <option>Grado en Sociología</option>
            </optgroup>
            <optgroup label="ESADE - URL">
              <option>Grado en Dirección de Empresas BBA</option>
            </optgroup>
            <optgroup label="ESCUELA DE INGENIEROS DE CAMINOS, CANALES Y PUERTOS, ETSECCP - UPC">
              <option>Grado en Ingeniería Civil</option>
              <option>Grado en Ingeniería de la Construcción</option>
            </optgroup>
            <optgroup label="FACULTAD DE INFORMÁTICA, FIB - UPC">
              <option>Grado en Ingeniería Informática</option>
              <option>Grado en Ciencia e Ingeniería de Datos</option>
            </optgroup>
            <optgroup label="ESCUELA TÉCNICA DE INGENIERÍA DE TELECOMUNICACIÓN, ETSETB - UPC">
              <option>Grado en Ingeniería de Telecomunicación</option>
              <option>Grado en Ingeniería Física</option>
            </optgroup>
            <optgroup label="IQS - URL">
              <option>Grado en Dirección de y Administración de Empresas, ADE</option>
            </optgroup>          
          </select>
        </div>
        <div class="form-group">
          <label for="asignatura">Indicar asignatura *</label>
          <input type="text" id="asignatura" v-model="form.asignatura" required />
        </div>
        <div class="form-group">
          <label for="grupo">Seleccionar grupo *</label>
          <select id="grupo" v-model="form.grupo" required>
            <option value="">Selecciona un grupo</option>
            <option>Grupo 1</option>
            <option>Grupo 2</option>
            <option>Grupo 3</option>
            <option>Grupo 4</option>
            <option>Grupo 5</option>
            <option>Grupo 6</option>
            <option>Grupo 7</option>
            <option>Grupo 8</option>
            <option>Grupo 9</option>
            <option>Grupo 10</option>
          </select>
        </div>
      </div>

      <div class="form-col">
        <div class="form-group">
          <label for="curso">Tipo de curso *</label>
          <select id="curso" v-model="form.curso" required>
            <option value="">Selecciona un curso</option>
            <option>Curso Extensivo</option>
            <option>Curso Intensivo Parcial</option>
            <option>Curso Intensivo Final</option>
            <option>Curso Pre-Intensivo Final</option>
          </select>
        </div>
        <div class="form-group comentarios">
          <label for="comentarios">Comentarios *</label>
          <textarea
            id="comentarios"
            v-model="form.comentarios"
            rows="6"
            required
          ></textarea>
        </div>
      </div>
    </form>

    <div class="form-actions">
      <label class="privacy-check">
        <input type="checkbox" v-model="form.privacidad" required />
        <p>Acepto las condiciones de privacidad del sitio web.</p>
        <a class="ver-condiciones" href="">(Ver condiciones*)</a>
      </label>
      <button class="button" type="submit" :disabled="loading" @click="submitForm">
        {{ loading ? "Enviando..." : "ENVIAR SOLICITUD" }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  nombre: "",
  email: "",
  telefono: "",
  grado: "",
  asignatura: "",
  grupo: "",
  curso: "",
  comentarios: "",
  privacidad: false,
});

const loading = ref(false);

const submitForm = () => {
  if (!form.privacidad) {
    alert("Debes aceptar las condiciones de privacidad.");
    return;
  }

  loading.value = true;

  const message = ` Nueva solicitud:
- Nombre: ${form.nombre}
- Email: ${form.email}
- Teléfono: ${form.telefono}
- Grado: ${form.grado}
- Asignatura: ${form.asignatura}
- Grupo: ${form.grupo}
- Curso: ${form.curso}
- Comentarios: ${form.comentarios}`;

  const phoneNumber = "34678175775"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");

  loading.value = false;
};
</script>

<style scoped>
.html {
  scroll-behavior: smooth;
}

.form-section {
  background-color: #ecf0f1;
  padding-top: 60px;
}

.head-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px;
  max-width: 1500px;
  margin: 20px auto;
  padding: 0 20px;
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
  padding: 0 20px;
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
  font-family: "Montserrat";
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 50px 20px 120px 20px;
  flex-wrap: wrap;
}

.form-actions .button {
  margin-left: auto;
  padding: 15px 0px;
  background: #facd00;
  color: #1b25ab;
  border: none;
  border-radius: 30px;
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  width: 30%;
}

.form-actions .button:hover {
  background: #1b25ab;
  color: white;
  transition: 0.3s;
}

.privacy-check input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #facd00;
  background-color: white;
  border: 2px solid #facd00;
  color: #1b25ab;
  cursor: pointer;
}

.privacy-check {
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  color: #1b25ab;
}

/* Móvil: todo en columna */
@media (max-width: 768px) {
  .form-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }

  .form-actions .button {
    width: 100%;
    margin-left: 0;
  }
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
