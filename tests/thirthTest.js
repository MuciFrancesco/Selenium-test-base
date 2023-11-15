const { Builder, By, Key } = require("selenium-webdriver")
const { describe, it } = require("mocha");


describe("addNewTag", () => {

    it("Add item into local storage control", async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000")

        await driver.findElement(By.id("editTags")).click()
        await driver.findElement(By.id("addNewTag")).sendKeys("Leard Selenium!")
        await driver.findElement(By.id("addNewTag")).sendKeys(Key.RETURN)
        await driver.findElement(By.id("closeEditTag")).click()
        await driver.findElement(By.id("editTags")).click()
        await driver.findElement(By.id("0")).click()
        await driver.findElement(By.id("closeEditTag")).click()

        await driver.quit()
    })
})