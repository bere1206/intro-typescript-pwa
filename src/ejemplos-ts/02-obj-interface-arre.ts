//Definición de un objeto
//Definición de interface

interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
}

//objeto ts
let alumno:Alumno={
nombre:'Juan',
matricula:123,
email:"juan@gmail.com"
}

let mascotas=['perro','gato','perico']

mascotas[1]='shsh';
mascotas.push()

let tem:(number | string)[]=[]
tem.push('nombre');
tem.push(22);

console.log(mascotas)
console.table(alumno)