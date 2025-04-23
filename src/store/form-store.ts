import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';

type TRecord = 'Локальная' | 'LDAP';

type TPassword = string | null;

interface IMark {
  text: string;
}

interface IAccount {
  id: string;
  marks?: IMark[];
  recordType?: TRecord;
  login?: string;
  password?: TPassword;
}

export const useFormStore = defineStore('formStore', () => {
  const accountList = ref<IAccount[]>([]);

  const accountInListLocalStorage = localStorage.getItem('accountList');

  if (accountInListLocalStorage) {
    accountList.value = JSON.parse(accountInListLocalStorage)._value;
  }

  watch(
    () => accountList,
    state => {
      localStorage.setItem('accountList', JSON.stringify(state));
    },
    { deep: true }
  );

  const getAccountList = computed(() => accountList.value)

  const createAccount = (): void => {
    const newAccount: IAccount = {
      id: uuidv4(),
      marks: [],
      recordType: 'LDAP',
      login: '',
      password: null
    };

    accountList.value.push(newAccount);
  }

  const deleteAccount = (id: string): void => {
    accountList.value = accountList.value.filter(acc => acc.id !== id);
  };

  return {
    getAccountList,
    createAccount,
    deleteAccount
  };
});
