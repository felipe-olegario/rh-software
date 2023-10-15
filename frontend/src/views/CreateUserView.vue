<template>
  <v-app>
    <default-bar />
    <Home/>
    <CreateUser/>
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from '../layouts/default/AppBar.vue'
  import Home from './Home.vue'
import CreateUser from '@/components/CreateUser.vue';
</script>
