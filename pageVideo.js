
    function getCompoVideo() {
      // var src="res/Movie_combined_harat_Trim.mp4"
       var src="https://www.dorisgroup.com/wp-content/uploads/2019/05/DORIS-LQ-1.mp4";

        var s = 
          '<div id="Acc" style="width: 100%; ">'
        +  ' <video id="myVideo" autoplay muted loop >'
        +  '    <source src="'+src+'" type="video/mp4">'
        +   '   Your browser does not support HTML5 video.'
        + '  </video> '
        + '  <div id="content" class="content">'
        +       getCompoTitleMenusMilieu()
        + '  </div>'
      + '  </div>'
      ;
      return s;
    }

    function getCompoTitleMenusMilieu() {

        var btns = '';
        for (var i=0; i<pagesObj.length; i++) {
            var p = pagesObj[i];
            var label = imagesPages[p].label;
           // console.log(label);
            btns = btns + '   <button id="btn_' + p + '" class="btnMenu" onclick="showPage(\''+p+'\');" >'+label+'</button>';
        }

        var s = 
        '  <div>'
      +  '      <div id="title" style="font-size: 40px;"> '+title+' </div>'
      +         btns
      + '  </div>'
      ;   
      
      return s;
    }

   

        //////////

  function onPause() {
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("btnPause");
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }