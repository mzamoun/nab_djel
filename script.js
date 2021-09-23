site='file:///home/mourad/data/pro/projets_html/dr-n-benkari/'
title='Nabil Djellali';

    function gotoUrl(site) {
        //location.replace(site)
        //window.location.href = site;
    //       window.close();
    //       window.open(site);
        window.location.replace(site);
      }
    //////////  
    
    function loadIframe(idDiv, file) {

      $(idDiv).height($(window).height());
      $(idDiv).width($(window).width());

      $( window ).resize(function() {
           $(idDiv).height($(window).height());
           $(idDiv).width($(window).width());
       });

      $(idDiv).attr('src' , file);


     }

     //////////////////
     function loadDiv(idDiv, html) {
        $(idDiv).html(html);
     }

    //////////////////
     function isMobile() {
        return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ;
     } 
     
     IS_MOBILE=isMobile();

///////////////////////////////////////////////////////////////////////////////////////
function register() {
   alert('not implemented yet!');
}
//////////////////////

