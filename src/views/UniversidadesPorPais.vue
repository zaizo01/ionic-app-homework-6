<template>
  <ion-page>
    <ion-content>
      <div style="margin: 50px">
        <h3>Universidades Por Pais</h3>
        <p>Ingrese el pais:</p>
        <input type="text" v-model="name" placeholder="Ingrese el pais" />
        <ion-button @click="fetchGender">Buscar</ion-button>
        <div v-if="countryData">
          <h3>Universidades:</h3>
          <div v-for="university in countryData" :key="university.id">
            <p>{{ university.name }} -  <a :href="university.web_pages[0]">Link to web site</a>
              <div style="margin-left:20px">
                Dominios:
                <div v-for="domain in university.domains" :key="domain.id">
                  * {{ domain }}
                </div>
              </div>
            </p>
          </div>
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
      countryData: null,
    };
  },
  methods: {
    fetchGender() {
      axios
        .get(`http://universities.hipolabs.com/search?country=${this.name}`)
        .then((response) => {
          this.countryData = response.data;
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
