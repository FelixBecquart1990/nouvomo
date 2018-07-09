<template>
<div>
  <toolbar/>
  <v-container fill-height fluid style="border-bottom:solid 1px rgba(0,0,0,0.07); background-color:white; min-height:100px">
      <v-layout column align-center justify-center>
        <v-flex>
          <h2  class="secondary--text" style="font-weight:normal;">
            <span slot="activator" class="primary--text">Trouvez</span>
             ou 
            <span slot="activator" class="primary--text">proposez</span>
             une altérnative à un anglicisme 
          </h2>
        </v-flex>
      </v-layout>
  </v-container>

  <v-container fluid style="padding:8px">
        <v-layout align-center justify-center>
        <v-card class="table">
          
        <v-list two-line>

            <v-list-tile @click="">
              <v-text-field
            label="Chercher"
            append-icon="search"
            v-model.trim="newWord"
            single-line
            class="search-input"
          ></v-text-field>
              <!--v-list-tile-content style="max-width:calc(100vw - 180px)">
                  <v-text-field
                    id="inputWord"
                    style="width:160px;"
                    label="Mot à traduire"
                    single-line
                    v-model.trim="newWord"
                  ></v-text-field>
                <v-list-tile-sub-title  class="secondary--text"></v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-content style="max-width:120px;position:absolute; right:5px">


            <v-tooltip top>
              <transition name="fade" slot="activator">
              <v-chip  v-if="uniqueWord() && newWord.length>0" color="primary" text-color="white" style="width:105px;" class="pointer" @click.native.stop="modalAddWord = true">
               Chercher
              <v-icon right style="margin-left:5px">search</v-icon>
            </v-chip>
              </transition>
              <span>Félicitation, ce mot n'a pas encore été ajouté. Ajoutez-le !</span>
            </v-tooltip>

              </v-list-tile-content-->
            </v-list-tile>


          <template v-for="(word, index) in filteredWords" >
            <transition name="slide-fade" :key="index">
            <v-list-tile @click="wordSelected = word, newWord = word.word" v-if="newWord.length>0 && newWord != word.word">
              <v-list-tile-content>
                <div>
                  <div style="color:#7B8790;" :class="{'primary--text':word.userUid == user.currentUser.uid}">
                    {{word.word}}
                  </div>
                </div>

              </v-list-tile-content>

            </v-list-tile>
            </transition>
          </template>
        </v-list>

        </v-card>
        </v-layout>
  </v-container>

  <v-container fluid style="padding:8px" v-if="wordSelected">
    <v-layout align-center justify-center>
        <v-card class="table">
          <p style="padding:30px 15px 0px;" class="primary--text">Traductions :</p>

    <v-list two-line>
    <template v-for="(word, index) in wordSelected.translations" >
      <transition name="slide-fade" :key="index">
        <v-list-tile>
              <v-list-tile-content>
                <div>
                  <div style="color:#7B8790;" :class="{'primary--text':word.userUid == user.currentUser.uid}">
                    {{word.translation}}
                    <v-tooltip top>
                      <div slot="activator" style="margin-bottom:3px;display:inline-block;height:18px;width:18px" :class="{ 'termium': word.source == 'termium','nouvomo': word.source == 'nouvomo' }"></div>
                      <span v-if="word.source == 'termium'">Source : TERMIUM (Canada)</span>
                      <span v-if="word.source == 'nouvomo'">"{{word.translation}}" est une création labélisée nouvomo !</span>
                    </v-tooltip>
                  </div>
                </div>
              </v-list-tile-content>

        </v-list-tile>
      </transition>
    </template>
    </v-list>
    </v-card>
    </v-layout>
  </v-container>

    <v-container fluid style="padding:8px" v-if="wordSelected">
    <v-layout align-center justify-center>
        <v-card class="table">
    <template>
      <div style="padding:20px 15px;">
        <p class="primary--text">Définition :</p>
        <p class="secondary--text">{{wordSelected.definition}}</p>
      </div>
    </template>
    </v-card>
    </v-layout>
  </v-container>

    <v-tooltip left>
      <v-fab-transition slot="activator">
     <v-btn
        @click="$router.push({name:'wordsToTranslate'})"
        color="primary"
        dark
        fab
        fixed
        bottom
        right
        v-if="newWord.length == 0"
      >
        <v-icon>translate</v-icon>
      </v-btn>
      </v-fab-transition>
    <span>935 mots n'ont pas encore de traduction</span>
  </v-tooltip>


      <v-dialog v-model="modalWord" hide-overlay max-width="290">
    <v-card class="card-modal">
      <v-card-title class="headline secondary--text">
        {{word}}
      </v-card-title>
      <v-card-text class="secondary--text" style="margin-top:-15px">
        {{context}}
      </v-card-text>
      </v-card>
    </v-dialog>

    <snackbar/>

</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      modalWord: false,
      word: "",
      wordSelected: null,
      context: "",
      newWord: "",
      newContext: "",
      modalAddWord: false
    };
  },
  components: {
    Snackbar: () => import("@/components/Snackbar"),
    Toolbar: () => import("@/components/Toolbar")
  },
  computed: {
    ...mapState(["words", "user"]),
    /*user(){
      console.log(this.$store.state.user)
      return this.$store.state.user
    },*/
    filteredWords() {
      return this.words.filter(word => {
        return word.word.toLowerCase().includes(this.newWord.toLowerCase());
      });
    }
  },
  methods: {
    openModal(word) {
      this.word = word.word;
      this.context = word.context;
      this.modalWord = true;
    },
    uniqueWord() {
      if (this.filteredWords.length == 0) {
        return true;
      } else {
        for (let i = 0, len = this.filteredWords.length; i < len; i++) {
          return (
            this.filteredWords[i].word.toLowerCase() !=
            this.newWord.toLowerCase()
          );
        }
      }
    },
    find(index, type) {
      return this.filteredWords[index][type];
    },
    addNewWord() {
      if (this.newWord) {
        this.$store.commit("SET_ADD_NEW_WORD", {
          word: this.newWord,
          context: this.newContext,
          learners: [this.user.currentUser.uid],
          knowers: [],
          skippers: [],
          userUid: this.user.currentUser.uid
        });
        this.$store.commit(
          "SET_SNACKBAR",
          "Félicitation, votre nouvomo vient d'être ajouté"
        );
        this.newWord = "";
        this.newContext = "";
      }
      this.modalAddWord = false;
    }
  }
};
</script>

<style scoped>
.termium{
  background-image: url("../assets/leaf.png");
  background-size: 18px 18px;
}
.nouvomo{
  background-image: url("../assets/nouvomo.png");
  background-size: 18px 18px;
}

</style>
