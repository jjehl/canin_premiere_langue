<template>
  <Menu/>
  <v-container>
    <v-row class="d-flex flex-column justify-center align-center text-center">
      <p style="font-size: 0.9em;">Canin première langue - ASSOCIATION loi 1901 - Pour la prévention des morsures, des
        abandons et des euthanasies</p>
    </v-row>

    <v-row align="center" justify="center" class="mt-4 mb-6">
      <v-col class="d-flex justify-center">
        <v-img
          src="/images/groupe_chien.jpg"
          alt="Canin Première Langue"
          max-height="350"
          max-width="700"
          class="rounded-image"
          contain
        ></v-img>
      </v-col>
    </v-row>

    <v-row class="green-background d-flex flex-column justify-center align-center text-center">
      <h1>Nous contacter</h1>
    </v-row>

    <v-row class="d-flex flex-column justify-center align-center text-center mt-6">
      <v-col cols="12" md="8">
        <p>
          Canin Première Langue s'adresse aux personnes souhaitant s'engager dans une démarche de compréhension du chien et de responsabilité.
        </p>
        <br>
        <p>
          Si vous souhaitez obtenir des informations sur l'association et son fonctionnement, vous pouvez contacter le président :
        </p>
        <br>
        <p style="font-size: 1.3em; font-weight: bold;">📱 06.73.33.84.59</p>
        <p><em>(De préférence par SMS.)</em></p>
        <br>
        <p style="font-size: 0.9em; color: #666;">
          Merci de préciser dans votre message : votre prénom, l'âge de votre chien et la situation pour laquelle vous souhaitez des renseignements.
        </p>
        <br>
        <p style="font-size: 0.9em; color: #666;">Un échange téléphonique pourra être proposé si nécessaire.</p>
        <br>
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
