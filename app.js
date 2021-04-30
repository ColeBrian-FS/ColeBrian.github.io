function onSubmit(){
    let n = document.getElementById("Name").value;
    let g = document.getElementById("Gamertag").value;
    let s = document.getElementById("System");
    let a = document.getElementById("Game");
    let name  = n;
    let gamertag = g;

    let results1 = s.options[s.selectedIndex].text;
    let results2 = a.options[a.selectedIndex].text;
    document.getElementById("name-output").innerHTML = "Name: " + name;
    document.getElementById("gamertag-output").innerHTML = "Gamertag: " + gamertag; 
    document.getElementById("system-output").innerHTML = "System: " + results1;
    document.getElementById("game-output").innerHTML = "Game: " + results2;
 }

 function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }