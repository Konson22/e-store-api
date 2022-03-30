// const puppeteer = require('puppeteer');

// (async () => {
//   try{
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     const result = await page.goto('https://fakestoreapi.com/products');

//     const patners = await page.evaluate(() => {
//       Array.from(document.querySelectorAll('.nam')).map(item => ({
//         title:item.title
//       }))
//     })
//     await page.screenshot({ path: 'e-store247.herokuapp.com' });
//     console.log(patners)
//     await browser.close();
//   }catch(err){
//     console.log(err)
//   }
// })();