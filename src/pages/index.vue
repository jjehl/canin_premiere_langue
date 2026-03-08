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
            <h1>Pour des chiens compris</h1>



        </v-row>
        <v-row class="d-flex flex-column justify-center align-center text-center">
          <p class="intro-text">
            🐾 Le bien-être canin commence par la compréhension
          </p>
          <p>
            Canin Première Langue est une association dédiée au bien-être des chiens.<br><br>
            Parce qu'un chien ne parle pas notre langue, nous apprenons aux maîtres à comprendre la sienne.<br><br>
            À travers la transmission du langage canin, l'association agit pour des relations plus équilibrées, plus justes et plus sereines.
          </p>
        </v-row>

      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center text-center">
        <br>
        <p class="section-title">Une démarche progressive vers le collectif</p>
        <p>
          Les ateliers collectifs permettent de créer des situations favorables au bien-être des chiens, dans un cadre structuré, sécurisant et adapté à leurs besoins physiques, émotionnels et relationnels.<br><br>
          Pour que ce cadre soit pleinement bénéfique, la transmission aux maîtres des connaissances du langage canin et de la compréhension des besoins de leur chien peut s’appuyer sur un accompagnement initial.
        </p>
        <v-divider class="my-6" style="width: 60%;"></v-divider>
        <p class="section-title">Un projet associatif</p>
        <p>
          Canin Première Langue fonctionne dans un cadre non lucratif.<br><br>
          L’adhésion permet de rejoindre une dynamique collective centrée sur le bien-être canin :
          ateliers collectifs, temps d’échange entre les membres et partage d’expériences contribuent à faire vivre le projet.
        </p>
        <v-divider class="my-6" style="width: 60%;"></v-divider>
        <p class="section-title">Demander des informations</p>
        <p>
          Pour toute demande de renseignement, vous pouvez contacter le président de l’association via le formulaire dédié.
        </p>
        <br>
        <v-btn color="green-darken-2" variant="elevated" to="/contact" size="large">
          Obtenir des informations
        </v-btn>
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

.intro-text {
  font-size: 1.4em;
  font-weight: bold;
}

.section-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 8px;
}
</style>
<script setup lang="ts">
import Menu from "@/components/Menu.vue";
</script>
