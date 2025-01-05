<template>
  <Menu/>
  <v-container>
    <v-row class="d-flex flex-column justify-center align-center text-center">
      <p style="font-size: 0.9em;">Canin première langue - ASSOCIATION loi 1901 - Pour la prévention des morsures, des
        abandons et des euthanasies</p>
    </v-row>
    <v-row class="d-flex flex-column justify-center align-center text-center">
      <h1>Ils se sont lancés avec nous !</h1>
    </v-row>
    <v-row align="center" justify="space-between" class="flex-wrap">
      <!-- texte à gauche -->
      <v-col cols="12" md="6" class="text-center">
        <h2>Jessica, Alex et Draco</h2>
        <br>
        <h2>Nicole et Taylor</h2>
        <br>
        <h2>Sabrina, Michael et Sharon</h2>
        <br>
        <h2>Nicolas et Ulya</h2>
      </v-col>
      <!-- Image à droite -->
      <v-col cols="12" md="6" class="d-flex flex-column  align-center">
        <h2>Carole et Cachou - 15/12/2024</h2>
        <v-img
          src="/images/temoignage.jpg"
          alt="Éducation canine"
          height="500"
          width="350"
          class="rounded-image"
          contain
        ></v-img>
      </v-col>
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

        <h2>Vous voulez les mêmes résultats ?</h2>
        <h2>Apprenez sa langue !</h2>

      </v-col>
    </v-row>
    <br>
  </v-container>
</template>

<style>
.rounded-image {
  border-radius: 16px; /* Ajustez la valeur pour rendre l'image plus ou moins arrondie */
  overflow: hidden; /* S'assure que l'image reste bien dans les bordures */
}
</style>

<script>
export default {
  name: 'Service',
};
</script>
