function getResult() {
    var num = parseFloat(document.getElementById("num").value);
    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");
    var count = 0;

    result1.innerHTML = "";
    result2.innerHTML = "";

    //ODD OR EVEN
    if (num%2==0) {
        result1.innerHTML = "THE NUMBER IS <b>EVEN</b>";
    }
    else {
        result1.innerHTML = "THE NUMBER IS <b>ODD</b>";
    }

    //COMPOSITE OR PRIME

    if (num <=1) {
        result2.innerHTML = "<b>INVALID</b>";
    }
    else {
        for(i=1; i<=num;i++) {
            if(num%i==0) {
                count++;
            }
        }
        if (count<=2) {
            result2.innerHTML = "THE NUMBER IS <b>PRIME</b>";
        }
        else {
            result2.innerHTML = "THE NUMBER IS <b>COMPOSITE</b>";
        }
    }

}