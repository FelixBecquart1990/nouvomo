<template>
    <div style="background-color:white;width:100vw;height:100vh">
      <div style="width:100%">



      </div>
      <div class="gif-content" @click="test">
        <img src="../assets/walking.gif" style="transform:rotateY(180deg)" alt="walking guy" class="walking-guy">
      </div>
      <div mt-4>
        <div class="button-content">
          <div class="button-create elevation-3" @click="signInAnonymously()">
            <h1 class="button-text">
              <span v-if="!loading">Prêt à traduire ?</span>
              <v-progress-circular
                v-else
                indeterminate
                color="warning"
              ></v-progress-circular>
            </h1>
          </div>
        </div>
      </div>
      <p class="voca secondary--text">avec <span class="primary--text">nouvomo</span></p>
      <!--div style="display:flex;justify-content:center">
        <v-progress-linear class="loading" :indeterminate="true"></v-progress-linear>
      </div-->
<div style="width:100%;position:fixed;top: 20px;">
<transition name="slide-fade">
      <v-layout column align-center justify-center v-if="toggle" class="text-content">
        <v-flex style="width:100%;">
          <h2  class="secondary--text" style="margin-bottom:-5px;font-weight:normal;text-align:center">{{word}}</h2>
        </v-flex>
        <v-flex style="width:100%;">
          <h2  class="secondary--text" style="margin-bottom:-5px;font-weight:normal;text-align:center">=</h2>
        </v-flex>
        <v-flex style="width:100%;">
          <h2 class="primary--text" style="margin-bottom:-5px;font-weight:normal;text-align:center">{{translation}}</h2>
        </v-flex>
      </v-layout>
</transition>
</div>
      </div>
</template>

<script>
const fb = require("../firebaseConfig.js");

export default {
  name: "Signin",
  data() {
    return {
      toggle: false,
      word: "",
      translation: "",
      sample: [
        { word: "Happy hour", translation: "Les heures heureuses" },
        { word: "Deal", translation: "Affaire" },
        { word: "Camping car", translation: "Autocaravane " },
        { word: "Dress code", translation: "Vêtement recommandé" },
        { word: "Blockbuster", translation: "Film à succès" },
        { word: "Coach", translation: "Entraîneur" }
      ]
    };
  },
  computed: {
    loading(){
      return this.$store.state.utilities.loading
    }
  },
  mounted() {
    setInterval(this.appear, 1350);
  },
  methods: {
    test(){
      console.log(this.$store.state)
    },
    signInAnonymously() {
      this.$store.commit("SET_LOADING", true);
      fb.auth
        .signInAnonymously()
        .then(cred => {
          this.$store.commit("SET_CURRENT_USER", cred.user);
          fb.usersCollection
            .doc(cred.user.uid)
            .set({
              createdOn: new Date()
            })
            .then(() => {
              this.$store.dispatch("fetchUserProfile");
              this.$router.push("/");
              this.$store.commit("SET_LOADING", false);
            })
            .catch(err => {
              console.log(err);
              this.$store.commit("SET_LOADING", false);
            });
        })
        .catch(function(error) {
          console.log(error);
          this.$store.commit("SET_LOADING", false);
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    },
    appear() {
      this.toggle = !this.toggle;
      if (this.toggle) {
        let item = this.sample[Math.floor(Math.random() * this.sample.length)];
        this.word = item.word;
        this.translation = item.translation;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card * {
  border: solid 1px red;
}
.voca {
  text-align: center;
  position: fixed;
  bottom: 15px;
  width: 100%;
}
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
.walking-guy {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
}
.gif-content {
  width: 100%;
  position: fixed;
  bottom: 120px;
}
.text-content {
  /*border:solid 2px #5EBCEE;*/
  width: 350px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 6px;
}
.card {
  margin-right: auto;
  margin-left: auto;
  position: relative;
  text-align: center;
}
.loading {
  position: fixed;
  bottom: 100px;
  width: 20%;
  border-radius: 5px;
}
.button-create {
  cursor: pointer;
  border-radius: 45px;
  background-color: #23a6d5;
  height: 50px;
  width: 230px;
  margin-right: auto;
  margin-left: auto;
}
.button-content {
  position: fixed;
  bottom: 70px;
  width: 100%;
}
.button-text {
  text-align: center;
  color: #fff;
  font-size: 20px;
  padding-top: 11px;
  width: 100%;
}
</style>
