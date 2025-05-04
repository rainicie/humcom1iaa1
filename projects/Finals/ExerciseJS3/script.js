function getResult() {
    var num = parseFloat(document.getElementById("num").value);
    var result = document.getElementById("result");

    result.innerHTML = "";

    result.innerHTML = "<b>" + num + " kilometer/s</b> is <b>" + num*100000 + " cm.</b>";
}