const puppeteer = require('puppeteer');

(async () => {
  try{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const result = await page.goto('http://localhost:3000/');

    const patners = await page.evaluate(() => {
      Array.from().map(item => ({
        title:item.querySelector('.elips-text').innerHTML.trim()
      }))
    })
    console.log(patners)
    await browser.close();
  }catch(err){
    console.log(err)
  }
})();