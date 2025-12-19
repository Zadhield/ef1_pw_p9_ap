import axios from "axios";

const consumirApi = async () => {
  const data = await axios.get("https://randomuser.me/api/").then((r) => r.data);
  return data;
};

export const obtenerCandidatoFachada = async () => {
  const data = await consumirApi();
  const usuario = data.results[0];
  
  return {
      fotografia: usuario.picture.large, 
      titulo: usuario.name.title,        
      nombre: usuario.name.first,
      apellido: usuario.name.last,      
      atributo5: usuario.email,              
      atributo6: usuario.gender            
  };
};