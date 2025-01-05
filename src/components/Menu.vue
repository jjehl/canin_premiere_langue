<template>
  <v-app-bar app dense>
    <!-- Logo -->
    <v-row class="d-flex align-center">
      <v-img
        src="/images/logo-canin-pl.jpg"
        alt="Logo Canin première langue"
        contain
        height="80"
        width="80"
      ></v-img>
      <v-spacer></v-spacer>

      <!-- Icônes sociales : masquées sur mobile -->
      <v-btn  icon href="https://www.facebook.com/share/18YADjz7VM/?mibextid=wwXIfr" target="_blank" alt="Facebook">
        <v-icon color="black">mdi-facebook</v-icon>
      </v-btn>
      <v-btn  icon href="https://www.instagram.com/canin_premiere_langue/profilecard/?igsh=djNhZHliZGw1dHpo" target="_blank" alt="Instagram">
        <v-icon color="black">mdi-instagram</v-icon>
      </v-btn>
    </v-row>

    <!-- Menu de navigation -->
    <v-spacer></v-spacer>
    <v-row v-if="!isMobile" class="d-flex align-center">
      <v-btn variant="text" to="/">Accueil</v-btn>
      <v-btn variant="text" to="/services">Services</v-btn>
      <v-btn variant="text" to="/testimonial">Témoignages</v-btn>
      <v-btn variant="text" to="/contact">Contact</v-btn>
    </v-row>

    <!-- Menu hamburger pour mobile -->
    <v-menu v-if="isMobile" offset-y>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link to="/">
          <v-list-item-title>Accueil</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/services">
          <v-list-item-title>Services</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/testimonial">
          <v-list-item-title>Témoignages</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/contact">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDisplay } from 'vuetify';

export default defineComponent({
  name: 'App',
  setup() {
    const { smAndDown } = useDisplay();
    const isMobile = smAndDown;

    return { isMobile };
  },
});
</script>
