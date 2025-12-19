<template>
  <div class="tabla">
    <table border="1">
        <thead>
            <tr>
                <th>Título</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Género</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in lista" :key="index">
                <td>{{ item.titulo }}</td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.apellido }}</td>
                <td>{{ item.atributo5 }}</td>
                <td>{{ item.atributo6 }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Lista",
  props: {
    lista: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
    .tabla{
        display: flex;
        text-align: center;
        flex-direction: column;
        color: blue;
    }
</style>