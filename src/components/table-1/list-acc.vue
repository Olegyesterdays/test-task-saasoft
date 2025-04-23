<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '@store/form-store';

import InputMarks from './input-marks.vue';
import InputRecordType from './input-record-type.vue';
import InputLogin from './input-login.vue';
import InputPassword from './input-password.vue';
import ButtonDelete from './button-delete.vue';

const formStore = useFormStore();

const rows = computed(() => formStore.getAccountList || []);

const removeRow = (id: string) => {
  formStore.deleteAccount(id);
};
</script>

<template>
  <table style="width: 100%">
    <thead>
      <tr>
        <th style="text-align: left">Метки</th>
        <th style="text-align: left">Тип записи</th>
        <th style="text-align: left">Логин</th>
        <th style="text-align: left">Пароль</th>
        <th style="text-align: left"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td>
          <InputMarks v-model="row.marks.text" />
        </td>
        <td>
          <InputRecordType v-model="row.recordType" />
        </td>
        <td :colspan="row.recordType === 'Локальная' ? 2 : 1">
          <InputLogin v-model="row.login" />
        </td>
        <td v-if="row.recordType === 'LDAP'">
          <InputPassword v-model="row.password" />
        </td>
        <td>
          <ButtonDelete @remove="removeRow(row.id)" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss"></style>
