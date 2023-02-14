import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CreateProfilePage from '../pages/CreateProfilePage';
import ProfilePage from '../pages/ProfilePage';
import Constants from '../data/constants'

describe('Delete user profiles', () => {

  before(async () => {
    
    await LoginPage.open();
    await expect(browser).toHaveTitle(Constants.projectTitle);
    
    await LoginPage.verifyLoginPage(Constants.login)
    await LoginPage.login(Constants.username, Constants.password)
  })

  beforeEach(async () => {

    await HomePage.createNewProfile()

    // await CreateProfilePage.homeBtn.waitForDisplayed()
    // await CreateProfilePage.homeBtn.waitForClickable()
  })

  afterEach(async () => {
    await HomePage.createNewProfileBtn.scrollIntoView()
    await HomePage.createNewProfileBtn.waitForDisplayed()
    await browser.pause()
  })

  it('Delete Adult profile', async () => {
    await CreateProfilePage.createProfile(Constants.adultName, Constants.adultAgeRange, Constants.adultYear, "41")
    await ProfilePage.profileName.waitForDisplayed()
    await ProfilePage.deleteProfile()
    await HomePage.profilesVerification(Constants.familyProfileName, Constants.adultName)
  });

  it('Delete TEEN profile in age range 15 - 17', async () => {
    await CreateProfilePage.createProfile(Constants.teenName_15_17, Constants.teenAge_15_17, null, "17")
    await ProfilePage.profileName.waitForDisplayed()
    await ProfilePage.deleteProfile()
    await HomePage.profilesVerification(Constants.familyProfileName, Constants.teenName_15_17)
  });

  it('Delete TEEN profile in age range 12 - 14', async () => {
    await CreateProfilePage.createProfile(Constants.teenName_12_14, Constants.teenAge_12_14, null, "22")
    await ProfilePage.profileName.waitForDisplayed()
    await ProfilePage.deleteProfile()
    await HomePage.profilesVerification(Constants.familyProfileName, Constants.teenName_12_14)
  });

});