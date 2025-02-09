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
            <h1>Comportement</h1>
            <h1>Éducation canine</h1>
            <h1>Formation des maîtres</h1>


        </v-row>
        <v-row class="d-flex flex-column justify-center align-center text-center">
          <br>
          <h3>Séances à domicile</h3>
          <h3>Méthode Positive non permissive</h3>
          <h3>Toutes races, tous âges </h3>
          <p class="text-info">(de 2 mois à 10 ans et +)</p>
          <h3>Secteur Lyon Nord </h3>
          <p class="text-info">
            (Rillieux-la-Pape, Sathonay-Camp, Caluire et Cuire, Neyron, Miribel,
            Beynost…)
          </p>
          <br>
        </v-row>
      </v-col>
    </v-row>

    <!-- Contenu supplémentaire en dessous -->
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center text-center">
        <h2>Votre chien…</h2>
        <p class="text-bold">
          … tire en laisse ? … aboie trop ? … saute ? … ne vous écoute pas ?
          … détruit ? … vole ? … agresse ? … craint tout ?
        </p>
        <br>
        <h2>Vous avez un chiot…</h2>
        <p class="text-bold">
          … et vous souhaitez l’éduquer ?
        </p>
        <br>
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
                  <td>12-14h / 17-20h</td>
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
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center text-center">
        <br>
        <h3>L’objectif de l’association</h3>
        <p><b>Prévention des morsures, abandons et euthanasies.</b>
          En s’adressant prioritairement aux <b>propriétaires</b> ou <b>futurs propriétaires</b> de chien.
          Mais aussi auprès des <b>bénévoles</b> et/ou <b>professionnels</b> œuvrant en refuges.
          Et en intervenant auprès <b>des enfants et adolescents</b> pour faire connaître les besoins des chiens et
          l’importance d’y répondre.
        </p>
        <br>
        <h3>Les missions de l’association</h3>
        <p>
          <b>Former les propriétaires ou futurs propriétaires de chien</b> sur l’éducation, le langage canin et
          l'origine des troubles du comportement.
          <b>Favoriser le bien-être canin</b> en développant des activités autour de la
          dépense physique et mentale des chiens.
          <b>Informer les futures générations</b> à propos de « qu’est-ce ça signifie d’avoir un chien ».
        </p>
        <br>
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
