
function getCompoMenus() {

    var btns = '';
    for (var i=0; i<pagesObj.length; i++) {
        var p = pagesObj[i];
        var label = imagesPages[p].label;
        // console.log(label);
        btns = btns + ' <li class="active"> <button id="btnMenu_"' + p +'" class="btnMenu" onclick="showPage(\''+p+'\');" >'+label+'</button> </li>';
    }
    // btns = btns + ' <li > <button id="btnRegister" class="btnMenu" onclick="register()" >Register</button> </li> ';

    var s = btns ;   
    
    return s;
    
} 

function showMenus() {

}