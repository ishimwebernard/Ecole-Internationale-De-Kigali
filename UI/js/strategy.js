var pr = document.getElementById('pr');
var cover = document.getElementById('cover');
var row1 = document.getElementById('row1');

const tweenMax = new TimelineMax();
tweenMax.fromTo(pr,1.5,{y:"-100%"},{y:"0%"})
        .fromTo(row1,1,{y:0},{opacity:1},"-=.1")
        .fromTo(cover,.3,{y:"100%"},{y:"0%"},"-=2.3");
