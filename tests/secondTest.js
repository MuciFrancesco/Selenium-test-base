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


describe("addElementIntoLocalStorage", () => {

    it("Add item into local storage control", async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000")
        await driver.executeScript(() => {
            localStorage?.setItem("Notes", 'test');
        });
        let prova = await driver.executeScript(async () => {
            return localStorage.getItem("Notes")
        })
        prova.should.equal("test")
        await driver.quit()
    })
})




