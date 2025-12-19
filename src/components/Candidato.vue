<template>
  <div class="formulario">
    <div class="foto-container">
      <img v-if="candidato.fotografia" :src="candidato.fotografia" alt="Foto" />
      <p v-else>Fotografía</p>
    </div>

    <div class="campos">
      <label>Título:</label>
      <input type="text" v-model="candidato.titulo">

      <label>Nombre:</label>
      <input type="text" v-model="candidato.nombre">

      <label>Apellido:</label>
      <input type="text" v-model="candidato.apellido">

      <label>Email:</label>
      <input type="text" v-model="candidato.atributo5">

      <label>Género:</label>
      <input type="text" v-model="candidato.atributo6">
    </div>

    <div class="botones">
      <button class="btn-buscar" @click="Buscar">Buscar</button>
      <button class="btn-agregar" @click="Agregar">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    candidato: {
      type: Object,
      required: true
    },
    Buscar: {
      type: Function,
      required: true
    },
    Agregar: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
.formulario {
 
  margin: 0 auto; 
  
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  border: 1px solid blue;
}


.foto-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc; 
  margin-bottom: 10px;
}

.foto-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.campos {
  display: flex; 
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  color: blue;
}

input {
  width: 90%; 
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  color: blue;
  align-self: center; 
}

.botones {
  display: flex;
  gap: 10px;
}

.btn-buscar, .btn-agregar {
  background: blue;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>