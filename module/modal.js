const database = require('nedb');

const users = new database('./database/users.db');
const adverts = new database('./database/adverts.db');
const jobs = new database('./database/jobs.db');
users.loadDatabase();
jobs.loadDatabase();
adverts.loadDatabase();


module.exports = {users, adverts, jobs}


// jobs.insert([
//     {
//         employerId:1,
//         post_by:'UNICEF',
//         position:'Ware House Assistance',
//         position_num:3,
//         post_date:'12/01/2022',
//         deadline:'05/02/2022',
//         location:'Juba',
//         description:'',
//     },
//     {
//         employerId:2,
//         post_by:'ICRC',
//         position:'Mechanic',
//         position_num:1,
//         post_date:'12/01/2022',
//         deadline:'05/02/2022',
//         location:'Juba',
//         description:'',
//     },
//     {
//         employerId:3,
//         post_by:'UNHR',
//         position:'Ware House Manager',
//         position_num:3,
//         post_date:'12/01/2022',
//         deadline:'05/02/2022',
//         location:'Yei River',
//         description:'',
//     },
//     {
//         employerId:4,
//         post_by:'ACTED',
//         position:'Driver',
//         position_num:5,
//         post_date:'12/01/2022',
//         deadline:'25/02/2022',
//         location:'Wau',
//         description:'',
//     },
//     {
//         employerId:1,
//         post_by:'UNICEF',
//         position:'Ware House Assistance',
//         position_num:3,
//         post_date:'12/01/2022',
//         deadline:'05/02/2022',
//         location:'Juba',
//         description:'',
//     },
//     {
//         employerId:2,
//         post_by:'ICRC',
//         position:'Mechanic',
//         position_num:1,
//         post_date:'12/01/2022',
//         deadline:'05/02/2022',
//         location:'Juba',
//         description:'',
//     },
//     {
//         employerId:3,
//         post_by:'UNHR',
//         position:'Ware House Manager',
//         position_num:3,
//         post_date:'12/01/2022',
//         deadline:'05/02/2022',
//         location:'Yei River',
//         description:'',
//     },
//     {
//         employerId:4,
//         post_by:'ACTED',
//         position:'Driver',
//         position_num:5,
//         post_date:'12/01/2022',
//         deadline:'25/02/2022',
//         location:'Wau',
//         description:'',
//     },
// ])

// adverts.insert([
//     {
//         item_name:'WD 2TB Elements Portable External Hard Drive - USB 3.0',
//         category:'electronics',
//         item_status:'New',
//         description:`USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system`,
//         price:'50',
//         currancy:'USD',
//         image:'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
//         owner_name:'Kon Akech Kon',
//         email:'konsonak@gmail.com',
//         phone:'',
//         owner_id:'gwpuZnvCFkD3ipZk'
//     },
//     {
//         item_name:`John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet`,
//         category:'jewelery',
//         item_status:'New',
//         description:`From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.`,
//         price:'140',
//         currancy:'USD',
//         image:'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
//         owner_name:'Kon Akech Kon',
//         email:'konsonak@gmail.com',
//         phone:'',
//         owner_id:'gwpuZnvCFkD3ipZk'
//     }
// ])