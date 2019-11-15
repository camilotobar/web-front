<template>
  <v-app>
    <div>
    <v-app-bar
      class="navbar blue lighten-1"
      dark
    >
      <v-app-bar-nav-icon v-if="this.$store.state.user.login"></v-app-bar-nav-icon>
      <v-toolbar-title>LearnU</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
      <router-view></router-view>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>
*, body{
  margin:0;
  padding:0;
}
.navbar{
  width:100%;
}
</style>