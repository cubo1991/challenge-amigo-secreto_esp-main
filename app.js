// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos el array
let amigos = [];

//Llamamos a los elementos del HTML
let campoNombre = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

//Función para agregar amigos
let agregarAmigo = (e) => {    
e.preventDefault();
let nombreAmigo = campoNombre.value

if(nombreAmigo === ""){
    alert("Por favor, inserte un nombre");
    return;
} else{
    amigos.push(nombreAmigo);
    campoNombre.value = "";   
}
mostrarAmigos();
};

//Función para mostrar amigos
let mostrarAmigos = () => {
    listaAmigos.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
    
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    
    }
};

//Función para sortear amigo
sortearAmigo = () => {
let numeroAleatorio = Math.floor(Math.random() * amigos.length);
resultado.innerHTML = amigos[numeroAleatorio];


}


