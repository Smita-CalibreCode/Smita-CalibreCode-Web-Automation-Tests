import Page from "./page";
import { expect } from 'chai';
import testData from "../constants/testData.json";


class Home extends Page{
get searchBar(){
    return $(".MuiInputBase-input.MuiOutlinedInput-input");
}

get searchIcon(){
    return $(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-adornedEnd.MuiOutlinedInput-adornedEnd");
}

get serachResults(){
    return $(".sort-block-search .hilight-text");
}

get welcome(){
    return $(".segment__container .i68usj-2.glgnnk:nth-child(2)")
}

}

export default new Home();
