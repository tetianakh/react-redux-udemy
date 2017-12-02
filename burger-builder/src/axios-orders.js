import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-burger.firebaseio.com/'

})

export default instance;
