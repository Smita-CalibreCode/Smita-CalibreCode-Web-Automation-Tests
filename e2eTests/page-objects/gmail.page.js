import Page from "./page";
import { expect } from 'chai';


class Gmail extends Page{

    get email_input(){
        return $("input[placeholder='Enter your inbox here']")
    }

    get emailForwardArrow() {
        return $("button[title='Check Inbox @yopmail.com']")
    }

    get refreshForNewMails() {
        return $(".wminboxheader #refresh")
    }

    checkinbox_changeiframe(checkemail){
        this.email_input.waitForVisible()
        expect(this.email_input.isVisible()).to.eql(true)
        this.email_input.setValue(checkemail)
        this.emailForwardArrow.waitForVisible()
        this.emailForwardArrow.click()
        browser.pause(5000)
        this.refreshForNewMails.waitForVisible()
        this.refreshForNewMails.click()
        const frameValue = browser.element('#ifmail').value;
        browser.frame(frameValue);
        browser.pause(2000);
    }
}

export default new Gmail();
