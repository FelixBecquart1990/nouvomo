<template>
  <v-app class="info">

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    //this.$store.dispatch("fetchIdeas");
  }
};
</script>

<style>
* {
  font-family: mainFont;
  /*color:#7B8790*/
}
**,
*:active,
*:focus {
  user-select: none;
  outline: none;
  text-decoration: none;
}

@font-face {
  font-family: mainFont;
  src: url("./assets/gothamrnd-medium.ttf");
}

.opacity {
  opacity: 0.3;
}
.pointer {
  cursor: pointer;
}
.table {
  width: 1000px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 3px 20px -4px hsla(206, 9%, 52%, 0.45);
}
.card-modal {
  border-radius: 10px;
  background-color: #fff;
}

.loading {
  background-image: url(./assets/walking.gif);
  background-position: center;
  background-size: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: white;
  transform: rotateY(180deg);
}
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .1s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
