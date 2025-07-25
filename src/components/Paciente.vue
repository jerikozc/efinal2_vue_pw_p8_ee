<template>
  <div>
    <!-- Componente 1: Formulario para agendar cita -->
    <form @submit.prevent="agendarCita" class="formulario">
      <div>
        <label>Cédula Doctor</label>
        <input v-model="cedulaDoctor" type="text" required />
      </div>
      <div>
        <label>Cédula Paciente</label>
        <input v-model="cedulaPaciente" type="text" required />
      </div>
      <div>
        <label>Fecha Cita</label>
        <input v-model="fechaCita" type="datetime-local" required />
      </div>
      <button @click="guardar" type="submit">Agendar</button>
      <button> Nueva Agenda</button>
    </form>

    <!-- Componente 2: Tabla de citas agendadas -->
    <table class="tabla-citas">
      <thead>
        <tr>
          <th>Nombre Paciente</th>
          <th>Apellido Paciente</th>
          <th>Cédula Paciente</th>
          <th>Fecha Cita</th>
          <th>Nombre Doctor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cita, index) in citas" :key="index">
          <td><i>{{ cita.nombrePaciente }}</i></td>
          <td><i>{{ cita.apellidoPaciente }}</i></td>
          <td>{{ cita.cedulaPaciente }}</td>
          <td>{{ cita.fechaCita }}</td>
          <td>{{ cita.nombreDoctor }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {guardarFachada, mostrarFachada} from "../Clientes/Doctor"
export default {
  data() {
    return {
      cedulaDoctor: '',
      cedulaPaciente: '',
      fechaCita: '',
      citas: [
        
        {
          nombrePaciente: 'Erick',
          apellidoPaciente: 'Enriquez',
          cedulaPaciente: '0401213053',
          fechaCita: '07/24/2025, 16:30 PM',
          nombreDoctor: 'David'
        }
      ]
    };
  },
  methods: {
   async guardar() {
     
      paciente ({
        nombrePaciente: 'Nombre', 
        apellidoPaciente: 'Apellido', 
        cedulaPaciente: this.cedulaPaciente,
        fechaCita: new Date(this.fechaCita).toLocaleString(),
        nombreDoctor: 'Doctor' 
      });
      
      this.cedulaDoctor = '';
      this.cedulaPaciente = '';
      this.fechaCita = '';

    await guardarFachada(paciente);
      
    },
    async mostrarCitas(){
         this.citas = await mostrarFachada();
       
    }
  }
};
</script>

<style>
.formulario {
  border: 1px solid #041627;
  padding: 16px;
  margin-bottom: 32px;
  color: #0f3052;
}
.formulario label {
  display: block;
  margin-bottom: 4px;
}
.formulario input {
  margin-bottom: 12px;
  width: 100%;
  padding: 4px;
  border: 1px solid #122e49;
  border-radius: 4px;
}
.formulario button {
  color: #071f38;
  border: 1px solid #1976d2;
  background: none;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.tabla-citas {
  width: 100%;
  border-collapse: collapse;
  color: #3784d1;
}
.tabla-citas th, .tabla-citas td {
  border: 1px solid #0d4b88;
  padding: 8px;
  text-align: center;
}
.tabla-citas i {
  font-style: italic;
}
</style>