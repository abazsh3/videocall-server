const axios =require('axios');

const instance = axios.create({
    baseURL: 'https://react-burger-builder-c43ef.firebaseio.com/'
});

module.exports=instance;
