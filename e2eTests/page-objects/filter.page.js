import Page from "./page";
import { expect } from 'chai';
import testData from "../constants/testData.json";

class Filter extends Page{

    get serachBar(){
        return $(".gs61pw-0.kEbIaA .search-input");
    }

    get suggestion(){
        return $(".sc-1fz54jw-1.gHQIQQ .typeahead-container__content__primary")
    }

    get priceDownArrow(){
        return $(".search-filter .gbhan4-0.closed:nth-child(1)")
    }

    get minPrice(){
        return $(".sc-1nkojsl-2.dzKmlI.search-filter .cclNMW:nth-child(1) .MuiInputBase-input")
    }

    get maxPrice(){
        return $(".sc-1nkojsl-2.dzKmlI.search-filter .cclNMW:nth-child(2) .MuiInputBase-input");
    }

    get updateResultsBtn(){
        return $(".MuiButtonBase-root.MuiButton-root.MuiButton-text.sc-1cwhfm1-0.eOrLmF .MuiButton-label");
    }

    get brandDownArrow(){
        return $(".search-filter .gbhan4-0.closed:nth-child(2)");
    }

    get brandOption(){ 
        return $(".sc-1nkojsl-2.dzKmlI.search-filter .gbhan4-0:nth-child(2) .checkbox-list li:nth-child(3) .utdc8v-0.jkcpfQ .label-wrapper")
    }

    get retailerDownArrow(){
        return $(".search-filter .gbhan4-0.closed:nth-child(3)")
    }

    get retailerOption(){
        return $(".sc-1nkojsl-2.dzKmlI.search-filter .gbhan4-0:nth-child(3) .checkbox-list li:nth-child(1)")
    }

    get clearAll(){
        return $(".sc-1nkojsl-2.dzKmlI.search-filter .gbhan4-0:nth-child(1) .content .clearAll:nth-child(2)")
    }
}

export default new Filter();
