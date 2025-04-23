<script setup lang="ts">
import {ref} from 'vue'

const items = ref<string[]>(['ru', 'en', 'ch', 'de'])
</script>

<template>
  <v-container>
    <v-select :items="items" density="compact" v-model="items[0]"></v-select>
  </v-container>
</template>

<style scoped lang="scss"></style>
