const Y = require('yargs').option('b',{
alias:"base",
type:"number",
demandOption:true,
describe:"La base para elegir la tabla de multiplicar"

}).check((argv,options) => {

//console.log("yargs",argv);

if (isNaN(argv.b)) {

throw "la base  tiene que ser un numero";


}

return true;

}).option('l',{
alias:"listar",
type:"boolean",
default:false,
describe:"Para Mostrar la tabla de multiplicar con su resultado"
}).option('h',{
alias:"hasta",
type:"number",
default:10,
describe:"Para saber hasta donde se va a ahcer al tabla de multiplicar"
}).check((argv,options) => {

if (isNaN(argv.h)) {

  throw "El limite tiene que ser un un numero";


}

return true;

}).argv;


module.exports = Y;
