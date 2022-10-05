function calcularPromedio(){

    var a,b;
    
    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);
    
    prom = (a + b)/2;
    
    document.getElementById("pprom").innerHTML= prom;
    
    }