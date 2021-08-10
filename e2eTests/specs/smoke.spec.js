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
import sharePage from '../page-objects/share.page.js';
import gmail from '../page-objects/gmail.page'

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

describe("WeShop - Login", () => {

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

    it("Verify that reset password email is delivered instantly to the registered user's email",()=>{
        browser.url(testData.weshop.resetpassword);
        Login.welcomeText.waitForVisible();
        expect(Login.welcomeText.getText()).to.eql(testData.resetPwd.resetPwdHeading);
        Login.forgot.waitForVisible();
        Login.forgot.click();
        Login.forgot.setValue([testData.resetPwd.email, 'Enter']);
        Login.clickToContinueBtn.waitForVisible();
        Login.clickToContinueBtn.click();
        browser.newWindow('http://www.yopmail.com/en/')
        browser.pause(3000)
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);
        gmail.checkinbox_changeiframe(testData.resetPwd.email);
        Login.setNewPwd.waitForVisible();
        Login.setNewPwd.click();
        browser.pause(3000)
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[2]);
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  '.content-container .header'
                ) === true
              );
            },
            60000,
            "add item input field not visible even after 10s"
        );
        Login.pass(1).waitForVisible();
        Login.pass(1).click();
        Login.pass(1).setValue(testData.resetPwd.pwd);
        Login.pass(2).waitForVisible();
        Login.pass(2).click();
        Login.pass(2).setValue(testData.resetPwd.pwd);
        Login.clickToContinueBtn.waitForVisible();
        Login.clickToContinueBtn.click();
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  '.header > h1'
                ) === true
              );
            },
            60000,
            "add item input field not visible even after 10s"
        );
        Login.success.waitForVisible();
        browser.pause(3000);
        expect(Login.success.getText()).to.eql(testData.resetPwd.successpopup);
        Login.confirmPopup.waitForVisible();
        expect(Login.confirmPopup.getText()).to.eql(testData.resetPwd.confirmpopuptext);
        Login.hereLink.waitForVisible();
        Login.hereLink.click();
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  '.header>h1'
                ) === true
              );
            },
            60000,
            "add item input field not visible even after 10s"
        );
        Login.emailOrUsername.waitForVisible();
        Login.emailOrUsername.click();
        Login.emailOrUsername.setValue(testData.resetPwd.email);
        Login.password.waitForVisible();
        Login.password.click();
        Login.password.setValue(testData.resetPwd.pwd);
        Login.clickToContinueBtn.waitForVisible();
        Login.clickToContinueBtn.click();
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  '.mfiyyj-0.hSJwqF'
                ) === true
              );
            },
            60000,
            "add item input field not visible even after 10s"
        );
        Login.peopleIcon.waitForVisible();
        Login.peopleIcon.click();
        Login.userName.waitForVisible();
        expect(Login.userName.getText()).to.eql(testData.resetPwd.username)

    })

    it("Verify that user can login successfully with new email address",()=>{
        Login.login(testData.resetEmail.email,testData.login.password);
        browser.pause(5000);
        Login.peopleIcon.waitForVisible();
        Login.peopleIcon.click();
        Login.accountSetting.waitForVisible();
        Login.accountSetting.click();
        Login.logInDetails.waitForVisible();
        Login.logInDetails.click();
        browser.scroll(0,500);
        browser.pause(2000);
        Login.emailaddress.waitForVisible();
        Login.emailaddress.click();
        const selectorValue = Login.emailaddress.getValue();
        const backSpaces = new Array(selectorValue.length).fill('Backspace');
        Login.emailaddress.setValue(backSpaces);
        Login.emailaddress.setValue(testData.resetEmail.email);
        Login.chnageEmailBtn.waitForVisible();
        Login.chnageEmailBtn.click();
        Login.profileDetails.waitForVisible();
        expect(Login.profileDetails.getText()).to.eql(testData.resetEmail.popup);
        browser.newWindow('http://www.yopmail.com/en/')
        browser.pause(3000)
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);
        gmail.checkinbox_changeiframe(testData.resetEmail.email);
        Login.setNewEmail.waitForVisible();
        Login.setNewEmail.click();
        browser.pause(3000)
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[2]);
        browser.waitUntil(
           function() {
            return (
               browser.isVisible(
                '.content-container .header'
            ) === true
            );
            },
           60000,
        "add item input field not visible even after 10s"
        );
        Login.profileDetails.waitForVisible();
        expect(Login.profileDetails.getText()).to.eql(testData.resetPwd.successpopup);

    })

});

describe("WeShop - Create post RAP", ()=>{
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
        browser.pause(15000);
        postPage.newPost.waitForExist({ timeout: 5000 });
        expect(postPage.newPost.getText()).eql(testData.post.newpost);
    })

    it("Verify that User is unable to submit the post without inlcuding a single product for RAP option",()=>{
        browser.pause(2000);
        expect(postPage.recommend.isVisible()).to.eql(true);
        postPage.recommend.waitForVisible();
        postPage.recommend.waitForVisible();
        postPage.recommend.click();
        expect(postPage.recommendProductHeading.getText()).to.eql(testData.post.RAP);
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
        postPage.crossIcon.waitForVisible();
        postPage.crossIcon.click();
        browser.pause(2000);
        postPage.submitBtn.click();
        expect(postPage.submitBtn.getText()).to.eql(testData.post.withoutsingleproduct);
        browser.pause(2000);
        Login.logout();
    })
});

