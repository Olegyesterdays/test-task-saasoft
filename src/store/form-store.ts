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
  marks?: IMark;
  recordType?: TRecord;
  login?: string;
  password?: TPassword;
}

export const useFormStore = defineStore('formStore', () => {
  const accountList = ref<IAccount[]>([
    {
      id: '1',
      marks: { text: 'marks 1' },
      recordType: 'LDAP',
      login: 'login 1',
      password: 'password 1'
    },
    {
      id: '2',
      marks: { text: 'marks 2' },
      recordType: 'LDAP',
      login: 'login 2',
      password: 'password 2'
    },
    {
      id: '3',
      marks: { text: 'marks 3' },
      recordType: 'Локальная',
      login: 'login 3',
      password: 'password 3'
    }
  ]);

  const accountInListLocalStorage = localStorage.getItem('accountList');
  if (accountInListLocalStorage) {
    try {
      const parsedData = JSON.parse(accountInListLocalStorage);
      accountList.value = parsedData;
    } catch (error) {
      console.error('Ошибка при чтении данных из localStorage:', error);
    }
  }

  watch(
    () => accountList.value,
    state => {
      try {
        localStorage.setItem('accountList', JSON.stringify(state));
      } catch (error) {
        console.error('Ошибка при сохранении данных в localStorage:', error);
      }
    },
    { deep: true }
  );

  const getAccountList = computed(() => accountList.value);

  const createAccount = (): void => {
    const newAccount: IAccount = {
      id: uuidv4(),
      marks: { text: '' },
      recordType: 'LDAP',
      login: '',
      password: null
    };
    accountList.value.push(newAccount);
  };

  const deleteAccount = (id: string): void => {
    accountList.value = accountList.value.filter(acc => acc.id !== id);
  };

  return {
    getAccountList,
    createAccount,
    deleteAccount
  };
});
