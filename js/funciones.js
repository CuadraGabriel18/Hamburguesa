const enviarDatos = () => {
    //Datos
    let Cantidad = parseInt( document.getElementsByName('txtCantidad')[0].value);
    let tipoHamburguesa = document.getElementsByName('cmbTipoHamburguesa')[0].value;
    let TipoPago = document.getElementsByName('cmbTipoPago')[0].value;

    
    if (isNaN(Cantidad) || Cantidad <= 0) {
        alert('Ingrese una cantidad válida de hamburguesas.');
        return;
    }

    let totalPagar = 0; 
    switch(tipoHamburguesa){
        case "Sencillas":
            totalPagar = Cantidad * 20;
            break;
        case "Dobles":
            totalPagar = Cantidad * 25;
            break;
        case "Triples":
            totalPagar = Cantidad * 28;
            break
    }
    if(TipoPago === "Tarjeta De Credito"){
        totalPagar *= 1.05;
    }
    alert(`Cantidad: ${Cantidad}\nTipo De Hamburguesa: ${tipoHamburguesa}\nTipo De Pago: ${TipoPago}\nTotal a Pagar: $${totalPagar}
           `);
  }