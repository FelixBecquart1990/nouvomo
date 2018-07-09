<template>
<div>
<v-fab-transition>
     <v-btn
     v-if="notYetAddedToHomeScreen"
        @click="dialog = true"
        color="primary"
        dark
        fab
        fixed
        bottom
        left
      >
        <v-icon>add_to_home_screen</v-icon>
      </v-btn>
      </v-fab-transition>
    
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline secondary--text">Ajouter nouvomo à votre écran d'accueil</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" flat="flat" @click.native="dialog = false">plus tard...</v-btn>
          <v-btn color="secondary" flat="flat" @click.native="dialog = false" @click="addToHomeScreen()">ajouter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
  name: "AddToHomeScreen",
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    notYetAddedToHomeScreen() {
      return this.$store.getters.addToHomeScreen;
    }
  },
  methods: {
    addToHomeScreen() {
      let self = this;
      if (this.notYetAddedToHomeScreen) {
        this.notYetAddedToHomeScreen.prompt();
        this.notYetAddedToHomeScreen.userChoice.then(function(choiceResult) {
          console.log(choiceResult.outcome);
          if (choiceResult.outcome === "dismissed") {
            console.log("User cancelled installation");
          } else {
            console.log("User accepted installation");
            self.$store.dispatch("addToHomeScreen");
          }
        });
        this.$store.commit("SET_ADD_TO_HOME_SCREEN", null);
      }
    }
  }
};
</script>

<style scoped>
</style>
