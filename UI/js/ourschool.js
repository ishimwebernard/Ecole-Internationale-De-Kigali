switchTab(0);
function switchTab(n){
    var _CARD = document.getElementsByClassName('CARD');
    var _CNAV = document.getElementsByClassName('gallerynavigatorItem');
    for(let _SAMPLECARD of _CARD){
      _SAMPLECARD.style.display = "none";
    }
    console.log(_CNAV);
    for(let _CCCRAD of _CNAV){
        _CCCRAD.style.color = "#000";
        _CCCRAD.style.background = "#FFF";
      }
      _CNAV[n].style.color = "#fff";
      _CNAV[n].style.background = "#000";
    _CARD[n].style.display = "block";
 
  }
  function FRENCH(){
    var _CARD = document.getElementsByClassName('CARD');
    _CARD[1].style.display = 'none';
    _CARD[2].style.display = 'none';
    var client = new XMLHttpRequest();
    client.open('GET','../helperFiles/ourSchoolFrench.txt');
    client.onreadystatechange = function(){
      document.getElementsByClassName('content')[0].innerHTML = String(client.responseText);

    }
    client.send();
    switchTab(0);

  }