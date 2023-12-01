import { defineStore } from 'pinia';
import { resetRouter } from '@/router';
import store from '@/store';

import { useStorage } from '@vueuse/core';

export const useUserStore = defineStore('user', () => {
  const user = {
    roles: ['ADMIN'],
    perms: ['sys:user:edit', 'sys:user:add', 'sys:user:del'],
  };

  const token = useStorage('accessToken', '');

  // remove token
  function resetToken() {
    return new Promise<void>((resolve) => {
      token.value = '';
      resetRouter();
      resolve();
    });
  }

  return {
    token,
    user,
    resetToken,
  };
});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}
