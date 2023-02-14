import ProfilePage from './ProfilePage';
import Constants from '../data/constants'
import Page from './Page';

class HomePage {

    get createNewProfileBtn() {
        return $('//button[text()="Create new profile"]')
    }

    get profileName() {
        return $('.profiles__profile-name')
    }

    get profileAvatar() {
        return $('.profiles__profile-avatar')
    }

    get allProfiles() {
        return $$('.profiles__profile-name')
    }

    async chooseProfile(profileName) {
        await browser.pause()
        let profile = await $("//*[contains(@class, 'profiles__profile-name') and text() ='"+profileName+"']")
        await Page.clickOn(profile)
    }

    async createNewProfile() {
        await Page.clickOn(this.createNewProfileBtn)
    }

    async deleteProfile(profileName) {
        await browser.pause()
        await this.chooseProfile(profileName)
        await ProfilePage.deleteProfile()
        await expect(this.profileName).toHaveText(Constants.familyProfileName)
        await expect(this.profileName).not.toHaveText(profileName)
    }

    async deleteProfiles() {
        await this.deleteProfile(Constants.adultName)
        await this.deleteProfile(Constants.teenName_15_17)
        await this.deleteProfile(Constants.teenName_12_14)
    }

    async profilesVerification(defaultProfileName, deletedProfileName) {
        this.profileName.waitForDisplayed()
        await expect(this.profileName).toHaveText(defaultProfileName)
        await expect(this.profileName).not.toHaveText(deletedProfileName)
    }

}

export default new HomePage();