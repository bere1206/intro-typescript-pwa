interface Numeros{
    primerNum:number;
    segundoNum:number;
    tercerNum:number;
}

const formula:Numeros={
    primerNum:0,
    segundoNum:0,
    tercerNum:0,
}

function calcularFormula(numeros:Numeros[]):number{
    let resultado=0;
}
//const{primerNum,segundoNum,tercerNum}=formula;

console.log(`Ingrese el primer número: `);
const stdin=process.openStdin();
stdin.addListener("data", (data)=>{
    //console.log("")
})