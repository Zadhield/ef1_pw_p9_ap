<template>
    <div class="container">
        <h1>Aprobación de Candidatos</h1>
            <Candidato :candidato="candidatoActual" :Buscar="buscarCandidato" :Agregar="agregarCandidato" />
            <Lista :lista="listaCandidatos" />
    </div>
</template>

<script>
import Candidato from "@/components/Candidato.vue";
import Lista from "@/components/Lista.vue";
import { obtenerCandidatoFachada } from "@/clients/Cliente";

export default {
    components: {
        Candidato,
        Lista
    },
    data() {
        return {
            listaCandidatos: [],

            candidatoActual: {
                fotografia: "",
                titulo: "",
                nombre: "",
                apellido: "",
                atributo5: "",
                atributo6: ""
            }
        };
    },
    methods: {
        async buscarCandidato() {
            const data = await obtenerCandidatoFachada();

            this.candidatoActual.fotografia = data.fotografia;
            this.candidatoActual.titulo = data.titulo;
            this.candidatoActual.nombre = data.nombre;
            this.candidatoActual.apellido = data.apellido;
            this.candidatoActual.atributo5 = data.atributo5;
            this.candidatoActual.atributo6 = data.atributo6;
        },

        agregarCandidato() {
            const nuevo = {
                titulo: this.candidatoActual.titulo,
                nombre: this.candidatoActual.nombre,
                apellido: this.candidatoActual.apellido,
                atributo5: this.candidatoActual.atributo5,
                atributo6: this.candidatoActual.atributo6,

            };

            this.listaCandidatos.push(nuevo);
            this.candidatoActual.fotografia = "";
            this.candidatoActual.titulo = "";
            this.candidatoActual.nombre = "";
            this.candidatoActual.apellido = "";
            this.candidatoActual.atributo5 = "";
            this.candidatoActual.atributo6 = "";
        },
    },
};
</script>

<style scoped>
    .container{
       
    }
</style>