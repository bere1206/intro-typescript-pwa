/*interface Alumnos{
    nombre:string;
    edad:number;
    direccion:string;
    calle:string;
    pais:string;
    estado:string;
    mostrarDireccion:()=>void;
}*/

//function directorio(nombre:string,)

const AlumnoUTL:{
    nombre:'Mario',
    edad:23,
    direccion:{
        calle:'veracruz',
        pais:'MX',
        estado:'GTO'
    },
    mostrarDireccion(){
        return this.nombre+', '+this.direccion.estado+','+this.direccion.pais';
    }
}
const direccion=alumnnoUTL.mostrarDireccion();
console.log(direccion);

//Todos los objetos deben tener el tipado de datos