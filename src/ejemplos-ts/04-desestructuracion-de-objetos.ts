// Desestructuración de objetos y arreglos

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number;
}
const reproductor:Reproductor={
    volumen:90,
    segundo:66,
    cancion:'Mañanitas',
    detalles:{
        autor:'cepillin',
        year:1978,
    }
}

const{volumen,segundo,cancion,detalles}=reproductor; //Dentro de las llaves se pone los objetos que queremos desestructurar
const{autor}=detalles;
console.log(`El volumen actual es: ${volumen}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`La canción actual es: ${cancion}`);
console.log(`El autor es: ${autor}`);

//Desestructuración de arreglos
const dbz:string[]=['Goku','Vegeta','Trunks','Yamcha'];
console.log(`Personaje 1: ${dbz[0]}`); //El 0 marca el índice y viene siendo el primer nombre
console.log(`Personaje 2: ${dbz[1]}`);
console.log(`Personaje 3: ${dbz[2]}`);
console.log(`Personaje 4: ${dbz[3]}`);

//Desestructurado
/*const[a,b,c,d]=dbz;
console.log(`Personaje 1: ${a}`); 
console.log(`Personaje 2: ${b}`);
console.log(`Personaje 3: ${c}`);
console.log(`Personaje 4: ${d}`);*/

const[a,,d]=dbz;
console.log(`Personaje 1: ${a}`); 
console.log(`Personaje 4: ${d}`);