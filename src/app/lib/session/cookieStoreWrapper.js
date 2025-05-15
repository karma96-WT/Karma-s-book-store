// lib/session/cookieStoreWrapper.js

export function createCookieStoreWrapper(cookies) {
    return {
      get: (name) => cookies.get(name)?.value,
      set: (name, value, options) => cookies.set(name, value, options),
      delete: (name) => cookies.delete(name),
    };
  }
  