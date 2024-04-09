document.addEventListener("DOMContentLoaded", function(){
    const trianguloForm = document.getElementById("trianguloForm");
    const baseInput = document.getElementById("base");
    const alturaInput = document.getElementById("altura");
    const resultadoSpan = document.getElementById("resultado");

    document.getElementById("calcular").addEventListener("click", function(){
        const base = parseFloat(baseInput.value);
        const altura = parseFloat(alturaInput.value);

        if(isNaN(base) || isNaN(altura)){
            resultadoSpan.textContent="Ingrese valores numericos";
        }else{
            const area = base * altura;
            resultadoSpan.textContent= area; 
            /*Para el resultado se pueden usar nomenclaturas como: +area, $(area) que son de uso más profesional*/
        };


    });

});