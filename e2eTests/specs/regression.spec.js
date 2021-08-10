import { expect } from 'chai';
import Login from "../page-objects/login.page.js";
import testData from "../constants/testData.json"
import homePage from '../page-objects/home.page.js';
import newsFeed from '../page-objects/newsfeed.page';
import signup from '../page-objects/signup.page.js';
import filterPage from '../page-objects/filter.page.js';
import postPage from '../page-objects/post.page.js';
import product from '../page-objects/product.page.js'
import productPage from '../page-objects/product.page.js';
import sharePage from '../page-objects/share.page.js';
import gmail from '../page-objects/gmail.page'
import { max } from 'moment';


describe("Create an account", ()=>{
    it("Verify that user is forwarded to the Password step when valid names and email address are submitted in Create your account step",()=>{
        browser.url(testData.weshop.homeurl);
        expect(homePage.welcome.isVisible()).to.eql(true);
        signup.createAccountBtn.waitForVisible();
        signup.createAccountBtn.click();
        browser.pause(2000);
        signup.firstName.waitForVisible();
        signup.firstName.setValue(testData.signup.firstname);
        signup.lastName.waitForVisible();
        signup.lastName.setValue(testData.signup.email);
        browser.pause(2000);
        signup.email.waitForVisible();
        signup.email.setValue(testData.signup.newEmail);
        signup.clickToContinue.waitForVisible();
        signup.clickToContinue.click();
        expect(signup.welcomeText.getText()).to.eql(testData.signup.createpassword);
    })

    it("Verify that user is forwarded to the Password step when acceptable special characters(apostrophe, hyphen or dot) are entered in First Name and Last Name",()=>{
        browser.url(testData.weshop.homeurl);
        expect(homePage.welcome.isVisible()).to.eql(true);
        signup.createAccountBtn.waitForVisible();
        signup.createAccountBtn.click();
        browser.pause(2000);
        signup.firstName.waitForVisible();
        signup.firstName.setValue(testData.signup.fsname);
        signup.lastName.waitForVisible();
        signup.lastName.setValue(testData.signup.lname);
        browser.pause(2000);
        signup.email.waitForVisible();
        signup.email.setValue(testData.signup.newEmail);
        signup.clickToContinue.waitForVisible();
        signup.clickToContinue.click();
        expect(signup.welcomeText.getText()).to.eql(testData.signup.createpassword);
    })

    it("Verify that appropriate error message is displayed when invalid characters are submitted in the First Name and Last Name field",()=>{
        browser.url(testData.weshop.homeurl);
        expect(homePage.welcome.isVisible()).to.eql(true);
        signup.createAccountBtn.waitForVisible();
        signup.createAccountBtn.click();
        browser.pause(2000);
        signup.firstName.waitForVisible();
        signup.firstName.setValue(testData.signup.invalidf);
        signup.errormsgFirst.waitForVisible();
        expect(signup.errormsgFirst.getText()).to.eql(testData.signup.errormsg);
        signup.lastName.waitForVisible();
        signup.lastName.setValue(testData.signup.invalidf);
        expect(signup.erromsgLast.getText()).to.eql(testData.signup.errormsg);
    })

    
})