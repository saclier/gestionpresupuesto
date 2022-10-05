function calcularPromedio(){

    var num1,num2;
    
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    
    promedio = (num1 + num2)/2;
    
    document.getElementById("pprom").innerHTML= promedio;
    
    }