<script setup lang="ts">
import { defineModel } from 'vue';

const modelValue = defineModel<string>();
</script>

<template>
  <input type="text" v-model="modelValue" style="border: 2px solid #000; width: 100%" />
</template>
