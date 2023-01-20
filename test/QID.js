const { Builder, By, Key, Actions, until } = require("selenium-webdriver");
const { elementLocated } = require("selenium-webdriver/lib/until");
var should = require("chai").should();


//var chrome = require("selenium-webdriver/chrome");



//describe block 
describe("Login and accept coockies", function () {

    //it block 
    it("successfully Logged in and accepted coockies", async function () {
        //launch the browser
        let driver = await new Builder().forBrowser("chrome").build();



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

        //Get started banner
        //await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-dashboard/app-init-modal/div/div[2]/div[2]/button')), 10000)
            //.click();

        await driver.sleep(3000);

        await driver.quit();

    });



     it("Transfer nft and IOI", async function () {
        //launch the browser
        let driver = await new Builder().forBrowser("chrome").build();



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


        //await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-dashboard/app-init-modal/div/div[2]/div[2]/button')), 10000)
          //  .click();


        await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[1]/div/div[1]/div/div/div[4]/p')))
            .click();

        //Transfer first from list asset
        //Click on first NFT
        await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-manage/div/div[3]/div[2]/div[2]')), 10000).click();

         //Click on secound NFT
         //await driver.wait(until.elementLocated(By.xpath('//*[@id="qid"]/div[3]/app-asset-card/div/div[2]')), 10000).click();

        //Click on transfer
        await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-manage/div[2]/div/app-card-detail/div/div/div/div[2]/div/div[3]/div[2]/button[2]/p')), 10000).click();;

        //Click to market
        await driver.findElement(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-manage/div[2]/div/app-card-detail/div/div[2]/div/div[2]/button[4]/p')).click();

        await driver.findElement(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-manage/app-confirm-transfer-modal/div/div[2]/form/div/input')).sendKeys('1');

        await driver.findElement(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-manage/app-confirm-transfer-modal/div/div[2]/div/button[2]')).click();

        await driver.sleep(3000);


        //Transfer IOI
        await driver.wait(until.elementLocated(By.xpath('//*[@id="ioi"]/div[2]/p')), 10000).click();

        //Click on transfer
        await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-manage/div[2]/div/app-balance-detail/div/div/div/div/div/div[2]/div/button/p')), 10000).click();;

        //Click to market
        await driver.findElement(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-manage/div[2]/div/app-balance-detail/div/div[2]/div/div[2]/button[4]/p')).click();

        await driver.findElement(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-manage/app-confirm-transfer-modal/div/div[2]/form/div/input')).sendKeys('1000');

        await driver.findElement(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-manage/app-confirm-transfer-modal/div/div[2]/div/button[2]')).click();

        await driver.sleep(3000);

        await driver.quit();

    });


    it("Checking Social Links", async function () {
        //launch the browser
        let driver = await new Builder().forBrowser("chrome").build();

        let linltrTwitter = 'https://linktr.ee/qorpotwitters'
        let linktrTelegram = 'https://linktr.ee/qorpotelegram'
        let linktrInstagram = 'https://linktr.ee/QORPOInstagrams'
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


        //await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[2]/div/app-dashboard/app-init-modal/div/div[2]/div[2]/button')), 10000)
          //  .click();

        await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-site-layout/div[4]/app-qorpo-id-layout/div[1]/div/div[1]/div/div/div[1]/p')), 10000)
            .click();

        await driver.wait(until.elementLocated(By.css('body > app-root > app-site-layout > div.project-content > app-qorpo-id-layout > div.main-content > div > app-dashboard > div > div.lower-content > div.socials > div > svg:nth-child(1)')), 10000)
            .click();




        async function myFn(testUrl) {

            const originalWindow = await driver.getWindowHandle();

            const windows = await driver.getAllWindowHandles();

            windows.forEach(async handle => {
                if (handle !== originalWindow) {
                    await driver.switchTo().window(handle);
                }
            });

            let getTitle = await driver.getTitle();

            let checkedUrl = await driver.getCurrentUrl();

            checkedUrl.should.equal(testUrl);

            console.log(checkedUrl);

            await driver.close();

            await driver.switchTo().window(originalWindow);


        }

       await myFn(linltrTwitter);

        //await driver.sleep(3000);


        await driver.wait(until.elementLocated(By.css('body > app-root > app-site-layout > div.project-content > app-qorpo-id-layout > div.main-content > div > app-dashboard > div > div.lower-content > div.socials > div > svg:nth-child(2)')), 10000)
            .click();

           await myFn(linktrTelegram);

        await driver.wait(until.elementLocated(By.css('body > app-root > app-site-layout > div.project-content > app-qorpo-id-layout > div.main-content > div > app-dashboard > div > div.lower-content > div.socials > div > svg:nth-child(3)')), 10000)
            .click();

            await myFn(linktrInstagram);

            await driver.wait(until.elementLocated(By.css('body > app-root > app-site-layout > div.project-content > app-qorpo-id-layout > div.main-content > div > app-dashboard > div > div.lower-content > div.socials > div > svg:nth-child(4)')), 10000)
            .click();

            const originalWindow = await driver.getWindowHandle();

            const windows = await driver.getAllWindowHandles();

            windows.forEach(async handle => {
                if (handle !== originalWindow) {
                    await driver.switchTo().window(handle);
                }
            });

            await driver.wait(until.elementLocated(By.css('#yDmH0d > c-wiz > div > div > div > div.NIoIEf > div.G4njw > div.qqtRac > div.VtwTSb > form:nth-child(3) > div > div > button > span')), 10000).click();

            let getTitle = await driver.getTitle();

            await driver.close();

            await driver.switchTo().window(originalWindow);



            await driver.wait(until.elementLocated(By.css('body > app-root > app-site-layout > div.project-content > app-qorpo-id-layout > div.main-content > div > app-dashboard > div > div.lower-content > div.socials > div > svg:nth-child(4)')), 10000)
            .click();
                                                                    
            await myFn(linkYoutube);

            await driver.wait(until.elementLocated(By.css('body > app-root > app-site-layout > div.project-content > app-qorpo-id-layout > div.main-content > div > app-dashboard > div > div.lower-content > div.socials > div > svg:nth-child(5)')), 10000)
            .click();

            await myFn(linkDiscord);

            await driver.wait(until.elementLocated(By.css('body > app-root > app-site-layout > div.project-content > app-qorpo-id-layout > div.main-content > div > app-dashboard > div > div.lower-content > div.socials > div > svg:nth-child(6)')), 10000)
            .click();

            await myFn(linkTwitch);



            await driver.quit();

            




    });



});







