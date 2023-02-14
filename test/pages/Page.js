class Page {

    async clickOn(element) {
        await browser.pause()
        await element.scrollIntoView()
        await element.waitForDisplayed()
        await element.waitForClickable()
        await element.click()
    }

}
export default new Page();