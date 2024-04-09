document.addEventListener("DOMContentLoaded", function(){
    const sumaForm = document.getElementById("sumaForm");
    const  num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultadoSpan = document.getElementById("resultado"); 

    document.getElementById("calcular").addEventListener("click", function(){
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        
        if(isNaN(num1) || isNaN(num2)){
            resultadoSpan.textContent ="Ingrese valores numericos";
        }else{
            const suma = num1 + num2
            resultadoSpan.textContent = suma
        };
    });

    });