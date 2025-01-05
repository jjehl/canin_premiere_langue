<template>
  <Menu/>
  <v-container>
    <v-row class="d-flex flex-column justify-center align-center text-center">
      <p style="font-size: 0.9em;">Canin première langue - ASSOCIATION loi 1901 - Pour la prévention des morsures, des
        abandons et des euthanasies</p>
    </v-row>
    <v-row align="center" justify="space-between" class="flex-wrap">
      <v-col class="d-flex justify-center">
        <v-img
          src="/images/groupe_chien.jpg"
          alt="Éducation canine"
          max-height="350"
          max-width="700"
          class="rounded-image"
          contain
        ></v-img>
      </v-col>

    </v-row>

    <v-row class="d-flex flex-column justify-center align-center text-center">
      <h1>Apprenez à parler la même langue que votre chien</h1>
      <h1>Utilisez ses propres codes pour mieux vous faire comprendre</h1>
      <br>
    </v-row>
    <v-row
      class="d-flex flex-wrap justify-space-between justify-center align-center text-center pa-4 rounded-lg elevation-2">
      <!-- contact à gauche -->
      <v-col class="d-flex flex-column justify-center align-center">
        <p><strong>Association Canin Première Langue</strong></p>
        <p>262, montée de la velette</p>
        <p>69140 Rillieux-la-Pape</p>
      </v-col>
    </v-row>
    <v-row class="d-flex flex-column justify-center align-center text-center">
      <br>
      <h2>Du lundi au vendredi</h2>
      <h2>Entre 12h et 14h et de 17h à 20h</h2>
      <br>
      <h2>Le samedi</h2>
      <h2>De 9h à 19h</h2>
      <br>
    </v-row>
    <v-row
      class="d-flex flex-wrap justify-space-between justify-center align-center text-center pa-4 rounded-lg elevation-2">
      <!-- contact à gauche -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
        <p><strong>CONTACTEZ-NOUS !</strong></p>
        <p>06.73.33.84.59</p>
        <p>Du lundi au samedi</p>
        <p>De 8h30 à 20h</p>
      </v-col>

      <!-- Texte à droite -->
      <v-col cols="12" md="6">

        <h2>Parce que c’est à vous d’apprendre</h2>
        <h2>sa langue et ses codes !</h2>

      </v-col>
    </v-row>
    <br>
  </v-container>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: 'Service',
  components: {Menu},
};
</script>
