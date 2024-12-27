let datosTienda = [];
let cantidadDeTiendas = 0;


function crearTienda(){
    const container = document.querySelector(".boxTienda");
    const datoNumero = document.querySelector("#numero").value;
    const datoNombre = document.querySelector("#nombre").value;
    
    datosTienda.push(datoNumero, datoNombre);

    for(i=0; i <= cantidadDeTiendas; i++){

        mainTienda = document.createElement("div");
        mainTienda.className = 'tiendaBox'
        const ID = document.createElement("p");
        ID.className = "textID";
        ID.innerText = "ID Tienda: " + datoNumero;
        
        const Nombre = document.createElement("p");
        Nombre.className = "textNombre";
        Nombre.innerText = "Nombre de la Tienda: " + datoNombre;

        const Label = document.createElement("label");
        Label.setAttribute("for", "inputValor");
        Label.innerText = "Ingreso de dinero: ";

        const Input = document.createElement("input");
        Input.classList = "inputValor";

        container.appendChild(mainTienda);
        mainTienda.appendChild(ID);
        mainTienda.appendChild(Nombre);
        mainTienda.appendChild(Label);
        mainTienda.appendChild(Input);
    }
}

function extraerValor(elemento){
    let text = elemento.value;
    let valorFinal = Number(text);

    return valorFinal;

}


function totalDinero(){
    let cantidadTotal = 0;
    let cantidadTienda = [];

    let cantidades = document.querySelector(".boxTienda");

    for ( let item of cantidades.children){
        let valor = extraerValor(item.children[3]);
        cantidadTienda[cantidadTotal] = valor;
        cantidadTotal = cantidadTotal + 1;
    }

    let totalVenta = sumar(cantidadTienda);
    let mayorVenta = mejorTienda(cantidadTienda);
    let menorVenta = mejorar(cantidadTienda);
    alert(totalVenta, mayorVenta, menorVenta);

    const corteDeCaja = document.querySelector(".text1");
    corteDeCaja.textContent = totalVenta;

    const mejorVenta = document.querySelector(".text2");
    mejorVenta.textContent =  mayorVenta;

    const badTienda = document.querySelector(".text3");
    badTienda.textContent = menorVenta;

}

function sumar(array){
    let resultadoSuma = 0;

    for(let venta of array){
        resultadoSuma = resultadoSuma + venta;
    }
    return resultadoSuma;
}

function mejorTienda(array){
    let maximo = array[0];

    for(let mayor of array){
        if(mayor > maximo){
            maximo = mayor;
        }
    }

    return maximo;
}

function mejorar(array){
    let minimo = array[0];

    for(let menor of array){
        if(menor < minimo){
            minimo = menor;
        }
    }

    return minimo;
}
