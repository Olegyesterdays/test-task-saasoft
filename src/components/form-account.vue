<template>
  <div class="account-grid">
    <div class="account-grid__header">
      <span>Метки</span>
      <span>Тип записи</span>
      <span>Логин</span>
      <span>Пароль</span>
      <span></span>
    </div>

    <div
      v-for="(item, index) in rows"
      :key="index"
      :class="[
        'account-grid__row',
        { 'account-grid__row--ldap': item.type === 'LDAP' }
      ]"
    >
      <input
        v-model="item.label"
        class="account-grid__input"
        :maxlength="50"
        placeholder="Метка"
      />

      <select v-model="item.type" class="account-grid__select">
        <option value="Локальная">Локальная</option>
        <option value="LDAP">LDAP</option>
      </select>

      <input
        v-model="item.login"
        class="account-grid__input"
        :maxlength="100"
        required
        placeholder="Логин"
      />

      <div v-if="item.type === 'Локальная'" class="account-grid__password">
        <input
          :type="item.showPassword ? 'text' : 'password'"
          v-model="item.password"
          :maxlength="100"
          required
        />
        <button type="button" @click="togglePassword(index)">
          {{ item.showPassword ? '🙈' : '👁️' }}
        </button>
      </div>

      <button
        type="button"
        class="account-grid__delete"
        @click="removeRow(index)"
      >
        🗑️
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';

interface Row {
  label: string;
  type: 'Локальная' | 'LDAP';
  login: string;
  password: string | null;
  showPassword: boolean;
}

const rows = reactive<Row[]>([
  { label: '', type: 'Локальная', login: '', password: '', showPassword: false },
  { label: '', type: 'Локальная', login: '', password: '', showPassword: false },
  { label: '', type: 'Локальная', login: '', password: '', showPassword: false },
  { label: '', type: 'Локальная', login: '', password: '', showPassword: false },
  { label: '', type: 'Локальная', login: '', password: '', showPassword: false },
  { label: '', type: 'Локальная', login: '', password: '', showPassword: false },
]);

function togglePassword(index: number) {
  rows[index].showPassword = !rows[index].showPassword;
}

function removeRow(index: number) {
  rows.splice(index, 1);
}

// При смене типа на LDAP — обнуляем пароль
watch(
  () => rows.map(r => r.type),
  () => {
    rows.forEach(r => {
      if (r.type === 'LDAP') {
        r.password = null;
        r.showPassword = false;
      } else if (r.password === null) {
        r.password = '';
      }
    });
  },
  { deep: true }
);
</script>

<style scoped lang="scss">
.account-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &__header {
    display: grid;
    grid-template-columns: 2fr 1.2fr 1.5fr 2fr 40px;
    align-items: center;
    font-weight: bold;
  }

  &__row {
    display: grid;
    grid-template-columns: 2fr 1.2fr 1.5fr 2fr 40px;
    align-items: center;
    gap: 0.5rem;

    &--ldap {
      /* при LDAP: «Логин» занимает место логина+пароля, удаляется отдельная колонка пароля */
      grid-template-columns: 2fr 1.2fr 3.5fr 40px;
    }
  }

  &__input,
  &__select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    width: 100%;
  }

  &__password {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 6px;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  &__delete {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
  }
}
</style>
