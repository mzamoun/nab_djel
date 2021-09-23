

function showSection1() {
    // loadDiv('#page', getCompoVideo()) ;

    var html = `
    <div id="section1" class="section section-video" data-section-name="01">
    <video class="background-video" poster="https://www.dorisgroup.com/wp-content/uploads/2019/04/cover.jpg" id="bgvid" playsinline autoplay muted loop>
		<source src="https://www.dorisgroup.com/wp-content/uploads/2019/05/DORIS-LQ-1.mp4" type="video/mp4">
	</video>
    <article class="cover cover-lg" >
        <div class="content">
                        <h1 class="has-badge-lg animation" data-animation-type="fadeInDown"><img src="https://www.dorisgroup.com/wp-content/uploads/2019/05/doris-group-min.png" width="550px"/><br> <em>                           engineering for energy</em></h1>
            <p class="animation" data-animation-type="fadeInUp">Challenging conventional thinking</p>
            <a id="move_to_section2" class="link link-green animation" data-animation-type="fadeInRight"><span>More information</span></a>
        </div>
        
    </article>
    <!-- /.cover -->
</div>
    `;

    return html;
    
}

function showSection2() {
    // loadDiv('#page', getCompoVideo()) ;

    var html = `
    <div id="section2" class="section section-covers" data-section-name="02">
    <div class="covers">
        <article class="cover cover-md" style="background-image: url('https://www.dorisgroup.com/wp-content/uploads/2019/03/oil-gas.gif');">
            <a href="oil-gas/" data-animation-type="fadeInRight" class="cover-link"></a>
            <div class="bg-opacity" style="opacity:0.2"></div>
            <div class="content">
                <i class="title-flame animation" data-animation-type="fadeInDown"></i>
                <h2 class="animation" data-animation-type="fadeInDown">Oil & Gas</h2>
                <p class="animation" data-animation-type="fadeInUp">Over 50 years of excellence</p>
            </div>
            <a href="oil-gas/" class="link animation" data-animation-type="fadeInRight"><span>More information</span></a>
        
        </article>
        <!-- /.cover -->
        <article class="cover cover-md" style="background-image: url('https://www.dorisgroup.com/wp-content/uploads/2019/03/renewable.gif');">
                <a href="renewable/" data-animation-type="fadeInRight" class="cover-link"></a>
                <div class="bg-opacity" style="opacity:0.4"></div>
                <div class="content">
                    <i class="title-flash animation" data-animation-type="fadeInDown"></i>
                    <h2 class="animation" data-animation-type="fadeInDown">Renewables</h2>
                    <p class="animation" data-animation-type="fadeInUp">Over 20 years of excellence</p>
                </div>
                <a href="renewable/" class="link animation" data-animation-type="fadeInRight"><span>More information</span></a>
            </article>
        <!-- /.cover -->
    </div>
    <!-- /.covers -->
    <div class="expertise">
        <div class="wrap ">
            <div class="content">
                <!-- <i class="title-halftriangle"></i> -->
                                    <h2 class="has-badge animation" data-animation-type="fadeInDown">OUR <br> <em>EXPERTISE</em></h2>
                <p class="animation" data-animation-type="fadeInUp">Thanks to our specialised engineers located worldwide and their collaboration mindset, DORIS Group pushes the boundaries of energy production</p>
            </div>
        </div>
        <!-- /.wrap -->
        <div class="post-wrap ">
            <div class="post" style="background-image: url('https://www.dorisgroup.com/wp-content/uploads/2019/03/expertise.gif');">
                <a href="expertise/" class="cover-link"></a>
                <div class="bg-opacity" style="opacity:0.2"></div>
                <div class="plain">
                    <h3>expertise</h3>
                    <a href="expertise/" class="btn btn-transparent"><span>More information</span></a>
                </div>	
            </div>
            <!-- /.post -->
            
            <div class="post" style="background-image: url('https://www.dorisgroup.com/wp-content/uploads/2019/05/2010_06_11_SHP_02-Home.jpg');">
                <a href="https://www.dorisgroup.com/Project/" class="cover-link"></a>
                <div class="bg-opacity" style="opacity:0.1"></div>
                
                <div class="plain">
                    <h3>projects</h3>
                    <a href="https://www.dorisgroup.com/Project/" class="btn btn-transparent"><span>More information</span></a>
                </div>
                
            </div>
            
            <!-- /.post -->
        </div>
        <!-- /.wrap -->
    </div>
    <!-- /.expertise -->
</div>
    `;

    return html;
    
}

var tabSections = [ showSection1() ,  showSection2() ];
// Variable to hold the current section index
var currentIndex = 0;
var pageIndex = 0;

function onscroll(direction) {

    var acc = $("#acceuil");
    var isAcc = false;
    if(acc) isAcc = true; 
    
    if(!isAcc) return;

    if (direction > 0) {
        // Go to next
        // Increase the section pointer
        currentIndex++;
    } else {
        // Go to prev
        // Decrease the section pointer
        currentIndex--;
        // Get the previous section
    }

    if(currentIndex<0) currentIndex = 0;
    else if(currentIndex>tabSections.length-1) currentIndex = tabSections.length-1;

    if(currentIndex != pageIndex) {
        var id="#page";
        // $(id).fadeOut(100);
        loadDiv(id, tabSections[currentIndex]) ;
        // $(id).fadeIn(1700);
        $(id).fadeIn("slow");
        pageIndex = currentIndex;
    }
}

function showAcc() {
    isAcc = true;
    var idPage = "#page"

    if(IS_MOBILE) {
        var html = '<div id="acceuil" class="acceuil" > <br>';
        for(var i = 0; i<tabSections.length; i++) {
            html += tabSections[i] + '<br>';
        }
        html += '</div>'
        loadDiv(idPage, html) ;
    }else {
        currentIndex=0;
        loadDiv(idPage, tabSections[currentIndex]) ;
        document.addEventListener("wheel",
            function(event) {
                event.preventDefault();
                onscroll(event.deltaY);
            },
            { passive: false }
        );

        $(document).keyup(function(event) {
            // if (event.code == "ARROWDOWN") {direction = 1;}  //keyCode = 40
            // if (event.code == "ARROWUP") direction = -1;     //keyCode = 38

            onscroll(event.keyCode - 39);
        });

    }

}


