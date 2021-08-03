import Page from "./page";
import { expect } from 'chai';
import testData from "../constants/testData.json";

class Post extends Page{


get recommend(){
    return $(".pod-content__secondary .pod-content__secondary__item:nth-child(1)")
}

get recommendProductHeading(){
    return $(".MuiButtonBase-root:nth-child(1) .MuiTab-wrapper")
}

get search(){
    return $("input[placeholder='Search the product you want to recommend…']")
}

get serachIcon(){
    return $(".sc-4hn5pq-0.cKaPtE .sc-17wdton-0.jYIFlL.sc-4hn5pq-1.bfrwUC:nth-child(1)")
}

get addToPostBtn(){
    return $(".search-pod:nth-child(1) .sc-8k7yx-5.sEMcR .sc-8k7yx-4.cNAOnU")
}

get nextBtn(){
    return $(".dpjUwJ:nth-child(3) .MuiButton-label")
}

get thirdStep(){
    return $(".MuiStep-root.MuiStep-horizontal:nth-child(5)")
}

get video(){
    return $(".element.element--video")
}

get OkBtn(){
    return $(".sc-1cwhfm1-1.kRFMej .MuiButton-label")
}

get submitBtn(){
    return $(".MuiButtonBase-root.MuiButton-root.MuiButton-text.sc-1f7myeh-1 .MuiButton-label")
}

get videoUrl(){
    return $("input[placeholder='Paste video URL']")
}

get newPost(){
    return $(".newsfeed-list-item:nth-child(3) .user-card-content__secondary.caption.text-ellipsis:nth-child(3)")
}

get postOne(){
    return $(".newsfeed-list-item:nth-child(3) .sc-1c1deov-0.ivmtAq .context")
}

get postTwo(){
    return $(".newsfeed-list-item:nth-child(4) .sc-1c1deov-0.ivmtAq .context")
}

get postThree(){
    return $(".newsfeed-list-item:nth-child(5) .sc-1c1deov-0.ivmtAq .context")
}

get askAQuestion(){
    return $(".pod-content__secondary .pod-content__secondary__item:nth-child(2)")
}

get askaquestionHeading(){
    return $(".MuiButtonBase-root:nth-child(2) .MuiTab-wrapper")
}

get askingAboutSpecificPrd(){
    return $(".MuiButtonBase-root.MuiButton-root.MuiButton-text.sc-7gsu7d-3:nth-child(1)")
}

get lookingForRecomd(){
    return $(".MuiButtonBase-root:nth-child(3)")
}

get pleaseHelpMeToFind(){
    //return $(".question-editor-caption__container textarea:nth-child(1)")
     //return $(".z2assy-2.QcYzO .question-editor-caption textarea")
     return $(".z2assy-2.QcYzO .question-editor-caption> div textarea")
}

get postAQueBtn(){
    return $(".MuiButtonBase-root.MuiButton-root.MuiButton-text.sc-1cwhfm1-0.esnvJk .MuiButton-label")
}


insertText(text) {
    document.getElementById("description").value= text;
}

get weshoptext(){
    return $(".z2assy-8.hDjfXs");
}
}

export default new Post();