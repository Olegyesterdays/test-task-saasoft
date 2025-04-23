<script setup lang="ts">
import Header from '@/components/header.vue'
// import FormAccount from '@/components/form-account.vue'
import Footer from '@/components/footer.vue'

import Table from './components/table-1/table.vue';
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <Table />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped lang="scss">
</style>
