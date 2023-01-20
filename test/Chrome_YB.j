const { Builder, By, Key, Actions } = require("selenium-webdriver");
var should = require("chai").should();

//main browser
var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
var options = new chrome.Options();
    
options.addArguments("--user-data-dir=/Users/yaroslavbilozir/Library/Application Support/Google/Chrome");


describe("MM Login", function () {

    //it block 
    it("successfully loged in via MM", async function () {
        //launch the browser
        let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

        //navigate to uor application
        await driver.get("https://qorpo.world/qorpo-id/login");

        await driver.sleep(3000);

        //driver.manage().window().maximize();

        // await driver.findElement(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-login/div/div/div/div[1]/p')).click();
        // await driver.sleep(5000);
        //Store the ID of the original window
const originalWindow = await driver.getWindowHandle();

//Check we don't have other windows open already
//assert((await driver.getAllWindowHandles()).length === 1);

//Click the link which opens in a new window

await driver.findElement(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-login/div/div/div/div[1]/p')).click();
await driver.sleep(5000);
//await driver.findElement(By.linkText('new window')).click();

//Wait for the new window or tab
// await driver.wait(
//     async () => (await driver.getAllWindowHandles()).length === 2,
//     10000
//   );

//Loop through until we find a new window handle
const windows = await driver.getAllWindowHandles();
windows.forEach(async handle => {
  if (handle !== originalWindow) {
    await driver.switchTo().window(handle);
  }
});

//Wait for the new tab to finish loading content
//await driver.wait(until.titleIs('Selenium documentation'), 10000);
  



         await driver.sleep(3000);

         await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys('985630Joker');
        //await alert.sendKeys('985630Joker');
        await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div/button')).click();

        //await driver.findElement(By.xpath('//*[@id="email"]')).sendKeys('yaroslav.bilozir+'+ counter +'@qorpo.co');

        //await driver.findElement(By.xpath('//*[@id="password-label"]')).sendKeys('985630Joker');

        //await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys('985630Joker');

        //await driver.findElement(By.xpath('//*[@id="confirm-password"]')).sendKeys('985630Joker');
        await driver.sleep(3000);
        //banner
        await driver.findElement(By.xpath('//*[@id="app-content"]/div/div[2]/div/div[4]/button[2]')).click();

        //await driver.findElement(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-register/div/div/div/form/div[5]/div/div')).click();

        

        //await driver.findElement(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-register/div/div/div/form/button')).click();

        //await driver.quit();


    });

});