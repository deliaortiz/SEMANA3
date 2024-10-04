// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
    function despedir(){
        console.log("Adios");
    }
despedir();

// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    function multiplicarPorDos(numero){
        return numero *2;
    } 
    let numero = multiplicarPorDos(5);
    console.log(numero);
multiplicarPorDos(2);
// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    function esMayorDeEdad(edad){
        if(edad>18){
            return true;
        }else{
            return false;
        }
    }

console.log(esMayorDeEdad(20));
// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
    function multiplicar(a,b){
        return a*b
    }
    const resultadomulti = multiplicar(2,4);
    console.log(resultadomulti);

// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
    function saludarPersonalizado(nombre, apellido){
        console.log("Soy: "+nombre+" "+apellido);
    }
saludarPersonalizado("Delia","Ortiz");
// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    function calcularPotencia(base, exponente){
        return base ** exponente;
    }
    const resultado=calcularPotencia(2,3);
    console.log(resultado)
calcularPotencia(2,3);
// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.

    function restar(a,b){
        return a-b;
    }
    const oper = restar(5,2);
    console.log(oper);
restar(5,2);

// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    function dividir(a,b){
        return a/b;
    }
    const division = dividir(10,2);
    console.log(division)
dividir(10,2);
// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `funcionMultiplicar`.
    const multiplicacion = function(a,b){
        return a*b;
    }
    const ope = multiplicacion(2,5);
console.log (ope);

// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
    const saludar = function(nombre){
        return `Hola, ${nombre}!`;
    }
    
    console.log(saludar("Delia"));


// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
    const esPar = function(numero){
        if(numero%2===0){
            console.log(true);
        }else {
            console.log(false);
        }
    }
    esPar(4);
// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
    const multiplicarFlecha = (a,b) =>{
        return a*b
    }
    const resultadoflecha = multiplicarFlecha(5,3);
    console.log(resultadoflecha);

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
    const saludarFlecha = (nombre)=>
        `Hola, ${nombre}`
    
    const nombreSaludo = saludarFlecha("Delia");
    console.log(nombreSaludo);

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea=(radio) => Math.PI *(radio ** 2);
    console.log(calcularArea(2));

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    if(n==1){
        return 1;
    }
    return n+suma(n-1);
}
console.log(suma(4));

// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
    if(n===0){
        return 0;
    }else if(n===1){
        return 1;
    }else{
        return fibonacci (n-1)+fibonacci(n-2);
    }
} 
const resul = fibonacci(6);
console.log(`fibonasi(6)-> ${resultado}`)
// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    if(n===0)return 1;
        return n * factorial(n-1);
    
}
console.log(factorial(1));

// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    if(base>0){
        return base ** exponente;
    }
}
    const calpotencia = potencia(2,3)
console.log(potencia(2,3))


// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    functionMultiplicar,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};
