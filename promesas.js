
const empleados = [

{
id:1,
nombre:"Gabriel"
},

{
id:2,
nombre:"Ana"
},

{
id:3,
nombre:"Juan"
}


];



const salarios = [

{
id:1,
salario:1000
},
{
id:2,
salario:1500
}


];




const getEmpleado = (id) => {


return  promesa = new Promise( (resolve, reject) => {

const empleado=empleados.find(e => e.id===id);

if (empleado) {

resolve(empleado);

}

else {

reject("no existe el empleado con ese id")


}




});





}

const getSalario = (id) => {

return Promesa=new Promise((resolve,rejet) => {

const salarioBuscado=salarios.find(elemento => elemento.id===id);


if (salarioBuscado) {

resolve(salarioBuscado);


}

else {

rejet("No hay salario para ese empleado");

}


}

)



}




const id = 3;


let nombre;

getEmpleado(id)
.then((empleado) => {
console.log(empleado.nombre);
  nombre=empleado.nombre;
  return getSalario(id)

})
.then(Salario => console.log("el empleado, ", nombre," tiene un salario de:",Salario.salario))
.catch((error) => console.log(error));






//getSalario(id).then( (salarioBuscado) => console.log(salarioBuscado)).catch( (err) => console.log(err) );
