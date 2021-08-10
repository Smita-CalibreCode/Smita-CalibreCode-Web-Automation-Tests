import Page from "./page";
import { expect } from 'chai';
import testData from "../constants/testData.json";

class SignUp extends Page{

    get createAccountBtn(){
        return $(".sc-1ggrumc-0.kiLfAw");
    }

    get welcomeText(){
        return $(".header>h1")
    }

    get firstName(){
        return $("input[placeholder='Jane']")
    }

    get lastName(){
        return $("input[placeholder='Smith']")
    }

    get email(){
        return $("input[placeholder='janesmith@gmail.com']")
    }

    get clickToContinue(){
        return $(".sc-1irzl90-0.gBUZnW")
    }

    get password(){
        return $(".MuiInputBase-input.MuiInput-input")
    }

    get day(){
        return $(".form-row:nth-child(1) .grid-day")
    }

    get selectDay(){
        return $(".grid-day option:nth-child(5)")
    }

    get month(){
        return $(".form-row:nth-child(1) .grid-month")
    }

    get selectMonth(){
        return $(".grid-month option:nth-child(2)")
    }

    get year(){
        return $(".form-row:nth-child(1) .grid-year")
    }

    get selectYear(){
        return $(".grid-year option:nth-child(12)")
    }

    get useragrement(){
        return $(".sc-1xf132m-3.dVYxTo:nth-child(2) .c-checkbox label.sc-1xaceuu-0.gelaRK:nth-child(1)")
    }

    get helloNewUser(){
        return $(".copy.display-linebreak")
    }

    get errormsgFirst(){
        return $(".sc-1xf132m-0.jwTiyJ .form div.form-row:nth-child(1) .form-row-2:nth-child(1) .MuiFormControl-root .MuiFormHelperText-root")
    }

    get erromsgLast(){
        return $(".sc-1xf132m-0.jwTiyJ .form div.form-row:nth-child(1) .form-row-2:nth-child(2) .MuiFormControl-root .MuiFormHelperText-root")
    }

    get eyeIcon(){
        return $(".MuiIconButton-label .MuiSvgIcon-root")
    }

    randomName() {
        var text = "";
        var prefix = "";
        var alphaNumeric = "a";
        var alphabets = "l";
        for (var i = 0; i < 1; i++)
          text += alphaNumeric.charAt(
            Math.floor(Math.random() * alphaNumeric.length)
        );
        prefix += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
        var ranNum = this.randomNumbers();
        return text + prefix + ranNum;
    }

    signup(){
        browser.url(testData.weshop.homeurl);
        this.createAccountBtn.waitForVisible();
        this.createAccountBtn.click();
        this.welcomeText.waitForVisible();
        expect(this.welcomeText.getText()).to.eql(testData.signup.welcome);
        browser.pause(2000);
        this.firstName.click();
        this.firstName.setValue([testData.signup.firstname,'Enter'])
        this.lastName.click();
        this.lastName.setValue([testData.signup.lastname, 'Enter'])
        var email = testData.signup.email + this.randomName() + "@maildrop.cc";
        this.email.click();
        this.email.setValue([email, 'Enter'])
        browser.pause(4000);
        this.clickToContinue.waitForVisible();
        this.clickToContinue.click();
        expect(this.welcomeText.getText()).to.eql(testData.signup.createpassword);
        browser.pause(2000);
        this.password.waitForVisible();
        this.password.click();
        this.password.setValue([testData.signup.password, 'Enter'])
        browser.pause(2000);
        this.clickToContinue.click();
        expect(this.welcomeText.isVisible()).to.eql(true);
        this.day.waitForVisible();
        this.day.click();
        this.selectDay.waitForVisible();
        this.selectDay.click();
        browser.pause(1000);
        this.month.waitForVisible();
        this.month.click();
        this.selectMonth.waitForVisible();
        this.selectMonth.click();
        browser.pause(1000);
        this.year.waitForVisible();
        this.year.click();
        this.selectYear.waitForVisible();
        this.selectYear.click();
        this.clickToContinue.click();
        browser.pause(2000);
        expect(this.welcomeText.getText()).to.eql(testData.signup.genderStep);
        this.clickToContinue.click();
        browser.pause(2000);
        expect(this.welcomeText.getText()).to.eql(testData.signup.usernameStep);
        browser.pause(5000);
        this.clickToContinue.waitForVisible();
        this.clickToContinue.click();
        expect(this.welcomeText.getText()).to.eql(testData.signup.lastStep);
        this.useragrement.waitForVisible();
        this.useragrement.click();
        browser.pause(4000);
        this.clickToContinue.click();
    }

    returnEmail(){
        var email = testData.signup.email + this.randomName() + "@maildrop.cc";
        return email;
    }
}

export default new SignUp();