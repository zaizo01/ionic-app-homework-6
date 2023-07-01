<template>
  <ion-page>
    <ion-content>
      <div style="margin: 50px">
        <h3>Predecir Genero</h3>
        <p>Ingrese el nombre:</p>
        <input type="text" v-model="name" placeholder="Ingrese el nombre" />
        <ion-button @click="fetchGender">Predecir</ion-button>
        <div v-if="genderData">
          <p>Genero: {{ genderData.gender }}</p>
          <p>Probabilidad: {{ genderData.probability }}</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import {
  IonInput,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
export default defineComponent({
  data() {
    return {
      name: "",
      genderData: null,
    };
  },
  methods: {
    fetchGender() {
      axios
        .get(`https://api.genderize.io/?name=${this.name}`)
        .then((response) => {
          this.genderData = response.data;
        });
    },
  },
});
</script>

<style scoped>
/* Styles for all input elements */
input {
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  width: 200px;
}

/* Styles for focused input elements */
input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
