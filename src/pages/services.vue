<template>
  <Menu/>
  <v-container>
    <v-row class="d-flex flex-column justify-center align-center text-center">
      <p style="font-size: 0.9em;">Canin première langue - ASSOCIATION loi 1901 - Pour la prévention des morsures, des
        abandons et des euthanasies</p>
    </v-row>
    <v-row class="green-background d-flex flex-column justify-center align-center text-center">
      <h1>Education Canine</h1>
    </v-row>
    <!-- Section avec l'image et le texte -->
    <v-row align="center" justify="space-between" class="flex-wrap">
      <!-- texte à gauche -->
      <v-col cols="12" md="6" class="text-center">
        <h2>Vous avez un chien qui tire en laisse et</h2>
        <h2>vous rêvez de balades agréables ?</h2>
        <h2>Votre chien ne revient pas en présence de stimuli et</h2>
        <h2>vous rêvez d’un bon rappel ?</h2>
      </v-col>
      <!-- Image à droite -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          src="/images/chien_laisse.jpg"
          alt="Éducation canine"
          max-height="350"
          max-width="350"
          class="rounded-image"
          contain
        ></v-img>
      </v-col>

    </v-row>
    <v-row align="center" justify="space-between" class="flex-wrap">
      <!-- texte à gauche -->
      <v-col cols="12" md="6" class="text-center">
        <h2>Vous avez un chiot et</h2>
        <h2>vous rêvez de lui donner une bonne éducation ?</h2>
      </v-col>
      <!-- Image à droite -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          src="/images/chiot.jpg"
          alt="Éducation canine"
          max-height="350"
          max-width="350"
          class="rounded-image"
          contain
        ></v-img>
      </v-col>


    </v-row>
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center text-center">
        <h2>Bref, votre chien ne vous écoute pas et</h2>
        <h2>vous rêvez d’avoir un chien obéissant et</h2>
        <h2>plus de complicité avec lui ?</h2>
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
    <v-row class="green-background d-flex flex-column justify-center align-center text-center">
      <h1>Troubles du comportement</h1>
    </v-row>
    <v-row align="center" justify="space-between" class="flex-wrap">
      <!-- texte à gauche -->
      <v-col cols="12" md="6" class="text-center">
        <h2>Votre chien…</h2>
        <h2>Détruit ? Vole ? Est hyperactif ?</h2>
        <h2>Est malpropre ? Fugue ?</h2>
      </v-col>
      <!-- Image à droite -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          src="/images/chien_detruit.jpg"
          alt="Éducation canine"
          max-height="350"
          max-width="350"
          class="rounded-image"
          contain
        ></v-img>
      </v-col>

    </v-row>
    <v-row align="center" justify="space-between" class="flex-wrap">
      <!-- texte à gauche -->
      <v-col cols="12" md="6" class="text-center">
        <h2>Saute sur vous et sur vos invités ?</h2>
        <h2>Est agressif ? Craintif ?</h2>
      </v-col>
      <!-- Image à droite -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          src="/images/chien_agressif.jpg"
          alt="Éducation canine"
          max-height="350"
          max-width="350"
          class="rounded-image"
          contain
        ></v-img>
      </v-col>


    </v-row>
    <v-row align="center" justify="space-between" class="flex-wrap">
      <!-- texte à gauche -->
      <v-col cols="12" md="6" class="text-center">
        <h2>Anxieux lorsqu’il est seul ?</h2>
        <h2>Aboie trop ?</h2>
      </v-col>
      <!-- Image à droite -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          src="/images/chien_hurle.png"
          alt="Éducation canine"
          max-height="350"
          max-width="350"
          class="rounded-image"
          contain
        ></v-img>
      </v-col>

    </v-row>
    <v-row class="green-background d-flex flex-column justify-center align-center text-center">
      <h1>vous rêvez que son comportement cesse ?</h1>
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
