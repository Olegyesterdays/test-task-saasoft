<script setup lang="ts">
import { defineModel } from 'vue';

const modelValue = defineModel<'Локальная' | 'LDAP'>();
</script>

<template>
  <select v-model="modelValue" style="border: 2px solid #000; width: 100%">
    <option value="Локальная">Локальная</option>
    <option value="LDAP">LDAP</option>
  </select>
</template>

<style scoped lang="scss"></style>
