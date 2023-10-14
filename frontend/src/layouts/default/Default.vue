<template>
  <v-app>
    <default-bar />
    <Home/>
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import Home from '../../views/Home.vue'
  import DefaultView from './View.vue'
</script>
