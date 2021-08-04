import Page from "./page";

class Product extends Page{


get productSuggestion(){
    return $(".sc-1fz54jw-1.gHQIQQ:nth-child(1) .typeahead-container__content .typeahead-container__content__primary")
}

get showingResult(){
    return $(".sort-block-search .hilight-text")
}

get price(){
    return $(".search-pod:nth-child(1) .h47myf-6.dFwHVv .product-price")
}

get descp(){
    return $(".search-pod:nth-child(1) .h47myf-0.KVLiu span.desktop .h47myf-3.NgCYS .product.product-description")
}

get retailerName(){
    return $(".search-pod:nth-child(1) .sc-1932n6i-0.fLVmWj")
}

get share(){
    return $(".search-pod:nth-child(1) .sc-8k7yx-0.hHXjhl:nth-child(2)")
}

get copy(){
    return $(".MuiDialog-container:nth-child(3) .MuiButtonBase-root .MuiButton-label")
}
}

export default new Product();
