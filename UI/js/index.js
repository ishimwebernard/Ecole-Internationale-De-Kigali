

const schoolLogo = document.getElementById("schoollogo");
var navgroup = document.getElementById('navgroup');
var slide = document.getElementById('slide');
var row2 = document.getElementById('row2');


const tl = new TimelineMax();

tl.fromTo(schoolLogo, 1.5, {x: "-100%"},{x:"0%", ease: Power2.easeInOut})
.fromTo(navgroup, 1, {opacity: 0}, {opacity: 1},"-=.5")
.fromTo(slide,2.5,{height:0},{height:"31rem",ease: Power2.easeInOut},"-=1.5");

//Row 2 Animation


function revealHideMobileMenu(){
    var mobilemenu = document.getElementById("mobilemenu");
    if(mobilemenu.style.display == "none"){
        mobilemenu.style.display = "grid";
    }else{
        mobilemenu.style.display = "none";
    }
}



window.addEventListener("scroll", function() {
     var elementTarget = row2;
     console.log("Scollin ...");
    if (window.scrollY < (elementTarget.offsetTop + elementTarget.offsetHeight+10)) {
        // var wc = document.getElementById('welcomesession');
        // var titles = document.getElementById('titles');
        // const row2Timeline = new TimelineMax();
        // row2Timeline.fromTo(wc,1,{y:"-100%"},{y:"0%"})
        // .fromTo(titles,1,{y:"100%"},{y:"0%"},"-=1");
        // console.log("Boom");
    }

    
  });