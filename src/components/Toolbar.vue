<template>
  <div class="info">
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-toolbar flat class="transparent" height="64" @click="$router.push({name:'profile'})" style="cursor:pointer">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="../assets/profile.svg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="secondary--text">Profil</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
              <v-divider></v-divider>

      <v-list class="pt-0" dense>


        <v-list-tile class="my-2" @click="$router.push('/')">
          <v-list-tile-action>
            <v-icon color="secondary">stars</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="secondary--text">Trouver/proposer un mot</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="my-2" @click="$router.push({name:'wordsToTranslate'})">
          <v-list-tile-action>
            <v-icon color="secondary">translate</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="secondary--text">Mots à traduire</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="my-2" @click="$router.push({name:'ideas'})">
          <v-list-tile-action>
            <v-icon color="secondary" style="transform:rotate(180deg)">wb_incandescent</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="secondary--text">Une idée d'amélioration ?</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!--v-list-tile class="my-2" @click="$router.push({name:'ideas'})">
          <v-list-tile-action>
            <v-icon color="secondary">add_to_home_screen</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="secondary--text">Ajouter en raccourci</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile-->

      </v-list>

    </v-navigation-drawer>

    <v-toolbar
    height="64"
      class="elevation-0"
      style="border-bottom:solid 1px rgba(0,0,0,0.07);background-color:white"
    >
      <v-toolbar-side-icon color="secondary--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
     
      <v-toolbar-title @click="$router.push('/')" class="primary--text" style="font-weight:bold; cursor:pointer" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar>
      <img
        src="../assets/logo.svg"
        alt="logo"
      >
      </v-avatar>
    </v-toolbar>

    <snackbar/>    
    <AddToHomeScreen/>


  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      drawer: false,
      title: "nouvomo"
    };
  },
  components: {
    Snackbar: () => import("@/components/Snackbar"),
    AddToHomeScreen: () => import("@/components/AddToHomeScreen")
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {}
};
</script>

<style>
</style>
