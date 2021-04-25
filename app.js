function onSubmit(){
    let n = document.getElementById("Name").value;
    let g = document.getElementById("Gamertag").value;
    let s = document.getElementById("System").value;
    let a = document.getElementById("Game").value;
    let name  = n;
    let gamertag = g;
    let systemSelect = s;
    let gameSelect = a;
    document.getElementById("name-output").innerHTML = "Name: " + name;
    document.getElementById("gamertag-output").innerHTML = "Gamertag: " + gamertag; 
    document.getElementById("system-output").innerHTML = "System: " + systemSelect;
    document.getElementById("game-output").innerHTML = "Game: " + gameSelect;
 }
