const { Builder, By, Key, Actions, until } = require("selenium-webdriver");
var should = require("chai").should();


var webdriver = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
const { elementLocated } = require("selenium-webdriver/lib/until");
var options = new chrome.Options();

options.addArguments("--user-data-dir=/Users/yaroslavbilozir/Library/Application Support/Google/Chrome");




describe("Login and accept coockies", function () {


    it("successfully Logged in and accepted coockies", async function () {
        //launch the browser
        let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

        await driver.get("https://qorpo.world/qorpo-id/login");



        driver.manage().window().maximize();
    //wallet
        await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[1]/div/div[1]/div/div/div[3]/p'))).click();
    await driver.sleep(5000);

    //Deposit by MM matic
    await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-wallet/div/div[1]/div[2]/div/div[4]/div[3]/button[2]/img'))).click();
    
    
    
    
    
    
    
    //await driver.quit();
    
    });



});