describe("WeShop - Create post AAQ - Asking about a specific product", ()=>{

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
        browser.scroll(0, 10000);
        postPage.emoji.waitForVisible();
        postPage.emoji.click();
        browser.scroll(0, 10000);
        postPage.selectEmoji.waitForVisible();
        postPage.selectEmoji.click();
        newsFeed.logo.waitForVisible();
        newsFeed.logo.click();
        postPage.saveChnagesBtn.waitForVisible();
        postPage.saveChnagesBtn.click();
        browser.pause(2000);
        postPage.continuePostBtn.waitForVisible();
        postPage.continuePostBtn.click();
        browser.scroll(0, 10000);
        postPage.postAQueBtn.waitForVisible();
        postPage.postAQueBtn.click();
        browser.pause(15000);
        postPage.newPost.waitForExist({ timeout: 5000 });
        expect(postPage.newPost.getText()).eql(testData.post.newpost);
    })
});

describe("WeShop - Create a post AAQ - Looking for recommendations?", ()=>{

    it("Verify that question created about a recommendation is displayed appropriately in Newsfeed",()=>{
        browser.pause(2000);
        expect(postPage.askAQuestion.isVisible()).to.eql(true);
        postPage.askAQuestion.waitForVisible();
        postPage.askAQuestion.waitForVisible();
        postPage.askAQuestion.click();
        expect(postPage.askaquestionHeading.getText()).to.eql(testData.post.AAQ);
        browser.pause(2000);
        postPage.lookingForRecomd.waitForVisible();
        postPage.lookingForRecomd.click();
        browser.pause(5000);
        browser.scroll(0, 10000);
        postPage.emoji.waitForVisible();
        postPage.emoji.click();
        browser.scroll(0, 10000);
        postPage.selectEmoji.waitForVisible();
        postPage.selectEmoji.click();
        newsFeed.logo.waitForVisible();
        newsFeed.logo.click();
        postPage.saveChnagesBtn.waitForVisible();
        postPage.saveChnagesBtn.click();
        browser.pause(2000);
        postPage.continuePostBtn.waitForVisible();
        postPage.continuePostBtn.click();
        browser.scroll(0, 10000);
        postPage.postAQueBtn.waitForVisible();
        postPage.postAQueBtn.click();
        browser.pause(15000);
        postPage.newPost.waitForExist({ timeout: 5000 });
        expect(postPage.newPost.getText()).eql(testData.post.newpost);
    })
});

describe("WeShop - NewsFeed", ()=> {

    it("Verify that feed is displayed appropriately when user scrolls through Newsfeed",()=>{
        Login.login(testData.login.email,testData.login.password);
        browser.pause(2000);
        expect(postPage.postOne.isVisible()).to.eql(true);
        browser.scroll(0,200);
        expect(postPage.postTwo.isVisible()).to.eql(true);
        browser.scroll(0,200);
        expect(postPage.postThree.isVisible()).to.eql(true);
    })

    it("Verify that comments added to posts by other users are displayed in Newsfeed",()=>{
        browser.url(testData.weshop.homeurl);
        browser.scroll(0,10000);
        newsFeed.otherPostComent.waitForVisible();
        newsFeed.otherPostComent.click();
        newsFeed.otherPostComent.setValue(testData.newsfeed.comment);
        newsFeed.postCommentBtn.waitForVisible();
        newsFeed.postCommentBtn.click();
        newsFeed.postedComment.waitForVisible();
        expect(newsFeed.postedComment.getText()).to.eql(testData.newsfeed.comment);
    })

    it("Verify that comments added to own posts are displayed in Newsfeed",()=>{
        browser.url(testData.weshop.homeurl);
        postPage.newPost.waitForVisible();
        newsFeed.otherPostComent.waitForVisible();
        newsFeed.otherPostComent.click();
        newsFeed.otherPostComent.setValue(testData.newsfeed.comment);
        newsFeed.postCommentBtn.waitForVisible();
        newsFeed.postCommentBtn.click();
        newsFeed.postedComment.waitForVisible();
        expect(newsFeed.postedComment.getText()).to.eql(testData.newsfeed.comment);
        
    })

    it("Verify that comments added to questions by other users are displayed in Newsfeed",()=>{
        browser.url(testData.weshop.homeurl);
        browser.scroll(0,10000);
        newsFeed.otherPostComent.waitForVisible();
        newsFeed.otherPostComent.click();
        newsFeed.otherPostComent.setValue(testData.newsfeed.comment);
        newsFeed.postCommentBtn.waitForVisible();
        newsFeed.postCommentBtn.click();
        newsFeed.postedComment.waitForVisible();
        expect(newsFeed.postedComment.getText()).to.eql(testData.newsfeed.comment);
    })

    it("Verify that comments added to own questions are displayed in Newsfeed",()=>{
        browser.url(testData.weshop.homeurl);
        browser.scroll(0,10000);
        newsFeed.otherPostComent.waitForVisible();
        newsFeed.otherPostComent.click();
        newsFeed.otherPostComent.setValue(testData.newsfeed.comment);
        newsFeed.postCommentBtn.waitForVisible();
        newsFeed.postCommentBtn.click();
        newsFeed.postedComment.waitForVisible();
        expect(newsFeed.postedComment.getText()).to.eql(testData.newsfeed.comment);
    })
});

