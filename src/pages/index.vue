<template>
  <Menu/>
  <!-- Conteneur principal -->
  <v-container>
    <v-row class="d-flex flex-column justify-center align-center text-center">
      <p style="font-size: 0.9em;">Canin première langue - ASSOCIATION loi 1901 - Pour la prévention des morsures, des
        abandons et des euthanasies</p>
    </v-row>
    <!-- Section avec l'image et les 3 lignes de texte -->
    <v-row align="center" justify="space-between" class="flex-wrap">
      <!-- Image à gauche -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
            src="/images/background-cpl.jpg"
            alt="Éducation canine"
            max-height="500"
            max-width="500"
            class="rounded-image"
            contain
        ></v-img>
      </v-col>

      <!-- Texte à droite -->
      <v-col cols="12" md="6">
        <v-row class="green-background d-flex flex-column justify-center align-center text-center">
            <h1>PECCRAM - Prévention des morsures</h1>
            <h1>Comportement et Éducation canine</h1>
            <h1>Formation des maîtres</h1>



        </v-row>

      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center text-center">
        <br>
        <h2>Objectifs de l’association</h2>
        <p><b>Prévention des morsures, abandons et euthanasies.</b><br>
          En oeuvrant auprès des <b>jeunes enfants</b>, des <b>propriétaires</b> ou <b>futurs propriétaires</b> de chien,
          mais aussi des <b>bénévoles</b> et/ou <b>professionnels</b> intervenant en refuges.
        </p>
        <br>
        <h2>Missions de l’association</h2>
        <p>
          <b>Eduquer</b> la jeune génération à la connaissance du chien.<br>
          <b>Former</b> les propriétaires ou futurs propriétaires de chien sur l’éducation, le langage canin et
          l'origine des troubles du comportement.<br>
          <b>Favoriser</b> le bien-être canin en développant des activités autour de la
          dépense physique et mentale des chiens.
        </p>
        <br>
      </v-col>
    </v-row>
    <!-- Contenu supplémentaire en dessous -->

    <v-row>
      <v-col class="d-flex flex-column justify-center align-center text-center">
        <h2>Vous travaillez dans…</h2>
        <p class="text-bold">
          … une école ? … un centre aéré ? … une médiathèque ? … une animalerie ?
          <br>Responsabilisez vos jeunes au respect du chien et prévenez les morsures.
        </p>
        <br>
        <h2>Votre chien…</h2>
        <p class="text-bold">
          … tire en laisse ? … aboie trop ? … saute ? … ne vous écoute pas ?
          … détruit ? … vole ? … agresse ? … craint tout ?<br>
          Formez vous au comportement canin.
        </p>
        <br>
        <h2>Vous avez un chiot…</h2>
        <p class="text-bold">
          … et vous souhaitez l’éduquer ?
        </p>
        <br><br>
        <h2>Nous avons des solutions !</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center text-center">
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
    </v-row>


  </v-container>
</template>

<style>
.rounded-image {
  border-radius: 15px; /* Coins arrondis */
  overflow: hidden;
}

@media (max-width: 960px) {
  /* Styles pour écrans plus petits */
  .rounded-image {
    margin-bottom: 20px; /* Espace sous l'image */
  }
}
</style>
<script setup lang="ts">
import Menu from "@/components/Menu.vue";
</script>
