<script setup lang="ts">
import { useFormStore } from '@store/form-store';

const formStore = useFormStore()
</script>

<template>
  <div style="display: flex; align-items: center">
    <h1>Учётные записи</h1>
    <button @click="formStore.createAccount" style="font-size: 64px; margin-left: 12px;">+</button>
  </div>
</template>

<style scoped lang="scss">
</style>