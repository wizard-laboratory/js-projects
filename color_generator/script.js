function random() {
    var x = Math.floor(Math.random() * 366);
    var y = Math.floor(Math.random() * 366);
    var z = Math.floor(Math.random() * 366);
    var color = "rgb(" + x + "," + y + "," + z + ")";
    document.getElementById("color").style.background = color;
    document.getElementById("copy").innerHTML = "rgb(" + x + "," + y + "," + z + ")";
}