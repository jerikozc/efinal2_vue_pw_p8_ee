<template>
  <div>
    <form @submit.prevent="guardarDoctor" class="formulario">
      <div>
        <label>Cédula</label>
        <input v-model="cedula" type="text" required />
      </div>
      <div>
        <label>Nombre</label>
        <input v-model="nombre" type="text" required />
      </div>
      <div>
        <label>Apellido</label>
        <input v-model="apellido" type="text" required />
      </div>
      <div>
        <label>Género</label>
        <select v-model="genero" required>
          <option value="" disabled>Seleccione</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
      </div>
      <button type="submit">Guardar</button>
    </form>
    <div v-if="mensaje" class="mensaje">
      {{ mensaje }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cedula: '',
      nombre: '',
      apellido: '',
      genero: '',
      mensaje: ''
    };
  },
  methods: {
    guardarDoctor() {
      // Aquí iría la lógica para guardar el doctor (API, local, etc.)
      this.mensaje = 'Doctor guardado exitosamente';
      // Limpiar formulario
      this.cedula = '';
      this.nombre = '';
      this.apellido = '';
      this.genero = '';
      // Ocultar mensaje después de 10 segundos
      setTimeout(() => {
        this.mensaje = '';
      }, 10000);
    }
  }
};
</script>

<style>
.formulario {
  border: 1px solid black;
  padding: 16px;
  margin-bottom: 32px;
  color: #1976d2;
  max-width: 400px;
  margin: auto;
}
.formulario label {
  display: block;
  margin-bottom: 4px;
}
.formulario input,
.formulario select {
  margin-bottom: 12px;
  width: 100%;
  padding: 4px;
  border: 1px solid black;
  border-radius: 4px;
}
.formulario button {
  color: #479aec;
  border: 1px solid #047e69;
  background: none;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.mensaje {
  color: rgb(15, 216, 15);
  text-align: center;
  margin-top: 16px;
  font-weight: bold;
}
</style>