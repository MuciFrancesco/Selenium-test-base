//Selenium library 
const { Builder, By, Key } = require("selenium-webdriver")
//Node modules library 
const assert = require("assert");
//Mocha library
const { describe, it } = require("mocha");
// CHAI libreria esterna per test app
const should = require("chai").should();

/*
UTILIZZIAMO MOCHA INVECE DI JEST , SEMBRA ESSERE MIGLIORE PER I TEST SELENIUM
*/
//  ASSERTIONS (controlla se il test e andato a buon fine e con i dati passati)


describe("addNewNote", () => {
    it("successfully add new Note", async () => {
        //launch the browser
        let driver = await new Builder().forBrowser("chrome").build();

        //navigate into app
        await driver.get("http://localhost:3000/new")
        //ADD LETTER INTO INPUT FIELD  
        await driver.findElement(By.id("title")).sendKeys("Leard Selenium")
        await driver.findElement(By.id("body")).sendKeys("Leard Selenium body!")

        await driver.findElement(By.id("tags")).click()
        await driver.findElement(By.id("noTag")).click()
        await driver.findElement(By.id("addNewTag")).sendKeys("Leard Selenium")

        await driver.findElement(By.id("addNewTag")).sendKeys(Key.RETURN)

        await driver.findElement(By.id("closeEditTag")).click()
        await driver.findElement(By.id("tags")).click()
        await driver.findElement(By.id("0")).click()
        await driver.findElement(By.className("btn-close")).click()

        await driver.findElement(By.id("title")).sendKeys(Key.RETURN)

        //ASSERT
        let controlTitle = await driver.findElement(By.id("card-title0")).getText().then((value) => {
            return value
        })
        let controlText = await driver.findElement(By.id("card-text0")).getText().then((value) => {
            return value
        })

        //Assert con Chai should

        controlTitle.should.equal("Leard Selenium")
        controlText.should.equal("Leard Selenium body!")




        await driver.findElement(By.id("editNote")).click()
        await driver.findElement(By.id("deleteTag")).click()
        await driver.findElement(By.id("title")).sendKeys(Key.RETURN)

        await driver.findElement(By.className("form-control")).click()
        await driver.findElement(By.className("form-control")).sendKeys("Leard")
        await driver.findElement(By.id("0")).click()

        await driver.findElement(By.id("deleteEditedNote")).click()

        /*
        UTILIZZANDO ASSERT strictEqual controlla se due stringhe coincidono (accetta 2 argomenti)
             assert.strictEqual(controlTitle, "Leard Selenium")
             assert.strictEqual(controlText, "Leard Selenium body!")
        */

        //  CLOSE BROWSER
        await driver.quit()


    })


})




