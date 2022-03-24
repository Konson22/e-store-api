const database = require('nedb');

const users = new database('./databases/users.db');
const adverts = new database('./databases/adverts.db');
users.loadDatabase();
adverts.loadDatabase();


module.exports = {users, adverts}


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