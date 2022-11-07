const precioVenta = 200;
let descuento;
const descuentoEstudiante = 0.2;
const descuentoTrainee = 0.5
const descuentoJunior = 0.85;

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const cantidadTickets = document.getElementById("cantidadTickets");
const categoria = document.getElementById("categoria");

console.log("Datos Cargados")
const botonResumen = document.getElementById("btnResumen");
const botonBorrar = document.getElementById("btnBorrar");
let precioMostrar = document.getElementById("precio");
precioMostrar.innerHTML = "$ "+precioVenta;
const total = document.getElementById("total");

const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

botonResumen.addEventListener("click", validarTodo);
botonBorrar.addEventListener("click", borrar);

// nombre.addEventListener("onchange", nombre.removeClass("alert alert-danger"));
// apellido.addEventListener("onchange", apellido.removeClass("alert alert-danger"));
// email.addEventListener("onchange", email.removeClass("alert alert-danger"));
// cantidadTickets.addEventListener("onchange", cantidadTickets.removeClass("alert alert-danger"));


function validarNombre() {
    let valido = true;
    if (nombre.value.length < 3) {
        // nombre.className = "alert alert-danger";
        alert("Ingrese un nombre válido (3 letras mínimo)");
        valido = false;
    }
    return valido;
}

function validarApellido() {
    let valido = true;
    if (apellido.value.length < 3) {
        //apellido.className = "alert alert-danger";
        alert("Ingrese un apellido válido (3 letras mínimo)");
        valido = false;
    }
    return valido;
}

function validarEmail() {
    let valido = true;
    if (!expRegular.test(email.value)) {
        alert("Ingrese un mail valido");
        valido = false;
        //email.className = "alert alert-danger";
    }
    return valido;
}

function validarCantidadTickets() {
    let valido = true;
    if (cantidadTickets.value.length < 1) {
        //cantidadTickets.className = "alert alert-danger";
        alert("Ingrese un numero mayor a 1");
        valido = false;
    }
    return valido;
}

function calculo() {
 switch (Number(categoria.value)) {
  case 1:
    descuento = descuentoEstudiante;
    break;
  case 2:
     descuento = descuentoTrainee;
    break;
  case 3:
     descuento = descuentoJunior;
    break;
  default:
    descuento = 1;
    break;
}
    let resultado = parseFloat(cantidadTickets.value) * precioVenta * descuento;
    
    total.innerHTML = "Total a Pagar: $ " + resultado;
}
function validarTodo() {
    if (validarNombre() & validarApellido() & validarEmail() & validarCantidadTickets()) {
        calculo();
    }
    
}

function borrar() {
    nombre.innerHTML = "";
    apellido.innerHTML = "";
    email.innerHTML = "";
    cantidadTickets.innerHTML = "";
    categoria.options[0].selected = 'selected';
    total.innerHTML = "Total a Pagar: $ ";
}