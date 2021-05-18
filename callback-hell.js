
const empleados = [
    {
        id: 1,
        nombre: "Ferando"
    },
    {
        id: 2,
        nombre: "Jonathan"
    },
    {
        id: 2,
        nombre: "Pedro"
    }

];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 3,
        salario: 2000
    }

];

const getEmpleado = (id) =>{

    const empleado = empleados.find(e => e.id ===id);//find es un collback que se ejecuata aqui

    if(empleado){
        return empleado.nombre;
    }
    else{
        return `Empleado con id ${id} no existe`;
    }
}

console.log(getEmpleado(2));

const getSalario = (id, callback) =>{
    const salario = salarios.find(e => e.id === id);

    if(salario){
        return salario.salario;
    }
    else{
        return `Identificador ${id} a un salario no existe `;
    }
}

console.log(getSalario(2));
