//Registro de la persona
let nombre

registro()

function registro(){
    let nombre = prompt("Ingrese su nombre y apellido");
    if(nombre){
        alert("Bienvenido/a " + nombre + " es hora de importar eso que tanto deseas!") 
        listaServicios()
    }
}


//Listado General de Servicios

function listaServicios(){
    let servicio;

    do{
        servicio = parseInt(prompt("Ingrese el numero de la opcion deseada\n Nuestros servicios son:\n 1. Importacion\n 2. Exportacion\n 3. Logistica Internacional"))
        if(servicio > 3 || servicio < 0){
            alert("El numero ingresado es incorrecto.")
        }
    }

    while(servicio < 0 || servicio > 3)

    switch(servicio){
        case 1:
            return servicioImpo();
        case 2:
            return servicioExpo();
        case 3: 
            return servicioLogi();
    }
}

// Listado Detallado de cada Servicio
function servicioImpo(){
    let tipoServ;
    tipoServ = prompt("Nuestro Servicios de Importacion son:\n1. Inscripcion como Importador\n2. Contenedores\n3. Carga Suelta \n4. Clasificacion Arancelaria")
    tipoServ = parseInt(tipoServ)

        if(tipoServ > 4 || tipoServ < 0){
            alert("El numero ingresado es incorrecto.")
        }

    switch(tipoServ){
        case 1:
            precio ("Inscripcion");
            break
        case 2:
            precio ("Contenedor");
            break
        case 3:
            precio ("Suelta");
            break
        case 4:
            precio ("Clasificacion");
            break
        default: 
    }
}

function servicioExpo(){
    let tipoServ;
    tipoServ= prompt("Nuestro Servicios de Exportacion son:\n1. Terminales Portuarias\n2. Deposito Fiscales\n3. Temporales")
    tipoServ = parseInt(tipoServ)

   if(tipoServ > 3 || tipoServ < 0){
            alert("El numero ingresado es incorrecto.")
    }  

    switch(tipoServ){
        case 1:
           precio ("Terminales");
           break
        case 2:
            precio("Depositos");
            break
        case 3:
            precio("Temporales");
            break
        default:
    }
}

function servicioLogi(){
    let tipoServ;
     tipoServ = prompt("Nuestro Servicios de Logistica son:\n1)Maritimo\n2)Terrestre\n3)Aereo")
     tipoServ = parseint(tipoServ)
     
        if(tipoServ > 3 || tipoServ < 0){
            alert("El numero ingresado es incorrecto.")
        }
    

    switch(tipoServ){
        case 1:
            precio ("Maritimo");
            break
        case 2:
            precio ("Terrestre");
            break
        case 3:
            precio ("Aereo");
            break
        default:
    }
}

function precio(tipoServ){
    if(tipoServ === "Inscripcion"){
        pagar (200);
    }
    else if(tipoServ === "Contenedor"){
        pagar (600);
    }
    else if(tipoServ === "Suelta"){
        pagar (400);
    }
    else if(tipoServ === "Clasificacion"){
        pagar (50);
    }
    else if(tipoServ === "Terminales"){
        pagar (800);
    }
    else if(tipoServ === "Deposito"){
        pagar (600);
    }
    else if(tipoServ === "Temporales"){
        pagar (500);
    }
    else if(tipoServ === "Maritimo"){
        pagar (500);
    }
    else if(tipoServ === "Terrestre"){
        pagar (400);
    }
    else if(tipoServ === "Aereo"){
        pagar (300);
    }
}

function entrega (){

    let lugarEntrega = [prompt("Indique la provincia en donde desea realizar la operacion")];
    if (lugarEntrega === "Tierra del Fuego") {
        alert ("Esta provincia no esta disponible");
    }
    else{
        alert ("El lugar donde realizara aduana " + lugarEntrega + " tiene todos los servicios disponibles")
    }

}

function pagar(precio){ 
     
     let pago = prompt(`El saldo a abonar es $ ${precio}. De que forma quere realizar el pago\n1.Transferencia Bancaria\n2.Tarjeta\n3.Bitcoin`)
     pago = parseInt(pago)
     if(pago == 1){
        let efectivo = prompt("Seleccionaste Transferencia Bancaria, ingresa el saldo a abonar")
        if (efectivo > precio) {
            alert("En breve recibiras la devolucion por la diferncia de: $" + (efectivo - precio));
            }else if (efectivo == precio) {
                alert("Gracias por tu compra");
            }else{
                alert("El monto con el que deseas transferir no es suficiente");
           }
     }else if(pago == 2){
        let numCard = prompt("Ingresa el número de tu tarjeta")
        alert("En tu tarjeta nº "+ numCard +" ya se realizo el cobro del serivicio")
        
     }else if(pago == 3){
        alert("Nuestra direccion de Wallet es: 12dlsafmds3124312kmds32, envianos el comprobante por correo y estara contratado el servicio.")
     }
}






