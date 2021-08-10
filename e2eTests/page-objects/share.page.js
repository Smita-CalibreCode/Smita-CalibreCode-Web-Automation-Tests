import Page from "./page";

class Share extends Page{

get otherprofile(){
    return $(".ks5vpi-5.bNKinf")
}
 
get ownprofile(){
    return $(".ks5vpi-5.bNKinf")
}

get postedcaption(){
    return $("div.MuiDialog-root.n3g8mq-0.pCJGG:nth-child(31) .sc-1v3mgku-0.joXdql .fullname-content.text-ellipsis:nth-child(1)")
}

}


export default new Share();