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

    <v-row class="green-background d-flex flex-column justify-center align-center text-center">
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

    <v-row
      class="d-flex flex-wrap justify-space-between justify-center align-center text-center pa-4 rounded-lg elevation-2">
      <!-- contact à gauche -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
        <v-card class="pa-4 rounded-lg" style="background-color: #f3c247;">
          <v-card-title class="text-center">
            <strong>CONTACTEZ-NOUS !</strong>
            <p>06.73.33.84.59</p>
          </v-card-title>
          <v-card-text>
            <v-table style="background-color: #ffd975; border-radius: 10px;">
              <thead>
              <tr>
                <th class="text-left">Semaine</th>
                <th class="text-left">Week-end</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>12-14h <br> 17-20h</td>
                <td>9-20h</td>
              </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Texte à droite -->
      <v-col cols="12" md="6">

        <h2>Nous avons des solutions !</h2>
        <h2>Apprenez sa langue !</h2>

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
