import Page from "./page";
import { expect } from 'chai';
import testData from "../constants/testData.json";

class newsfeed extends Page{

    get logo(){
        return $(".nav-main-logo.nav-main-item")
    }

    get feed(){
        return $(".sc-1v1uga8-2.fyeqSL.nav-main-item.nav-main-item-add-post")
    }

    get detailsBtn(){
        return $(".newsfeed-list-item:nth-child(3) .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-3:nth-child(2)")
    }

    get like(){
        return $(".newsfeed-list-item:nth-child(3) #active-love")
    }
}

export default new newsfeed();

