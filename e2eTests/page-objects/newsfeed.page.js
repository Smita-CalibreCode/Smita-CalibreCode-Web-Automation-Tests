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

    get otherPostComent(){
        return $(".newsfeed-list-item:nth-child(3) .sc-1gpmt38-0.cCSJym:nth-child(3) .comment-create__row:nth-child(1) .sx8ryo-2.gljhMt .comment-create-input-textarea")
    }

    get postCommentBtn(){
        return $(" .newsfeed-list-item:nth-child(3) .sc-1gpmt38-0:nth-child(3) .MuiButtonBase-root .MuiButton-label")
    }

    get postedComment(){
        return $(".newsfeed-list-item:nth-child(3) .comment .bky81h-0.gEOQom:nth-child(1)")
    }
}

export default new newsfeed();

