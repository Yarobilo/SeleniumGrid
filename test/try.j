const { Builder, By, Key, Actions } = require("selenium-webdriver");
//const { Options } = require("selenium-webdriver/chrome");
var should = require("chai").should();

// var webdriver = require("selenium-webdriver");
// var chrome = require("selenium-webdriver/chrome");
// var options = new chrome.Options();
    
// options.addArguments("--user-data-dir=/Users/yaroslavbilozir/Library/Application Support/Google/Chrome");
    
//options.addArguments("profile-directory=Profile 1");
//describe block 
describe("Login and accept coockies", function () {

    // //it block 
    // it("successfully Logged in and accepted coockies", async function () {
    //     //launch the browser
    //     let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

    //     //driver.manage().window().maximize();

    //     await driver.get("https://qorpo.world/qorpo-id/login");
        
    //     //const actions = driver.actions({async: true});
    //    // const mouse = actions.mouse();

    //     //navigate to uor application
    //     //await driver.get("https://jqueryui.com/droppable/");

    //    //let source = driver.findElement(By.xpath('//*[@id="draggable"]/p'));
    //     //let target = driver.findElement(By.xpath('//*[@id="droppable"]'));


    //     //Actions.dragAndDrop(source, target);



    it("Checking Social Links", async function () {
        //launch the browser
        let driver = await new Builder().forBrowser("chrome").build();

        let linltrTwitter = 'https://linktr.ee/qorpotwitters'
        let linktrTelegram = 'https://linktr.ee/qorpotelegram'
        let linktrInstagram = 'https://linktr.ee/qorpotelegram'        
        let linkYoutube = 'https://www.youtube.com/@QORPOGameStudio'
        let linkDiscord = 'https://discord.com/invite/qorpogamestudio'
        let linkTwitch = 'https://www.twitch.tv/qorpogamestudio'



        driver.manage().window().maximize();

        await driver.get("https://qorpo.world/qorpo-id/login");

        await driver.findElement(By.xpath('//*[@id="cookiefirst-root"]/div/div/div[2]/div[2]/div[2]/div[1]/button/span')).click();

        console.log('Coockies accepted');

        //Log in
        await driver.findElement(By.xpath("/html/body/app-root/app-site-layout/div[4]/app-login/div/div/div/div[2]")).click();

        await driver.findElement(By.xpath('//*[@id="email"]')).sendKeys('yaroslav.bilozir@qorpo.co');

        await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys('985630Joker');

        await driver.findElement(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-login/div/div/div/form/button')).click();

        console.log('Login OK');


        await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-dashboard/app-init-modal/div/div[2]/div[2]/button')),10000)
        .click();

await driver.findElement(By.xpath('body > app-root > app-site-layout > div.project-content > app-qorpo-id-layout > div.main-content > div > app-dashboard > div > div.lower-content > div.socials > div > svg:nth-child(1)')).click();





        await driver.sleep(5000);

        await driver.quit();

    });

});