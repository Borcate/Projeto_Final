const homeScreen = require("../screens/home.screen")

describe('Access Admin Panel', () => {
    it('shoud login with valid credentials', async () => {
        await homeScreen.goToLogin()

//setTimeout(()=>{
//    console.log('Abriu')
//}, 10000)

        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueWithStoreCredentials()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)

        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
    });
})