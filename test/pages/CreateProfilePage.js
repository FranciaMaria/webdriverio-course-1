import Page from "./Page"

class CreateProfilePage {
  
  get homeBtn() {
    return $('//button[text()="Home"]')
  }

  get name() {
    return $('#profile-name')
  }

  get forAge12_14() {
    return $("//label[@for='AGE_12_14']")
  }

  get forAge15_17() {
    return $("//label[@for='AGE_15_17']")
  } 

  get forAge18_PLUS() {
    return $("//label[@for='AGE_18_PLUS']")
  } 

  get year() {
    return $("//label[@for='year']")
  } 

  get avatar_17() {  
    return $('//label[@for="17"]')
  }

  get createProfileBtn() {
    return $('//button[text()="Create profile"]')
  }

  async choosenAvatar(avatarId) {
    let avatar = $('//label[@for="'+avatarId+'"]/div/img')
    await avatar.scrollIntoView()
    await browser.pause()
    let choosenAvatarSrc = await avatar.getAttribute("src")
    await avatar.click()
    return choosenAvatarSrc
  }

async createProfile(name, age, year, avatarId) {
    await this.name.addValue(name)
    if (age == '18+') {
      await Page.clickOn(this.forAge18_PLUS)
      await this.year.waitForDisplayed();
      await this.year.addValue(year);
    } else if (age == '15 - 17') {
      await Page.clickOn(this.forAge15_17)
    } else {
      await Page.clickOn(this.forAge12_14)
    }
    await browser.pause()
    let choosenAvatar = await this.choosenAvatar(avatarId)
    await browser.pause()
    await Page.clickOn(this.createProfileBtn)
    return choosenAvatar
  }

  async verifyCreateNewProfilePage() {
    await this.homeBtn.waitForDisplayed()
    await this.name.waitForDisplayed()
  }
  
}

export default new CreateProfilePage();