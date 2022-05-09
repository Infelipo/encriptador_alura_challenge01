var botonEncriptar = document.querySelector("#boton-encriptar");
var botonDesencriptar = document.querySelector("#boton-desencriptar");
var botonCopiar = document.querySelector("#boton-copiar");
var imagen = document.querySelector("#imagen");

botonEncriptar.addEventListener("click", function(evento) {
    evento.preventDefault();
    var textoEntrada = document.querySelector(".texto-entrada").value;
    console.log(textoEntrada);

    var textoSalida = encriptarTexto(textoEntrada);
    console.log(textoSalida);   

    var cajaSalida = document.querySelector("#texto-salida");
    cajaSalida.textContent = textoSalida;

    mostrarBotonCopiar(botonCopiar, cajaSalida, imagen);

});


botonDesencriptar.addEventListener("click", function(evento) {
    evento.preventDefault();
    var textoEntrada = document.querySelector(".texto-entrada").value;
    console.log(textoEntrada);

    var textoSalida = desencriptarTexto(textoEntrada);
    console.log(textoSalida);

    var cajaSalida = document.querySelector("#texto-salida");
    cajaSalida.textContent = textoSalida;

    mostrarBotonCopiar(botonCopiar, cajaSalida, imagen);

});

botonCopiar.addEventListener("click", function(evento) {
    evento.preventDefault();
    var textoSalida = document.querySelector("#texto-salida").value;
    console.log(textoSalida);
    
    document.querySelector(".texto-entrada").value = textoSalida;      

});

function encriptarTexto(texto) {
    var encriptado = "";
    
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            encriptado += "ai";
        } else if (texto[i] === "e") {
            encriptado += "enter";
        } else if (texto[i] === "i") {
            encriptado += "imes";
        } else if (texto[i] === "o") {
            encriptado += "ober";
        } else if (texto[i] === "u") {
            encriptado += "ufat";
        } else {           
            encriptado += texto[i];
        }
    }
    return encriptado;
}

function desencriptarTexto(texto) {
    var palabra = "";
    var palabra1 = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a" && palabra1 === "") {
            palabra += texto[i];
            palabra1 = "ai";
        }
        else if (texto[i] === "i" && palabra1 === "ai") {
            palabra1 = "";
        }
        else if (texto[i] === "e" && palabra1 === "") {
            palabra += texto[i];
            palabra1 = "enter";
        }
        else if (texto[i] === "n" && palabra1 === "enter") {
            palabra1 = "enter";
        }
        else if (texto[i] === "t" && palabra1 === "enter") {
            palabra1 = "enter";
        }
        else if (texto[i] === "e" && palabra1 === "enter") {
            palabra1 = "enter";
        }
        else if (texto[i] === "r" && palabra1 === "enter") {
            palabra1 = "";
        }
        else if (texto[i] === "i" && palabra1 === "") {
            palabra += texto[i];
            palabra1 = "imes";                        
        }
        else if (texto[i] === "m" && palabra1 === "imes") {
            palabra1 = "imes";
        }
        else if (texto[i] === "e" && palabra1 === "imes") {
            palabra1 = "imes";            
        }
        else if (texto[i] === "s" && palabra1 === "imes") {
            palabra1 = "";     
        }
        else if (texto[i] === "o" && palabra1 === "") {
            palabra += texto[i];
            palabra1 = "ober";
        }
        else if (texto[i] === "b" && palabra1 === "ober") {
            palabra1 = "ober";
        }
        else if (texto[i] === "e" && palabra1 === "ober") {
            palabra1 = "ober";
        }
        else if (texto[i] === "r" && palabra1 === "ober") {
            palabra1 = "";
        }
        else if (texto[i] === "u" && palabra1 === "") {
            palabra += texto[i];
            palabra1 = "ufat";
        } 
        else if (texto[i] === "f" && palabra1 === "ufat") {
            palabra1 = "ufat";
        } 
        else if (texto[i] === "a" && palabra1 === "ufat") {
            palabra1 = "ufat";
        }
        else if (texto[i] === "t" && palabra1 === "ufat") {
            palabra1 = "";
        }

        else {
            palabra += texto[i];
        }
    }
    return palabra;
}

function mostrarBotonCopiar(botonCopiar, cajaSalida) {
    botonCopiar.style.display = "initial"; 
    cajaSalida.style.display = "initial";
    imagen.style.display = "none";
}






