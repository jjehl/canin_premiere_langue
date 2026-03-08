<template>
  <Menu/>
  <v-container>
    <v-row class="d-flex flex-column justify-center align-center text-center">
      <p style="font-size: 0.9em;">Canin première langue - ASSOCIATION loi 1901 - Pour la prévention des morsures, des
        abandons et des euthanasies</p>
    </v-row>

    <v-row class="green-background d-flex flex-column justify-center align-center text-center">
      <h1>Notre démarche</h1>
    </v-row>

    <!-- Bloc intro -->
    <v-row align="center" justify="space-between" class="flex-wrap mt-4">
      <v-col cols="12" md="6" class="text-justify" style="text-align: justify;">
        <p>
          Canin Première Langue est centrée sur le bien-être des chiens.
        </p>
        <br>
        <p>
          Nous considérons qu'un chien ne peut être serein que s'il est compris —
          compris dans ses besoins et dans sa manière de les exprimer.
          C'est pourquoi l'association organise des activités collectives et transmet aux maîtres les clés de lecture du langage canin.
        </p>
        <br>
        <p>
          La progression repose sur l'implication active du maître et sur une compréhension progressive des besoins physiques, émotionnels et relationnels du chien.
        </p>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          src="/images/chien_hurle.png"
          alt="Canin Première Langue"
          max-height="400"
          max-width="400"
          class="rounded-image"
          contain
        ></v-img>
      </v-col>
    </v-row>

    <v-divider class="my-8"></v-divider>

    <!-- Bloc ateliers collectifs -->
    <v-row align="center" justify="space-between" class="flex-wrap">
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          src="/images/chien_laisse.jpg"
          alt="Ateliers collectifs"
          max-height="350"
          max-width="350"
          class="rounded-image"
          contain
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" class="text-justify" style="text-align: justify;">
        <p>
          Les ateliers collectifs constituent le cœur du projet associatif.
          Ils permettent aux chiens d'évoluer dans un cadre structuré, sécurisant et respectueux, favorable à leur équilibre.
        </p>
        <br>
        <p>
          Lorsque cela est nécessaire, un accompagnement initial peut être proposé afin de permettre une intégration sereine au collectif.
        </p>
      </v-col>
    </v-row>

    <v-divider class="my-8"></v-divider>

    <!-- Bloc engagement -->
    <v-row align="center" justify="space-between" class="flex-wrap">
      <v-col cols="12" md="6" class="text-justify" style="text-align: justify;">
        <p>
          L'association s'adresse aux personnes souhaitant s'engager dans une démarche de compréhension, de responsabilité et de cohérence.
        </p>
      </v-col>
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

    <v-divider class="my-8"></v-divider>

    <!-- CTA Contact -->
    <v-row class="d-flex flex-column justify-center align-center text-center mb-6">
      <v-col>
        <p style="font-size: 1.1em;">Pour toute demande d'information, contactez-nous.</p>
        <br>
        <v-btn color="green-darken-2" variant="elevated" to="/contact" size="large">
          Obtenir des informations
        </v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<style>
.rounded-image {
  border-radius: 15px;
  overflow: hidden;
}
</style>

<script setup lang="ts">
import Menu from "@/components/Menu.vue";
</script>
