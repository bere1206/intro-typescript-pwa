class Valores{
    valor1:number;
    valor2:number;
    valor3:number;
}

function ecuacion(a,b,c):void{
    console.log((-b-Math.sqrt(Math.pow(b,2)-(4*a*c))/(2*a)));
}

function ecuacionGeneral(a:number,b:number,c:number):number{
    return ((-b-Math.sqrt((b*b)-4*a*c))/(2*a));
}

console.log(ecuacionGeneral(19,6,7))