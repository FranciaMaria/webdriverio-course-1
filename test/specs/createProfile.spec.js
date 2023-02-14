import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CreateProfilePage from '../pages/CreateProfilePage';
import ProfilePage from '../pages/ProfilePage';
import Constants from '../data/constants'

describe('Create user profiles', () => {

  before(async () => {
    await LoginPage.open();  
  })

  beforeEach(async () => {
    await LoginPage.verifyLoginPage(Constants.login)
    await LoginPage.login(Constants.username, Constants.password)
    await HomePage.createNewProfile()
    await CreateProfilePage.verifyCreateNewProfilePage()
  })

  after(async () => {
    await LoginPage.login(Constants.username, Constants.password)
    await browser.pause()
    await HomePage.deleteProfiles()
  })

  afterEach(async () => {
    await ProfilePage.logout()
    await LoginPage.verifyLoginPage(Constants.login)
  })

  let chosenAvatar

  it('Create Adult profile', async () => {
    chosenAvatar = await CreateProfilePage.createProfile(Constants.adultName, Constants.adultAgeRange, Constants.adultYear, "41")
    await ProfilePage.verifyProfilePage(Constants.adultName, Constants.adult, chosenAvatar)
    await ProfilePage.goBackToHomePage()
    await HomePage.chooseProfile(Constants.adultName)
  });

  it('Create TEEN profile in age range 15 - 17', async () => {
    chosenAvatar = await CreateProfilePage.createProfile(Constants.teenName_15_17, Constants.teenAge_15_17, null, "17")
    await ProfilePage.verifyProfilePage(Constants.teenName_15_17, Constants.teen, chosenAvatar)
    await ProfilePage.goBackToHomePage()
    await HomePage.chooseProfile(Constants.teenName_15_17)
  });

  it('Create TEEN profile in age range 12 - 14', async () => {
    chosenAvatar = await CreateProfilePage.createProfile(Constants.teenName_12_14, Constants.teenAge_12_14, null, "22")
    await ProfilePage.verifyProfilePage(Constants.teenName_12_14, Constants.teen, chosenAvatar)
    await ProfilePage.goBackToHomePage()
    await HomePage.chooseProfile(Constants.teenName_12_14)
  });

});