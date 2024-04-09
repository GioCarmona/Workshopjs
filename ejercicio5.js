/* Enviar mensajes a la consola y recibir respuesra*/
const input = document.getElementById("my-input");
input.addEventListener("change", ()=>{
    const value = input.value;
    console.log(value); 
    alert("Bien hecho");
});