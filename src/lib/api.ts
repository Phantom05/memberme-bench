import axios from 'axios';

export const getTest = (api: string) => {
  const testAddress = 'https://jsonplaceholder.typicode.com/todos/1';
  return axios(testAddress);
};
