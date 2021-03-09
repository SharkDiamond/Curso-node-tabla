
const {crearArchivo}=require('./multiplicar.js');
const X = require('./yargs.js');




crearArchivo(X.base,X.listar,X.hasta).then((name) => {

console.log(name, "creado");

}).catch((error) => {

console.log(error);

})
