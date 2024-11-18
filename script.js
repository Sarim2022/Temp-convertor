function c2f(){
    var n = parseFloat(document.getElementById("txt").value);
   
    var r = (n * 9/5) + 32;
    document.getElementById("result").innerHTML = r.toFixed(2) + " °F";
}
