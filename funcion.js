function calcularPromedio(){

    var a,b;
    
    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);
    
    promedio = (a + b)/2;
    
    document.getElementById("pprom").innerHTML= promedio;
    
    }