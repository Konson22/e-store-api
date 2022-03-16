const database = require('nedb');

const users = new database('./databases/users.db');
const adverts = new database('./databases/adverts.db');
users.loadDatabase();
adverts.loadDatabase();


module.exports = {users, adverts}

// adverts.insert([{
//     name:'Progress X4',
//     category:'Car',
//     description:'Brand New car for sale at affordable price hurry up and buy it for upcoming celibration',
//     images:['http://localhost:3001/images/car (1).jpg'],
//     owner:{
//         name:'',
//         email:'test@gmail.com',
//         phone:'+211920079070',
//         state:'Juba',
//         location:''
//     }
// },
// {
//     name:'Actros',
//     category:'Electronic',
//     description:'Brand New car for sale at affordable price hurry up and buy it for upcoming celibration',
//     images:['http://localhost:3001/images/car (3).jpg'],
//     owner:{
//         name:'',
//         email:'test@gmail.com',
//         phone:'+211920079070',
//         state:'Juba',
//         location:''
//     }
// },
// {
//     name:'Hilux 2020',
//     category:'Car',
//     description:'Brand New car for sale at affordable price hurry up and buy it for upcoming celibration',
//     images:['http://localhost:3001/images/car (1).jpg'],
//     owner:{
//         name:'',
//         email:'test@gmail.com',
//         phone:'+211920079070',
//         state:'Juba',
//         location:''
//     }
// },
// {
//     name:'Land Cruzer',
//     category:'Electronic',
//     description:'Brand New car for sale at affordable price hurry up and buy it for upcoming celibration',
//     images:['http://localhost:3001/images/car (4).jpg'],
//     owner:{
//         name:'',
//         email:'test@gmail.com',
//         phone:'+211920079070',
//         state:'Juba',
//         location:''
//     }
// }])