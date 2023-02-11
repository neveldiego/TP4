const readLineSync= require("readline-sync");


let a= "abuelo";
let arr2=[3, "perro", "gato", "juan", "abuelo", 75];

function buscar(arr2, a){

    if(arr2.indexOf(a)){
        
        console.log("Elemento encontrado en la posicion "+ arr2.indexOf(a))
    }else{
        console.log("Elemento no encontrado")
    }
}
buscar(arr2, a)