<template>
  <ion-page>
    <ion-content>
      <div style="margin: 30px">
        <p>Ingrese el primer numero:</p>
        <input
          type="number"
          v-model="number1"
          placeholder="Ingrese el primer numero"
        />
        <br />
        <p>Ingrese el segundo numero:</p>
        <input
          type="number"
          v-model="number2"
          placeholder="Ingrese el segundo numero"
        />
        <br />
        <ion-button @click="showBiggerNum">Revelar numero mayor</ion-button>
        <ion-button @click="clean">Limpiar</ion-button>
        <br />
        <p style="margin-top: 20px">El nuumero mayor es: {{ biggerNumber }}</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
      number1: 0,
      number2: 0,
      biggerNumber: 0,
    };
  },
  methods: {
    // Cristopher Zaiz Ortega, 2021-0949
    showBiggerNum() {
      this.biggerNumber =
        this.number1 > this.number2 ? this.number1 : this.number2;
    },
    clean() {
      this.number1 = 0;
      this.number2 = 0;
      this.biggerNumber = 0;
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
/* Styles for all input elements */
input {
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  width: 200px;
  margin: 20px 0;
}

/* Styles for focused input elements */
input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
.form-container {
  display: flex;
  align-items: center;
}

.form-container input {
  margin-right: 10px;
}

.form-container button {
  margin-left: 10px;
}
</style>
