import Page from "./Page";

class LoginPage {
  
  open() {
    return browser.url('/');
  }

  get loginTitle() {
    return $('.form__title');
  }

  get username() {
    return $('#username')
  }

  get password() {
    return $('#password')
  }

  get loginBtn() {
    return $('//*[@type="submit"]')
  }

 async login(username, password) {
    await this.username.waitForDisplayed()
    await this.username.addValue(username)
    await this.password.waitForDisplayed()
    await this.password.addValue(password)
    await Page.clickOn(this.loginBtn)
  }

  async verifyLoginPage(pageTitle) {
    await browser.pause()
    await this.loginTitle.waitForDisplayed({timeout: 2000})
    await expect(await this.loginTitle.getText()).toEqual(pageTitle)
  }

}

export default new LoginPage();