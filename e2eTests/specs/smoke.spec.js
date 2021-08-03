import { expect } from 'chai';
import Login from "../page-objects/login.page.js";
import testData from "../constants/testData.json"
import homePage from '../page-objects/home.page.js';
import newsFeed from '../page-objects/newsfeed.page';
import signupPage from '../page-objects/signup.page.js';
import filterPage from '../page-objects/filter.page.js';
import postPage from '../page-objects/post.page.js';
import product from '../page-objects/product.page.js'
import productPage from '../page-objects/product.page.js';
import { filter } from 'lodash';
import { max } from 'moment';

var price2=200;

describe("WeShop - Create an account",() =>{
    it("Verify that the user is redirected to the Create your account step when Create an account button is clicked", ()=>{
        browser.url(testData.weshop.homeurl);
        expect(homePage.welcome.isVisible()).to.eql(true);
        signupPage.createAccountBtn.waitForVisible();
        signupPage.createAccountBtn.click();
        signupPage.welcomeText.waitForVisible();
        expect(signupPage.welcomeText.getText()).to.eql(testData.signup.welcome);
    })

    it("Verify that user is able to create an new account using valid email-address", ()=>{
        signupPage.signup();
        signupPage.helloNewUser.waitForVisible();
        expect(signupPage.helloNewUser.isVisible()).to.eql(true);
    })
})

describe.skip("WeShop - Login", () => {

    it("Verify that the user is redirected to the Login step when Login button is clicked", ()=>{
        browser.url(testData.weshop.homeurl);
        expect(homePage.welcome.isVisible()).to.eql(true);
        Login.logInPageBtn.waitForVisible();
        Login.logInPageBtn.click();
        Login.welcomeText.waitForVisible();
        expect(Login.welcomeText.getText()).to.eql(testData.login.welcome);
    })
    
    it("Verify that user is able to login successfully using valid e-mail and password", ()=>{
        Login.login(testData.login.email,testData.login.password);
        Login.clickToContinueBtn.waitForVisible();
        Login.clickToContinueBtn.click();
        newsFeed.logo.waitForVisible();
        expect(newsFeed.logo.isVisible()).to.eql(true);
        Login.accountDropDown.waitForVisible();
        Login.accountDropDown.click();
        Login.logOut.waitForVisible();
        Login.logOut.click();
        homePage.welcome.waitForVisible();
        expect(homePage.welcome.isVisible()).to.eql(true);
    })   

    it("Verify that user is able to login successfully using valid username and password", ()=>{
        Login.login(testData.login.username,testData.login.password);
        newsFeed.logo.waitForVisible();
        expect(newsFeed.logo.isVisible()).to.eql(true);
    })   

    it("Verify that user can logout successfully when user select Logout option", ()=>{
        Login.logout();
    })

});

