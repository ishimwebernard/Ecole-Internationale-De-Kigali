var pr = document.getElementById('pr');
var cover = document.getElementById('cover');
var row1 = document.getElementById('row1');

const tweenMax = new TimelineMax();
tweenMax.fromTo(pr,1.5,{y:"-100%"},{y:"0%"})
        .fromTo(row1,1,{y:0},{opacity:1},"-=.1")
        .fromTo(cover,.3,{y:"100%"},{y:"0%"},"-=2.3");
internalServerLoad('dutiesParents', '../helperFiles/parentsrole.txt');
internalServerLoad('staffRoles','../helperFiles/staffrole.txt');
internalServerLoad('dutiesTeachers','../helperFiles/teachersrole.txt');
internalServerLoad('dutiesStudent','../helperFiles/studentsrole.txt');
function internalServerLoad(id,place){
   var client = new XMLHttpRequest();
   client.open('GET', place);
   client.onreadystatechange = function(){
           document.getElementById(id).innerHTML = client.responseText;
   }
   client.send();

}
function FRENCH(){
        var client = new XMLHttpRequest();
        client.open('GET', '..//helperFiles/strategyHelpFile.txt');
        client.onreadystatechange = function(){
                document.getElementsByClassName('content')[0].innerHTML = client.responseText;
        }
        client.send();
}