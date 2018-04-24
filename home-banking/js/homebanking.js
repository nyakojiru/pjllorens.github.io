//Declaración de variables
var nombreUsuario = "Esteban Quito";
var saldoCuenta = 5000;
var limiteExtraccion = 1000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var stringCambiar = prompt("Ingrese el nuevo limite de extraccion");
  var valorCambiar = parseInt(stringCambiar);
  var typeCambiar = isNaN(stringCambiar); //Utilice isNaN porque typeof complicaba con prompt que siempre es string, para diferenciar si es numero o no.
  if (stringCambiar == null || stringCambiar == false) {
        return;
  }
  if (typeCambiar == false) {
    limiteExtraccion = valorCambiar;
    actualizarLimiteEnPantalla()
    alert("Tu nuevo limite de extraccion es: $" + limiteExtraccion);
  }
  else{
    alert("Solo numeros son permitidos");
  }
}

function extraerDinero() {
  var stringExtraer = prompt("Ingrese el monto a extraer");
  var restaExtraer = parseInt(stringExtraer);
  var saldoAnterior = saldoCuenta;
  var multiploCien = restaExtraer % 100;
  var typeExtraer = isNaN(stringExtraer);
  if (stringExtraer == null || stringExtraer == false) {
        return;
  }
  if (typeExtraer == false) {
    if (restaExtraer > saldoCuenta){
      alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
    }
    else if (restaExtraer > limiteExtraccion) {
      alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion.");
    }
    else if (multiploCien !== 0){
      alert("Solo puedes extraer billetes de 100.");
    }
    else if (restaExtraer < saldoCuenta){
      restarDinero(restaExtraer);
      actualizarSaldoEnPantalla();
      alert("Has retirado: $" + restaExtraer + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + saldoCuenta);
    }
  } else {
    alert("Solo numeros son permitidos");
  }
}

function depositarDinero() {
  var stringDepositar = prompt("Ingrese el monto a depositar");
  var sumaDepositar = parseInt(stringDepositar);
  var saldoAnterior = saldoCuenta;
  var typeDepositar = isNaN(stringDepositar);
  if (stringDepositar == null || stringDepositar == false) {
        return;
  }
  if (typeDepositar == false) {
    sumarDinero(sumaDepositar);
    actualizarSaldoEnPantalla();
    alert("Has depositado: $" + sumaDepositar + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + saldoCuenta);
  } else {
    alert("Solo numeros son permitidos");
  }
}

function pagarServicio() {
  var Agua = 350;
  var Luz = 210;
  var Internet = 570;
  var Telefono = 425;
  var servicioAPagar = prompt("Ingrese el numero que corresponda con el servicio que queres pagar\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Telefono");
  var typePagar = isNaN(servicioAPagar);
  if (servicioAPagar == null || servicioAPagar == false) {
        return;
  }
  if (typePagar == false) {
    switch (servicioAPagar){
      case "1":
        if (saldoCuenta < Agua){
          alert("No hay suficiente saldo en tu cuenta para pagar el servicio");
        }
        else {
          saldoAnteriorAgua = saldoCuenta;
          saldoCuenta -= Agua;
          actualizarSaldoEnPantalla();
          alert("Has pagado el servicio de Agua" + "\nSaldo anterior: $" + saldoAnteriorAgua + "\nDinero descontado: $" + Agua + "\nSaldo actual: $" + saldoCuenta);
        }
      break;
      case "2":
      if (saldoCuenta < Luz){
        alert("No hay suficiente saldo en tu cuenta para pagar el servicio");
      }
      else {
        saldoAnteriorLuz = saldoCuenta;
        saldoCuenta -= Luz;
        actualizarSaldoEnPantalla();
        alert("Has pagado el servicio de Luz" + "\nSaldo anterior: $" + saldoAnteriorLuz + "\nDinero descontado: $" + Luz + "\nSaldo actual: $" + saldoCuenta);
      }
      break;
      case "3":
      if (saldoCuenta < Internet){
        alert("No hay suficiente saldo en tu cuenta para pagar el servicio");
      }
      else {
        saldoAnteriorInternet = saldoCuenta;
        saldoCuenta -= Internet;
        actualizarSaldoEnPantalla();
        alert("Has pagado el servicio de Internet" + "\nSaldo anterior: $" + saldoAnteriorInternet + "\nDinero descontado: $" + Internet + "\nSaldo actual: $" + saldoCuenta);
      }
      break;
      case "4":
      if (saldoCuenta < Telefono){
        alert("No hay suficiente saldo en tu cuenta para pagar el servicio");
      }
      else {
        saldoAnteriorTelefono = saldoCuenta;
        saldoCuenta -= Telefono;
        actualizarSaldoEnPantalla();
        alert("Has pagado el servicio de Telefono" + "\nSaldo anterior: $" + saldoAnteriorTelefono + "\nDinero descontado: $" + Telefono + "\nSaldo actual: $" + saldoCuenta);
      }
      break;
      default:
      alert("No existe el servicio que se ha seleccionado");
    }
  } else {
    alert("Solo numeros son permitidos");
  }
}

function transferirDinero() {
  var cuentaAmiga1 = 1234567;
  var cuentaAmiga2 = 7654321;
  var dineroATransferir = prompt("Ingrese el monto a transferir");
  var typeTransferir = isNaN(dineroATransferir);
  if (dineroATransferir == null || dineroATransferir == false) {
        return;
  }
  if (typeTransferir == false) {
    if (dineroATransferir <= saldoCuenta){
      var elegirCuenta = prompt("Ingrese el numero de cuenta al que desea transferior el dinero");
      if (elegirCuenta == null || elegirCuenta == false) {
            return;
      }
      switch (elegirCuenta){
        case "1234567":
        saldoCuenta -= dineroATransferir
        actualizarSaldoEnPantalla();
        alert("Se han transferido: $" + dineroATransferir + "\nCuenta destino: " + cuentaAmiga1);
        break;
        case "7654321":
        saldoCuenta -= dineroATransferir
        actualizarSaldoEnPantalla();
        alert("Se han transferido: $" + dineroATransferir + "\nCuenta destino: " + cuentaAmiga2);
        break;
        default:
        alert("Solo se puede transferir dinero a una cuenta amiga");
      }
    } else {
      alert("Dinero insuficiente, no se puede transferir dicha cantidad")
    }
  } else {
    alert("Solo numeros son permitidos");
  }
}

function iniciarSesion() {
  var codigoSeguridad = 123;
  var stringIngresarCodigo = prompt("Ingrese su codigo de seguridad");
  var ingresarCodigo = parseInt(stringIngresarCodigo);
  switch (ingresarCodigo) {
    case 123:
      alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones");
      break;
    default:
      saldoCuenta = 0;
      alert("Codigo incorrecto. Tu dinero a sido retenido por cuestiones de seguridad");
      actualizarSaldoEnPantalla();
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

//Mis Funciones
function sumarDinero(sumaDepositar) {
  saldoCuenta += sumaDepositar;
}

function restarDinero(restaExtraer) {
  saldoCuenta -= restaExtraer;
}
