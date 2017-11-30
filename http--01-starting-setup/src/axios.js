import axios from 'axios';


// can create multiple instances in different part of the application
// they are independent from each other and from the global axios instance
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'


export default instance;