describe.skip("WeShop - Account setting",() =>{
    it("Verify that user is redirected to the Account setting page when clicked on Account setting option  ", ()=>{
        Login.login(testData.login.email, testData.login.password); //Login with e-mail and password
        browser.pause(1000);
        newsFeed.logo.waitForVisible();
        expect(newsFeed.logo.isVisible()).to.eql(true);
        browser.pause(1000);
        Login.accountDropDown.waitForVisible();
        Login.accountDropDown.click();
        Login.accountSetting.waitForVisible();
        Login.accountSetting.click();
        Login.accountSettingLabel.waitForVisible();
        expect(Login.accountSettingLabel.getText()).to.eql(testData.login.accountsetting);
    })

    it("Verify that user is redirected to the Newsfeed when WeShop logo is clicked", ()=>{
        Login.accountSettingLabel.waitForVisible();
        expect(Login.accountSettingLabel.getText()).to.eql(testData.login.accountsetting);
        newsFeed.logo.waitForVisible();
        newsFeed.logo.waitForVisible();
        newsFeed.logo.click();
        newsFeed.logo.waitForVisible();
        expect(newsFeed.logo.isVisible()).to.eql(true);
    })

    it("Verify that profile is updated successfully when user change the first name", ()=>{
        browser.pause(2000);
        Login.accountDropDown.waitForVisible();
        Login.accountDropDown.click();
        Login.visitProfile.waitForVisible();
        Login.visitProfile.click();
        Login.editProfile.waitForVisible();
        Login.editProfile.click();
        Login.firstName.waitForVisible();
        Login.firstName.click();
        Login.firstName.addValue('a');  
        browser.scroll(0,400);
        Login.saveChangeBtn.waitForVisible();
        Login.saveChangeBtn.waitForVisible();
        Login.saveChangeBtn.click();
        browser.scroll(200);
        Login.profileDetails.waitForVisible();
        expect(Login.profileDetails.getText()).to.eql(testData.login.profiledetails); 
    })

    it("Verify that profile is updated successfully when user change the last name", ()=>{
        Login.lastName.waitForVisible();
        Login.lastName.click();
        Login.lastName.addValue('Sena');  
        browser.scroll(0,200);
        Login.saveChangeBtn.waitForVisible();
        Login.saveChangeBtn.click();
        expect(Login.profileDetails.getText()).to.eql(testData.login.profiledetails);
    })

    it("Verify that user is redirected to the wishlists page when clicked on wishlists label", ()=>{
        browser.url(testData.weshop.homeurl);
        Login.accountDropDown.waitForVisible();
        Login.accountDropDown.click();
        Login.visitProfile.waitForVisible();
        Login.visitProfile.click();
        Login.wishLists.waitForVisible();
        Login.wishLists.click();
        expect(Login.wishlistlabel.isVisible()).to.eql(true);
    })

    it("Verify that user is redirected to the posts page when clicked on posts label", ()=>{
        browser.url(testData.weshop.homeurl);
        Login.accountDropDown.waitForVisible();
        Login.accountDropDown.click();
        Login.visitProfile.waitForVisible();
        Login.visitProfile.click();
        Login.posts.waitForVisible();
        Login.posts.click();
        expect(Login.postslabel.isVisible()).to.eql(true);
    })

    it("Verify that user is redirected to the followers page when clicked on followers label", ()=>{
        browser.url(testData.weshop.homeurl);
        Login.accountDropDown.waitForVisible();
        Login.accountDropDown.click();
        Login.visitProfile.waitForVisible();
        Login.visitProfile.click();
        Login.followers.waitForVisible();
        Login.followers.click();
        expect(Login.followersLabel.getText()).to.eql(testData.login.followerslabel);
    })

    it("Verify that user is redirected to the following page when clicked on following label", ()=>{
        browser.url(testData.weshop.homeurl);
        Login.accountDropDown.waitForVisible();
        Login.accountDropDown.click();
        Login.visitProfile.waitForVisible();
        Login.visitProfile.click();
        Login.following.waitForVisible();
        Login.following.click();
        expect(Login.followingLabel.getText()).to.eql(testData.login.followinglabel);
    })

});

describe.skip("WeShop - Create post RAP", ()=>{
    it("Verify that the user is redirected to the Recommend a product step when Recommend a product button is clicked",()=>{
        Login.login(testData.login.email,testData.login.password);
        browser.pause(2000);
        expect(postPage.recommend.isVisible()).to.eql(true);
        postPage.recommend.waitForVisible();
        postPage.recommend.waitForVisible();
        postPage.recommend.click();
        expect(postPage.recommendProductHeading.getText()).to.eql(testData.post.RAP);
    })

    it("Verify that the Recommend a product post created by the user are displayed appropriately in Newsfeed",()=>{
        postPage.search.waitForVisible();
        postPage.search.setValue([testData.product.name, 'Enter']);
        postPage.addToPostBtn.waitForVisible();
        postPage.addToPostBtn.waitForVisible();
        postPage.addToPostBtn.click();
        browser.pause(2000);
        browser.scroll(0,10000);
        postPage.nextBtn.waitForVisible();
        postPage.nextBtn.waitForVisible();
        postPage.nextBtn.click();
        postPage.video.waitForVisible();
        postPage.video.click();
        postPage.videoUrl.waitForVisible();
        postPage.videoUrl.click();
        postPage.videoUrl.setValue([testData.post.videoUrl, 'Enter']);
        browser.pause(2000);
        postPage.submitBtn.waitForVisible();
        postPage.submitBtn.click();
        browser.pause(4000);
        expect(postPage.newPost.getText()).eql(testData.post.newpost);
    })

    
});

