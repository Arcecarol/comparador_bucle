
const generaArray = () => {
    let palabras = [];
    for (let i=0; i<60; i++){
        palabras.push ("elemento " + String(i))
    }
    return palabras;
}

const medidorFor = (arreglo) => {
    const start = new Date();
    for (let i = 0; i < arreglo.length; i++) {
        const elemento = arreglo[i];
        console.log(elemento);
    }
    const end = new Date() - start;
    //console.log(`Tiempo de ejecución ${end} ms`);

    return end;
};

const medidorForOf = (arreglo) => {
    const start = new Date();
    for (let elemento of arreglo) {
        console.log(elemento);
    }
    const end = new Date() - start;
    //console.log(`Tiempo de ejecución ${end} ms`);

    return end;
}

const medidorWhile = (arreglo) => {
    const start = new Date();
    
    let index = 0;
    while (index < arreglo.length) {
        const elemento = arreglo[index];
        console.log(elemento);
        index++;
    }
    const end = new Date() - start;
    //console.log(`Tiempo de ejecución ${end} ms`);

    return end;
};

const medidorDoWhile = (arreglo) => {
    const start = new Date();
    
    let index = 0;
    do {
        const elemento = arreglo[index];
        console.log(elemento);
        index++;
    } while (index < arreglo.length); 
    const end = new Date() - start;
    //console.log(`Tiempo de ejecución ${end} ms`);

    return end;
};

const medidorForEach = (arreglo) => {
    const start = new Date();

    arreglo.forEach((elemento) => {
        console.log(elemento);
    });
    const end = new Date() - start;
    //console.log(`Tiempo de ejecución ${end} ms`);

    return end;
};

const menu = (arreglo) => {

    const prompt = require('prompt-sync')(
    );
    let entradaUsuario = 0;
    do{
        console.log('================================');
        console.log('COMPARADOR DE BUCLES');
        console.log('================================');
        console.log('Selecciona tu opción:');
        console.log('1. FOR vs WHILE');
        console.log('2. DO WHILE vs WHILE');
        console.log('3. FOR OF vs WHILE');
        console.log('4. FOR EACH vs WHILE');
        console.log('5. FOR vs DO WHILE');
        console.log('6. FOR OF vs FOR EACH');
        console.log('7. DO WHILE vs FOR EACH');
        console.log('8. FOR OF vs DO WHILE');
        console.log('9. FOR EACH vs DO WHILE');
        console.log('10. FOR OF vs FOR');

        console.log('0. SALIR');
        entradaUsuario = prompt('Por favor, ingresa un número:');
        // Convertir la entrada a un número
        entradaUsuario = parseInt(entradaUsuario);
        console.log('Has seleccionado la opción: '+ entradaUsuario);

        //declaracion de variables
        let tiempoForOf = 0;
        let tiempoWhile = 0;
        let tiempoDoWhile = 0;
        let tiempoForEach = 0;
        let tiempoFor = 0;
        switch (entradaUsuario) {
            case 0:
                console.log("Bye");
                break;
            case 1:
                tiempoFor = medidorFor(arreglo);
                tiempoWhile = medidorWhile(arreglo);
                console.log('================================');
                console.log("Resultados for vs while");
                console.log(`tiempo for: ${tiempoFor} ms`);
                console.log(`tiempo while: ${tiempoWhile} ms`);
                console.log('================================');
                console.log('');
                prompt('Ingresa enter para continuar');

                break;

            case 2:
                tiempoDoWhile = medidorDoWhile(arreglo);
                tiempoWhile = medidorWhile(arreglo);
                console.log('================================');
                console.log("Resultados Do While vs while");
                console.log(`tiempo Do While: ${tiempoDoWhile} ms`);
                console.log(`tiempo while: ${tiempoWhile} ms`);
                console.log('================================');
                console.log('');
                prompt('Ingresa enter para continuar');
                break; 
                
            case 3:
                tiempoForOf = medidorForOf(arreglo);
                tiempoWhile = medidorWhile(arreglo);
                console.log('================================');
                console.log("Resultados For Of vs while");
                console.log(`tiempo For Of: ${tiempoForOf} ms`);
                console.log(`tiempo while: ${tiempoWhile} ms`);
                console.log('================================');
                console.log('');
                prompt('Ingresa enter para continuar');
                break;  
                
            case 4:
                tiempoForEach = medidorForEach(arreglo);
                tiempoWhile = medidorWhile(arreglo);
                console.log('================================');
                console.log("Resultados For Each vs while");
                console.log(`tiempo For Each: ${tiempoForEach} ms`);
                console.log(`tiempo while: ${tiempoWhile} ms`);
                console.log('================================');
                console.log('');
                prompt('Ingresa enter para continuar');
                break; 

            case 5:
                tiempoFor = medidorFor(arreglo);
                tiempoDoWhile = medidorDoWhile(arreglo);
                console.log('================================');
                console.log("Resultados For vs Do While");
                console.log(`tiempo For: ${tiempoFor} ms`);
                console.log(`tiempo Do While: ${tiempoDoWhile} ms`);
                console.log('================================');
                console.log('');
                prompt('Ingresa enter para continuar');
                break; 

            case 6:
                tiempoForOf = medidorForOf(arreglo);
                tiempoForEach = medidorForEach(arreglo);
                console.log('================================');
                console.log("Resultados For Of vs For Each");
                console.log(`tiempo For Of: ${tiempoForOf} ms`);
                console.log(`tiempo For Each: ${tiempoForEach} ms`);
                console.log('================================');
                console.log('');
                prompt('Ingresa enter para continuar');
                break; 

            case 7:
                tiempoDoWhile = medidorDoWhile(arreglo);
                tiempoForEach = medidorForEach(arreglo);
                console.log('================================');
                console.log("Resultados Do While vs For Each");
                console.log(`tiempo Do While: ${tiempoDoWhile} ms`);
                console.log(`tiempo For Each: ${tiempoForEach} ms`);
                console.log('================================');
                console.log('');
                prompt('Ingresa enter para continuar');
                break; 

            case 8:
                tiempoForOf = medidorForOf(arreglo);
                tiempoDoWhile = medidorDoWhile(arreglo);
                console.log('================================');
                console.log("Resultados For Of vs Do while");
                console.log(`tiempo For Of: ${tiempoForOf} ms`);
                console.log(`tiempo Do while: ${tiempoDoWhile} ms`);
                console.log('================================');
                console.log('');
                prompt('Ingresa enter para continuar');
                break;  

            case 9:
                tiempoForEach = medidorForEach(arreglo);
                tiempoDoWhile = medidorDoWhile(arreglo);
                console.log('================================');
                console.log("Resultados For Each vs Do while");
                console.log(`tiempo For Each: ${tiempoForEach} ms`);
                console.log(`tiempo Do while: ${tiempoDoWhile} ms`);
                console.log('================================');
                console.log('');
                prompt('Ingresa enter para continuar');
                break;

            case 10:
                tiempoForOf = medidorForOf(arreglo);
                tiempoFor = medidorFor(arreglo);
                console.log('================================');
                console.log("Resultados For Of vs For");
                console.log(`tiempo For Of: ${tiempoForOf} ms`);
                console.log(`tiempo For: ${tiempoFor} ms`);
                console.log('================================');
                console.log('');
                prompt('Ingresa enter para continuar');
                break;

            default:
                console.log("Opción incorrecta");
                 
        }

    }while(entradaUsuario !== 0);
    
}


let miArray = generaArray();
menu(miArray);
