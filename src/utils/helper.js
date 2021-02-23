import SecureLS from 'secure-ls';

const ls = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: 'KvtVxeaRJu6VbuJg'
});

// local storage
export const setLocalStorage = (key, value) => ls.set(key, value);
export const getLocalStorage = (key) => ls.get(key);
export const removeLocalStorage = (key) => ls.remove(key);
export const removeAllLocalStorage = () => ls.removeAll();
export const readToken = () => getLocalStorage('token');
