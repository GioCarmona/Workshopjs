/*OCULTAR ELEMENTOS CON UN BOTON*/
const div = document.getElementById("my-div");
const button = document.createElement("button");
button.textContent = "Click para ocultar";
button.addEventListener("click", () => {
    if(div.style.display === "none"){
        div.style.display = "block";
        div.textContent = "Nuevo texto al mostrarse";
        button.textContent= "Ocultar";        
    }else{
        div.style.display = "none";
        button.textContent = "Mostrar";
    }
});
document.body.appendChild(button);

