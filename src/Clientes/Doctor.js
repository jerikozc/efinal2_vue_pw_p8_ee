import axios from 'axios'


const guardar = async (body) => {
    axios.post('https://localhost:8081/API/hospital/v1.0/pacientes', body).then(r=> r.data);
}

const mostrar = () => {
    return axios.get('https://localhost:8081/API/hospital/v1.0/pacientes').then(r=> r.data);
}


//Fachadas
export const guardarFachada = async (body) => {
    await guardar(body);
}

export const mostrarFachada = async () => {
   await mostrar();
}
 