describe("WeShop - Product",()=>{
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

    it("Verify that the user is able to copy the product link when copy link button is clicked", ()=>{
        product.share.waitForVisible();
        product.share.click();
    })

    it("Verify that user can logout successfully when user select Logout option", ()=>{
        Login.logout();
    })
});

describe("WeShop - Search",()=>{

    it("Verify that appropriate search results when suggested search keyword in the Search field is selected",()=>{
        Login.login(testData.login.email, testData.login.password);
        browser.pause(2000);
        filterPage.serachBar.waitForVisible();
        filterPage.serachBar.setValue(testData.product.name);
        browser.pause(2000);
        filterPage.suggestion.waitForVisible();
        filterPage.suggestion.click();
        product.showingResult.waitForVisible();
        expect(product.showingResult.isVisible()).to.eql(true);
    })

    it("Verify that appropriate search results when a keyword is entered in the Search field",()=>{
        newsFeed.logo.waitForVisible();
        newsFeed.logo.click();
        browser.pause(4000);
        filterPage.serachBar.waitForVisible();
        filterPage.serachBar.setValue([testData.product.prdname, 'Enter']);
        browser.pause(2000);
        product.showingResult.waitForVisible();
        expect(product.showingResult.isVisible()).to.eql(true);
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
        browser.pause(5000);
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
});

describe("WeShop - Account",()=>{
    it("Verify that Change password button is activated when the user adds same password string in Password and Repeat password", ()=>{
        Login.login(testData.login.email, testData.login.password); 
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
        browser.pause(2000);
        browser.scroll(0,200);
        if(Login.cookieBtn.isVisible()){
            Login.cookieBtn.click();
        }        
        Login.logInDetails.waitForVisible();
        Login.logInDetails.click();
        Login.changePw.waitForVisible();
        Login.changePw.click();
        Login.changePw.setValue([testData.signup.password]);
        Login.repeatPw.waitForVisible();
        Login.repeatPw.click();
        Login.repeatPw.setValue([testData.signup.password]);
        expect(Login.changePwBtn.isVisible()).to.eql(true);
    })

    it("Verify that Change e-mail address button is enabled when user adds valid e-mail address", ()=>{
        browser.pause(2000);
        Login.emailaddress.waitForVisible();
        Login.emailaddress.click();
        Login.emailaddress.addValue('cc')
        expect(Login.chnageEmailBtn.isVisible()).to.eql(true);
    })

    it("Verify that user is automatically logged out after Deactivate account step", ()=>{
        browser.pause(2000);
        browser.scroll(0,10000);
        Login.deactivateAccount.waitForVisible();
        Login.deactivateAccount.click();
        Login.deactivateBtn.waitForVisible();
        Login.deactivateBtn.click();
        Login.deactivateAccountBtn.waitForVisible();
        Login.deactivateAccountBtn.click();
        browser.pause(1000);
        expect(homePage.welcome.isVisible()).to.eql(true);
    })
});

describe("WeShop - Profile",()=>{
    it("Verify that user is redirected to the Edit profile Information step when Edit profile button is tapped", ()=>{
        Login.login(testData.login.email, testData.login.password); 
        browser.pause(1000);
        newsFeed.logo.waitForVisible();
        expect(newsFeed.logo.isVisible()).to.eql(true);
        browser.pause(1000);
        Login.accountDropDown.waitForVisible();
        Login.accountDropDown.click();
        Login.visitProfile.waitForVisible();
        Login.visitProfile.click();
        Login.editProfile.waitForVisible();
        Login.editProfile.click();
        expect(Login.editProfileHeading.getText()).to.eql(testData.profile.edit)
    })
});

describe("WeShop - Share",()=>{

    it("Verify that user can see profile of other user when Profile link of other user is launched",()=>{
        browser.url(testData.share.otherprofile);
        expect(sharePage.otherprofile.getText()).to.eql(testData.share.otheruser)
    })

    it("Verify that user can see own profile when Profile link is launched", ()=>{
        browser.url(testData.share.ownprofile);
        expect(sharePage.otherprofile.getText()).to.eql(testData.share.ownuser)
    })

    it("Verify that user can see post when Post link of user is launched",()=>{
        browser.url(testData.share.post);
        sharePage.postedcaption.waitForVisible();
        expect(sharePage.postedcaption.isVisible()).to.eql(true);
    })
});