describe.skip("WeShop - Create post AAQ", ()=>{

    it("Verify that the user is redirected to the Ask a Question step when Ask a question button is clicked",()=>{
        Login.login(testData.login.email,testData.login.password);
        browser.pause(2000);
        expect(postPage.askAQuestion.isVisible()).to.eql(true);
        postPage.askAQuestion.waitForVisible();
        postPage.askAQuestion.waitForVisible();
        postPage.askAQuestion.click();
        expect(postPage.askaquestionHeading.getText()).to.eql(testData.post.AAQ);
    })

    it("Verify that question created about a specific product is displayed appropriately in Newsfeed", ()=>{
        browser.pause(2000);
        postPage.askingAboutSpecificPrd.waitForVisible();
        postPage.askingAboutSpecificPrd.click();
        postPage.search.waitForVisible();
        postPage.search.setValue([testData.product.name, 'Enter']);
        postPage.addToPostBtn.waitForVisible();
        postPage.addToPostBtn.waitForVisible();
        postPage.addToPostBtn.click();
        browser.pause(2000);
        browser.scroll(0,10000);
        postPage.nextBtn.waitForVisible();
        postPage.nextBtn.waitForVisible();
        postPage.nextBtn.click();
        browser.pause(5000);

        postPage.weshoptext.waitForVisible();
        expect(postPage.weshoptext.isVisible()).to.eql(true);
        postPage.pleaseHelpMeToFind.waitForVisible();
        var count=1;
        while(count<= 15) {
        const locatorValue = browser.element('.z2assy-2.QcYzO .question-editor-caption> div textarea').value;
        browser.setValue('.z2assy-2.QcYzO .question-editor-caption> div textarea',['Backspace'])
        count++;
        } 
        postPage.pleaseHelpMeToFind.click();
        postPage.pleaseHelpMeToFind.setValue(testData.post.question)
        browser.scroll(0,10000);
        postPage.postAQueBtn.waitForVisible();
        postPage.postAQueBtn.click();
        browser.pause(4000);
        expect(postPage.newPost.getText()).eql(testData.post.newpost);
    })

    it.skip("Verify that question created about a recommendation is displayed appropriately in Newsfeed", ()=>{
        browser.pause(2000);
        postPage.askAQuestion.waitForVisible();
        postPage.askAQuestion.waitForVisible();
        postPage.askAQuestion.click();
        expect(postPage.askaquestionHeading.getText()).to.eql(testData.post.AAQ);
        postPage.lookingForRecomd.waitForVisible();
        postPage.lookingForRecomd.click();
        postPage.pleaseHelpMeToFind.waitForVisible();
        postPage.pleaseHelpMeToFind.click();
        postPage.pleaseHelpMeToFind.addValue(testData.post.question)
        browser.scroll(0,10000);
        postPage.postAQueBtn.waitForVisible();
        postPage.postAQueBtn.click();
        browser.pause(4000);
        expect(postPage.newPost.getText()).eql(testData.post.newpost);
    })

    it("Verify that user can logout successfully when user select Logout option", ()=>{
        Login.logout();
    })
});

