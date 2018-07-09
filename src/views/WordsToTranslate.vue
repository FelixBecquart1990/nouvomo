<template>
<div>
  <toolbar/>
  <v-container fill-height fluid style="border-bottom:solid 1px rgba(0,0,0,0.07); background-color:white; min-height:100px">
      <v-layout column align-center justify-center>
        <v-flex style="width:100%;">
          <h2  class="secondary--text" style="font-weight:normal;text-align:center" :class="{'text-xs-left':$vuetify.breakpoint.xsOnly}">Proposez vos propres traductions</h2>
        </v-flex>
        <v-flex style="width:100%;">
          <h3 class="secondary--text" style="font-weight:normal;text-align:center" :class="{'text-xs-left':$vuetify.breakpoint.xsOnly}">Il reste <span class="primary--text">{{1298 + wordsToTranslate.length}} mots</span> à traduire</h3>
        </v-flex>
      </v-layout>
  </v-container>

  <v-container fluid style="padding:8px" v-if="wordsToTranslate.length>0">
    <v-layout align-center justify-center>
        <v-card class="table">
    <v-list two-line>
    <template v-for="(word, index) in wordsToTranslate" >
      <transition name="slide-fade" :key="index">
        <v-list-tile  @click="openModal(word, index)">
          <v-list-tile-content>
            <div style="color:#7B8790;">
              {{word.word}}
            </div>
          </v-list-tile-content>
        </v-list-tile>
      </transition>
    </template>
    </v-list>
    </v-card>
    </v-layout>
  </v-container>

    <v-dialog v-model="modalTranslateWord" max-width="290">
    <v-card class="card-modal" height="255">
      <v-card-title class="headline secondary--text">
        Traduction
      </v-card-title>
      <v-card-text>
          <h3 class="secondary--text" style="font-weight:normal">Notez votre traduction pour le mot "<span class="primary--text">{{word}}</span>"</h3>
        <v-text-field single-line v-model="newTranslation" prepend-icon="translate" label="votre traduction" type="text"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <transition name="fade">
          <v-chip v-if="newTranslation.length>0" color="primary" text-color="white" style="width:105px;text-align:center;margin-right:10px;margin-top:-20px" class="pointer" @click="addNewTranslation()">
            <span class="pointer" style="text-align:center;width:80px;">Ajouter</span>
          </v-chip>
        </transition>
        </v-card-actions>
      </v-card>
    </v-dialog>

  <snackbar/>

</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      modalTranslateWord: false,
      newTranslation: "",
      word:"",
      index: null
    };
  },
  components: {
    Toolbar: () => import("@/components/Toolbar"),
    Snackbar: () => import("@/components/Snackbar")
  },
  computed: {
    ...mapState(["wordsToTranslate"])
  },
  methods: {
    openModal(word, index) {
      this.word = word.word;
      this.index = index
      this.modalTranslateWord = true;
    },
    addNewTranslation() {
      if (this.newTranslation) {
        this.$store.commit("SET_DELETE_WORD", this.index);
        this.$store.commit(
          "SET_SNACKBAR",
          "Félicitation, votre nouvomo vient d'être ajouté"
        );
        this.newTranslation = "";
      }
      this.modalTranslateWord = false;
    }
  }
};
</script>

<style scoped>
</style>
