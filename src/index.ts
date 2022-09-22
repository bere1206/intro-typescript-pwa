class Valores{
    valor1:number;
    valor2:number;
    valor3:number;
}

/*function ecuacion(a,b,c):void{
    console.log((-b-Math.sqrt(Math.pow(b,2)-(4*a*c))/(2*a)));
}*/

function ecuacionGeneral(a:number,b:number,c:number):number{
    return (-b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
}
console.log('La primera solución es: ');
console.log(ecuacionGeneral(-19,6,7))

function ecuacionGeneral2(a2:number,b2:number,c2:number):number{
    return (-b2-Math.sqrt(Math.pow(b2,2)-(4*a2*c2)))/(2*a2);
}
console.log('La segunda solución es: ');
console.log(ecuacionGeneral2(-19,6,7))