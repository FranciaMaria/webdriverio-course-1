import Page from "./Page"

class ProfilPage {

  get avatar() {
    return $('//div[@class="card__avatar-outer"]//img')
  }

  get profileName() {
    return $('.card__profile-name')
  }

  get profileType() {
    return $('.card__profile-type')
  }

  get deleteProfileBtn() {
    return $('//button[text()="Delete profile"]')
  }

  get logoutBtn() {
    return $("//button[text()='Logout']")
  }

  get chooseProfileBtn() {
    return $("//button[text()='Choose profile']")
  }

  get profileText() {
    return $('.card__lorem')
  }

  async avatarSource() {
    let chosenAvatar = await this.avatar.getAttribute("src")
    return chosenAvatar
  }

  async logout() {
    await Page.clickOn(this.logoutBtn)
  }

  async deleteProfile() {
    await Page.clickOn(this.deleteProfileBtn)
  }

  async goBackToHomePage() {
    await Page.clickOn(this.chooseProfileBtn)
  }

  async verifyProfilePage(name, type, avatar) {
    await this.profileName.waitForDisplayed()
    await this.profileType.waitForDisplayed()
    await this.profileText.waitForDisplayed()
    await expect(await this.avatarSource()).toEqual(avatar)
    await expect(this.profileName).toHaveText(name)
    await expect(this.profileType).toHaveText(type)
  }

}

export default new ProfilPage();