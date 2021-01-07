

const schoolLogo = document.getElementById("schoollogo");
var navgroup = document.getElementById('navgroup');
var slide = document.getElementById('slide');
var row2 = document.getElementById('row2');
var slideIndex = 1;


const tl = new TimelineMax();

tl.fromTo(schoolLogo, 1.5, {x: "-100%"},{x:"0%", ease: Power2.easeInOut})
.fromTo(navgroup, 1, {opacity: 0}, {opacity: 1},"-=.5")
.fromTo(slide,2.5,{height:0},{height:"31rem",ease: Power2.easeInOut},"-=1.5");
showSlides();

//Row 2 Animation


function revealHideMobileMenu(){
    var mobilemenu = document.getElementById("mobilemenu");
    if(mobilemenu.style.display == "none"){
        mobilemenu.style.display = "grid";
    }else{
        mobilemenu.style.display = "none";
    }
}

  function showSlides() {
    const _SLIDEANIMATOR = new TimelineMax();
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    var target = slides[slideIndex-1];
    var targetParagraph = target.childNodes[3];
    slides[slideIndex-1].style.display = "block";
    _SLIDEANIMATOR.fromTo(target,1,{opacity: .7}, {opacity: 1})
    .fromTo(targetParagraph, 1, {y:"100%"},{y: "0%",ease: Power2.easeInOut},"-=1");
    
    
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }
  function switchTab(n){
    var _CARD = document.getElementsByClassName('CARD');
    var _CNAV = document.getElementsByClassName('gallerynavigatorItem');
    for(let _SAMPLECARD of _CARD){
      _SAMPLECARD.style.display = "none";
    }
    _CARD[n].style.display = "block";
    _SAMPLECARD[n].style.color = "#fff";
    _SAMPLECARD[n].style.background = "#000";
  }