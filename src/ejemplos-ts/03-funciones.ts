//Funciones
//void indica que no regresará nada
function sumar(a,b):void{ //a,b son los parámetros
    console.log(a+b);
}

const resultado=sumar('Isela','Cortes');
console.log(resultado)

function sumar2(n1:number,n2:number):number{ //El number fuera del paréntesis Indica qué tipo de dato va a regresar la función
    return n1+n2;
}

console.log(sumar2(6,3))

function multiplicar(n1:number,otronumero:number,base:number=0):number{ //El ? significa que el parámetro es opcional
    let tem=n1*base; //Se almacena en tem
    return tem;
}

console.log(multiplicar(3,5));



interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota:Mascota, x:number):void{
    mascota.edad+=x; //+= es para simplificar la suma de mascota + edad
    console.log(mascota);
}

const nuevaMascota:Mascota={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('La edad es: ',this.edad);
    },
}
calcular(nuevaMascota,3);