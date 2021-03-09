//Importando el modulo para el manejo de archivos
const archivo=require('fs');
const colors = require('colors');
//Funcion Para Hacer la operacion y crear el archivo de texto
const crearArchivo= async(base=5,listar,hasta) => {

  //Variable donde se van a escribir los datos
  let datos=``;
  let salida=``;

  //Variable para guardar el nombre del archivo
  const nombreArchivo=`./Salida/tabla-${base}.txt`;

  //Bucle de repeticion
  for (let i = 1; i <=hasta; i++){

    //Variable donde se hace la operacion de multiplicacion
    let operacion=base*i;

    //Escribiendo en la Variable de texto el resultado
datos+=colors.green(`${base}`)+colors.red(`X`)+colors.cyan(`${i}`)+colors.white(`=`)+colors.magenta(`${operacion}\n`)

  salida+=`${base}X${i}=${operacion}\n`;

}

//Verificando si el usuario paso true para listar la tabla de multiplicar
  if (listar) {

    //Imprimiento la tabla que se va a resolver
    console.log(colors.yellow("\n Tabla del:",base,"\n"));

    //Imprimiento la tabla
    console.log(datos);

}

  //Codigo a evaluar
  try{

    //Crando el crearArchivo
    archivo.writeFileSync(nombreArchivo,salida);

    //Imprimiento que se creo el archivo
    console.log(colors.yellow("se escribio en el archivo la tabla de multiplicar del"),base);

    //Retornando el nombre del archivo
    return nombreArchivo;

}

  //Codigo que se ejecuta si el codigo a evaluar falla
  catch (e) {

    //Imprimiendo que hubo un problema
    console.log("hubo un problema");

    //Imprimiendo el error
    console.log(e);

    //Retornando el error
    return e;

}




}

//Exportando la funcion
module.exports = {

crearArchivo

}
