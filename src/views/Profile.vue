<template>
<div>
  <toolbar/>
  <v-container fill-height fluid style="border-bottom:solid 1px rgba(0,0,0,0.07); background-color:white; min-height:100px">
      <v-layout column align-center justify-center>
        <v-flex>
          <h2  class="secondary--text" style="font-weight:normal;text-align:center" :class="{'text-xs-left':$vuetify.breakpoint.xsOnly}">La page de profil n'a pas encore été imaginé</h2>
        </v-flex>
        <v-flex style="width:100%;">
          <h3 class="secondary--text" style="font-weight:normal;text-align:center" :class="{'text-xs-left':$vuetify.breakpoint.xsOnly}">Vous souhaitez nous aider ? <span class="primary--text pointer" @click="$router.push({name:'ideas'})">Partagez vos idées avec la communauté</span></h3>
        </v-flex>
      </v-layout>
  </v-container>

<div style="position:fixed;bottom:10px; width:100%">
<v-layout align-center>
    <v-flex xs12 text-xs-center>
      <div>
        <v-chip @click="logout" outline color="secondary"><span style="color:#7B8790">Se déconnecter</span></v-chip>
      </div>
    </v-flex>
</v-layout>
</div>
</div>
</template>

<script>
const fb = require("../firebaseConfig.js");

export default {
  name: "Profile",
  data() {
    return {};
  },
  components: {
    Toolbar: () => import("@/components/Toolbar")
  },
  methods: {
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch("clearData");
          this.$router.push("/accueil");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>
