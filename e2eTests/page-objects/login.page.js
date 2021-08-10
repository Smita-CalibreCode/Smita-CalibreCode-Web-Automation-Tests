import Page from "./page";
import { expect } from 'chai';
import testData from "../constants/testData.json";
import homePage from "../page-objects/home.page.js";
import newsFeed from '../page-objects/newsfeed.page';
import gmail from '../page-objects/gmail.page'


class Login extends Page{

    get logInPageBtn(){
        return $(".sc-1ggrumc-0.eTjubd");
    }

    get emailOrUsername(){
        return $("input[placeholder='janesmith@gmail.com']")
    }

    get password(){
        return $(".form.form-login .form-row:nth-child(2) .MuiInputBase-input");
    }

    get clickToContinueBtn(){
        return $(".sc-1irzl90-0.gBUZnW");
    }

    get peopleYouMayKnow(){
        return $(".u4v11l-2.kcwxTJ")
    }

    get accountDropDown(){
        return $(".MuiSvgIcon-root.nav-main-menu--arrow-icon");
    }

    get logOut(){
        return $(".nav-menu-items:nth-child(2) .nav-menu-item:nth-child(3)")
    }

    get welcomeText(){
        return $(".header>h1")
    }

    get accountSetting(){
        return $(".nav-menu-items:nth-child(2) .nav-menu-item:nth-child(2)")
    }

    get accountSettingLabel(){
        return $(".title-wrapper__container__content")
    }

    get logInDetails(){
        return $(".sc-1x1x871-0 .w9h3q4-0.kbYroH.icon")
    }

    get emailaddress(){
        return $("input[placeholder='Enter email address']")
    }

    get changePw(){
        return $("input[placeholder='Enter new password']")
    }

    get repeatPw(){
        return $("input[placeholder='Repeat new password']")
    }

    get changePwBtn(){
        return $(".MuiPaper-root:nth-child(3) .MuiAccordionDetails-root .sc-1wjn1q5-2:nth-child(2) .MuiButton-label")
    }

    get chnageEmailBtn(){
        return $(".MuiPaper-root:nth-child(3) .MuiAccordionDetails-root .sc-1wjn1q5-2:nth-child(1) .MuiButton-label")
    }

    get deactivateAccount(){
        return $(".sc-1x1x871-0.gHedX .w9h3q4-0.dHziTN.icon")
    }

    get deactivateBtn(){
        return $(".sc-1cwhfm1-1.btKETs.styled-button-wrapper .MuiButton-label")
    }

    get deactivateAccountBtn(){
        return $(".sc-1cwhfm1-1.VuKFI.styled-button-wrapper .MuiButton-label")
    }

    get cookieBtn(){
        return $(".sc-1cwhfm1-1.eWnqOl.styled-button-wrapper .MuiButton-label")
    }

    get editProfileInfo(){
        return $(".full-text")
    }

    get visitProfile(){
        return $(".nav-menu-profile__user__link")
    }

    get editProfileHeading(){
        return $(".header")
    }

    get editProfile(){
        return $(".MuiButtonBase-root.MuiIconButton-root.ks5vpi-13")
    }

    get firstName(){
        return $("input[placeholder='Please enter your first name']")
    }

    get lastName(){
        return $("input[placeholder='Please enter your last name']")
    }

    get saveChangeBtn(){
        return $(".sc-1cwhfm1-1.iYrMDW.styled-button-wrapper:nth-child(1) .MuiButtonBase-root:nth-child(1) .MuiButton-label")
    }

    get posts(){
        return $(".sc-14p0gny-1.jBnCZP:nth-child(1)")
    }

    get wishLists(){
        return $(".sc-14p0gny-1.jBnCZQ:nth-child(2)")
    }

    get followers(){
        return $(".sc-14p0gny-1.jBnCZQ:nth-child(3)")
    }

    get following(){ 
    return $(".sc-14p0gny-1.jBnCZQ:nth-child(4)")
    }

    get profileDetails(){
        return $(".MuiSnackbarContent-message.message")
    }

    get followingLabel(){
        return $(".MuiTypography-root.sc-1nn4qnz-1")
    }

    get postslabel(){
        return $(".sc-19teajy-2.daVcHg")
    }

    get wishlistlabel(){
        return $(".xm759p-1.YtuzD")
    }

    get followersLabel(){
        return $(".MuiTypography-root.sc-1nn4qnz-1")
    }

    get forgot(){
        return $(".MuiInputBase-input.MuiInput-input")
    }

    get resetPasswordLabel(){
        return $(".reset-link")
    }

    get yopmail(){
        return $("input[placeholder='Enter your inbox here']")
    }

    get setNewPwd(){
        return $("//*[text()='Set new password']")    
    }

    pass(index){
        return $(`.content-container .form-row:nth-child(${index}) input`)
    }

    get success(){
        return $(".header > h1")
    }

    get confirmPopup(){
        return $(".body .body-copy")
    }

    get hereLink(){
       return $(".body .body-copy > a ")
    }

    get userName(){
       return $(".fbys6c-1.kmChJO.user-ellipsis")
    }

    get peopleIcon(){
        return $(".mfiyyj-0.hSJwqF")
    }

    get setNewEmail(){
        return $("//*[text()='Confirm your email address']")
    }
    
    login(email,password){
        browser.pause(2000);
        browser.url(testData.weshop.homeurl);
        expect(homePage.welcome.isVisible()).to.eql(true);
        this.logInPageBtn.waitForVisible();
        this.logInPageBtn.click();
        browser.pause(4000);
        this.emailOrUsername.waitForVisible();
        this.emailOrUsername.click();
        this.emailOrUsername.setValue(email);
        this.password.waitForVisible();
        this.password.click();
        this.password.setValue(password);
        this.clickToContinueBtn.waitForVisible();
        this.clickToContinueBtn.click();
    }
    
    logout(){
        browser.pause(2000);
        this.accountDropDown.waitForVisible();
        this.accountDropDown.click();
        this.logOut.waitForVisible();
        this.logOut.click();
        homePage.welcome.waitForVisible();
        expect(homePage.welcome.isVisible()).to.eql(true);

    }

}


export default new Login();