describe.skip("WeShop - NewsFeed", ()=> {

    it("Verify that feed is displayed appropriately when user scrolls through Newsfeed",()=>{
        Login.login(testData.login.email,testData.login.password);
        browser.pause(2000);
        expect(postPage.postOne.isVisible()).to.eql(true);
        browser.scroll(0,100);
        expect(postPage.postTwo.isVisible()).to.eql(true);
        browser.scroll(0,100);
        expect(postPage.postThree.isVisible()).to.eql(true);
    })
});

describe.skip("WeShop - Product",()=>{
    it("Verify that the searched product name is displayed below the header Eg: showing results for Shirts", ()=>{
        Login.login(testData.login.email, testData.login.password);
        filterPage.serachBar.waitForVisible();
        filterPage.serachBar.setValue([testData.product.name, 'Enter']);
        browser.pause(4000);
        product.showingResult.waitForVisible();
        expect(product.showingResult.isVisible()).to.eql(true);
    })

    it("Verify that the product price is displayed appropriately in the product details box", ()=>{
        product.showingResult.waitForVisible();
        expect(product.showingResult.isVisible()).eql(true);
        browser.scroll(0,100);
        product.price.waitForVisible();
        expect(product.price.isVisible()).to.eql(true);
    })

    it("Verify that the product description displayed appropriately below the product name", ()=>{
        product.showingResult.waitForVisible();
        expect(product.showingResult.isVisible()).eql(true);
        expect(product.descp.isVisible()).to.eql(true);
    })
});

describe("WeShop - filter", ()=>{
    it("Verify that the results matching the specified price range are displayed when the search is filtered", ()=>{
        Login.login(testData.login.email, testData.login.password);
        browser.pause(2000);
        filterPage.serachBar.waitForVisible();
        filterPage.serachBar.setValue([testData.product.name, 'Enter']);
        browser.pause(4000);
        product.showingResult.waitForVisible();
        expect(product.showingResult.isVisible()).to.eql(true);
        browser.pause(1000);
        filterPage.minPrice.waitForVisible();
        filterPage.minPrice.addValue('100');
        filterPage.maxPrice.waitForVisible();
        filterPage.maxPrice.addValue('200');
        filterPage.updateResultsBtn.waitForVisible();
        filterPage.updateResultsBtn.click();
        browser.pause(2000);
        productPage.price.waitForVisible();
        var price1 = productPage.price.getText();
        price1 = price1.split("£");
        price1 = price1[1];
        price1 = parseFloat(price1);
        expect(price2 >= price1).to.eql(true);
        filterPage.clearAll.waitForVisible();
        filterPage.clearAll.click();
    })

    it("Verify that the results matching to the selected brand are displayed when the search is filtered", ()=>{
        browser.pause(2000);
        filterPage.brandDownArrow.waitForVisible();
        filterPage.brandDownArrow.click();
        browser.scroll(0, 200);
        filterPage.brandOption.waitForVisible();
        filterPage.brandOption.click();
        browser.scroll(0, 10000);
        filterPage.updateResultsBtn.waitForVisible();
        filterPage.updateResultsBtn.click();
        filterPage.clearAll.waitForVisible();
        filterPage.clearAll.click();
    })

    it("Verify that the results matching to the selected retailer are displayed when the search is filtered", ()=>{
        browser.pause(2000);
        filterPage.priceDownArrow.waitForVisible();
        filterPage.priceDownArrow.click();
        filterPage.retailerDownArrow.waitForVisible();
        filterPage.retailerDownArrow.click();
        filterPage.retailerOption.waitForVisible();
        filterPage.retailerOption.waitForVisible();
        filterPage.retailerOption.click();
        browser.scroll(0, 10000);
        filterPage.updateResultsBtn.waitForVisible();
        filterPage.updateResultsBtn.click();
        browser.pause(2000);
        productPage.retailerName.waitForVisible();
        expect(productPage.retailerName.getText()).to.eql(testData.product.retailername);
    })
})






