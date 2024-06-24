let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHML=document.querySelector(elemento);
    elementoHML.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);//cuando trae el elemento 'valorUsuario' trae el objeto =igualque querySelecto..pero yo no quiero el objeto quiere el valor/una de sus atributos .
  
    //console.log(numeroSecreto===numeroDeUsuario);//el triple igual es un operador de igualdad estricta..tanto el tipo de dato como el valor del dato.
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos==1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto.
        if (numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(`Numero generado:  ${numeroGenerado}`);
    console.log(`Lista de numero Sorteados : ${listaNumerosSorteados}`);
    //si ya sorteamos todos lo numeros mostrar mensaje
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posible');
    }else{
        //si el numeroGenerado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    
    //generar el numero aleatorio
    //Inicializar el númer intentos
    condicionesIniciales();
    //desabilitar el botón de juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();