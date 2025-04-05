<template>
  <Menu/>
  <v-container>
    <v-row class="d-flex flex-column justify-center align-center text-center">
      <p style="font-size: 0.9em;">Canin première langue - ASSOCIATION loi 1901 - Pour la prévention des morsures, des
        abandons et des euthanasies</p>
    </v-row>
    <v-row class="green-background d-flex flex-column justify-center align-center text-center">
      <h1>Ils se sont lancés avec nous !</h1>
    </v-row>
    <v-row align="center" justify="space-between" class="flex-wrap">
      <!-- texte à gauche -->
      <v-col cols="12" md="6" class="text-justify" style="text-align: justify;">
        &quot;Un nouveau départ&quot;<br><br>
        Draco est un croisé berger que mon conjoint et moi avons adopté à l’âge
        présumé de 11 mois. Il a été retrouvé errant avec d’être récupéré par la SPA de
        Brignais. Une personne l’a adopté mais ne l’a pas gardé et il a de nouveau
        séjourné au refuge. Nous l’avons choisi pour être notre compagnon de vie, et ce
        malgré son passé compliqué, nous étions conscients qu’une aide extérieure nous
        permettrait de lui procurer la vie qu’il mérite.<br><br>
        Draco est un jeune chien plein d&#39;énergie ayant connu très peu de choses au cours
        de ses quelques mois de vie. Très rapidement il a rencontré des problèmes de
        réactivité et avait du mal à s’adapter à l’environnement extérieur. Nous avions
        contacté une comportementaliste canine qui nous a laissé inquiets et démunis
        face à ce que nous espérions.<br><br>
        C’est au cours d’une balade avec Draco que nous avons rencontré Elodie, elle
        nous a tout de suite rassurée et proposé son aide. Dès le début, elle a permis de
        mieux comprendre le comportement de notre chien., et nous a prodigué de
        précieux conseils.<br><br>
        Grâce à son accompagnement, un programme de rééducation personnalisé a
        été mise en place, nous avons découverts l’importance de la patience et de la
        cohérence. Nous avons travaillé sur l’instinct de prédation, mais également sur
        l’auto-contrôle, l’anxiété de séparation, la marche en laisse, les règles de vie au
        sein du foyer et tant d’autres conseils !<br><br>
        En appliquant séance après séance tous les conseils, nous avons vu de réels
        progrès ! Draco est devenu beaucoup plus calme et stable, ce qui lui a permis de
        s’ouvrir à l’environnement extérieur et de pouvoir passer des balades agréables. Il
        adore maintenant sentir les odeurs, jouer avec nous dehors, et il se fait de plus en
        plus d&#39;amis congénères et humains.<br><br>
        Cela nous a demandé beaucoup d&#39;investissement personnel et de temps, grâce à
        l&#39;aide d&#39;Elodie, nous avons enfin pu donner à Draco toute l’écoute dont il avait
        besoin pour être compris et enfin s&#39;épanouir. Nous sommes tellement fiers de tout
        le chemin parcouru et du travail accompli, jamais nous n’aurions pu imaginer
        avoir autant de changements! Nous sommes extrêmement reconnaissants de
        l’aide et l’accompagnent d’Elodie, nous ne nous pourrons jamais assez la
        remercier pour tout ce qu’elle nous a apporté.<br><br> Mille mercis !
      </v-col>
      <!-- Image à droite -->
      <v-col cols="12" md="6" class="d-flex flex-column  align-center">
        <h2>Alex et Draco - 2025</h2>
        <v-img
          src="/images/DRACO_Retour.jpg"
          alt="Éducation canine"
          height="500"
          width="350"
          class="rounded-image"
          contain
        ></v-img>
      </v-col>
    </v-row>

    <v-row align="center" justify="space-between" class="flex-wrap">

      <!-- texte à gauche -->
      <v-col cols="12" md="6" class="text-center">
        <h2>Jessica - 2024</h2>
        <br>
        <h2>Nicole et Taylor - 2024</h2>
        <br>
        <h2>Nicolas et Ulya - 2023</h2>
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
