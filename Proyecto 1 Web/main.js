// LOGICA DEL CRUD
// INICIO

// Se extrae info del DOM
const inputFormulario = document.querySelector('#form');
const inputPlaca = document.querySelector('#placa');
const inputYear = document.querySelector('#year');
const inputMarca = document.querySelector('#car-brand');
const inputModelo = document.querySelector('#car-model');
const inputColor = document.querySelector('#color');
const inputNombre = document.querySelector('#name');
const inputApellido = document.querySelector('#lastname');
const inputCedula = document.querySelector('#id');
const inputTelefono = document.querySelector('#phone');
const inputDireccion = document.querySelector('#direction');
const inputNombre_prop = document.querySelector('#property-name');
const inputApellido_prop = document.querySelector('#property-lastname');
var inputURL = document.querySelector('#url');
const etImagen = document.querySelector('#image-preview');
const inputIndex = document.querySelector('#index');

const btnAgregate = document.querySelector('#agregate');
const btnReset = document.querySelector('#reset');

inputFormulario.addEventListener('submit', validarForm);

//EVENTOS
btnReset.addEventListener('click', function () { //Si se hace click, se habilita Agregar
    etImagen.src = 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/102012/logoujap.png?itok=--szBodC';
})

inputURL.addEventListener('input', function () { //Si se pone un URL que lleve a una imagen, se actualiza la etiqeuta Image
    etImagen.src = inputURL.value;
})

//CLASE CLIENTE
class Cliente {
    constructor(index, placa, year, marca, modelo, color, nombre, apellido, id, telf, direccion,
        prop_nombre, prop_apellido, url, image) {
        this.index = index;
        this.placa = placa;
        this.year = year;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = id;
        this.telf = telf;
        this.direccion = direccion;
        this.prop_nombre = prop_nombre;
        this.prop_apellido = prop_apellido;
        this.url = url;
        this.image = image;
    }

    static obtainFromForm() { //Obtener del Formulario para Agregar
        return new Cliente(
            1,
            inputPlaca.value,
            inputYear.value,
            inputMarca.value,
            inputModelo.value,
            inputColor.value,
            inputNombre.value,
            inputApellido.value,
            inputCedula.value,
            inputTelefono.value,
            inputDireccion.value,
            inputNombre_prop.value,
            inputApellido_prop.value,
            inputURL.value,
            inputURL.src
        );
    }

    static editFromForm() { //Obtener del formulario para Editar
        return new Cliente(
            inputIndex.value,
            inputPlaca.value,
            inputYear.value,
            inputMarca.value,
            inputModelo.value,
            inputColor.value,
            inputNombre.value,
            inputApellido.value,
            inputCedula.value,
            inputTelefono.value,
            inputDireccion.value,
            inputNombre_prop.value,
            inputApellido_prop.value,
            inputURL.value,
            inputURL.src
        );
    }
}

class RegistroCliente {
    constructor() {
        this.listaClientes = []; //se guardaran los registros
        this.index = 1;
        this.editando = false; //Variable que controla si en el evento del submit se edita o agrega
    }

    agregateClient(cliente) { //AGREGATE
        cliente.index = this.index;
        this.listaClientes.push(cliente);
        this.index++; //SE SUMA EL INDEX DE LOS REGISTROS
    }

    eliminateClient(index) { //ELIMINAR
        this.listaClientes.splice(index - 1, 1); //
        this.index--; //Reduce el contador de los indices
        this.listaClientes.forEach((cliente, i) => {
            cliente.index = i + 1; //actualiza indices para evitar que haya conflictos al Editar
        });
        registro.showClient(); //muestra la tabla despues de eliminar
    }

    editClient(cliente) {
        index = parseInt(inputIndex.value); //convertimos el indice en entero
        this.listaClientes[index - 1] = cliente; //se le resta 1 al index para guardar en la misma posicion en que se edito
        registro.showClient();
    }

    chargeSee(index) {
        //se busca el cliente por el indice
        parseInt(index)
        const cliente = this.listaClientes.find(cliente => parseInt(cliente.index) === index);
        //se desglosa el el objeto para asignarle valores al formulario
        inputIndex.value = cliente.index;
        inputPlaca.value = cliente.placa;
        inputYear.value = cliente.year;
        inputMarca.value = cliente.marca;
        inputModelo.value = cliente.modelo;
        inputColor.value = cliente.color;
        inputNombre.value = cliente.nombre;
        inputApellido.value = cliente.apellido;
        inputCedula.value = cliente.id;
        inputTelefono.value = cliente.telf;
        inputDireccion.value = cliente.direccion;
        inputNombre_prop.value = cliente.prop_nombre;
        inputApellido_prop.value = cliente.prop_apellido;
        inputURL.value = cliente.url;
        etImagen.src = cliente.url;
        //Se cambia el texto del boton a Agregar para evitar conflictos con Actualizar
        inputFormulario.querySelector('button[type="submit"]').textContent = 'Agregar';

        //cabe destacar que la variable controladora no es llamada, ya que solo queremos ver el resgitro sin modificarlo
    }

    chargeEdit(index) {
        //se busca el cliente por el indice
        parseInt(index)
        const cliente = this.listaClientes.find(cliente => parseInt(cliente.index) === index);
        //se desglosa el el objeto para asignarle valores al formulario
        inputIndex.value = cliente.index;
        inputPlaca.value = cliente.placa;
        inputYear.value = cliente.year;
        inputMarca.value = cliente.marca;
        inputModelo.value = cliente.modelo;
        inputColor.value = cliente.color;
        inputNombre.value = cliente.nombre;
        inputApellido.value = cliente.apellido;
        inputCedula.value = cliente.id;
        inputTelefono.value = cliente.telf;
        inputDireccion.value = cliente.direccion;
        inputNombre_prop.value = cliente.prop_nombre;
        inputApellido_prop.value = cliente.prop_apellido;
        inputURL.value = cliente.url;
        etImagen.src = cliente.url;

        btnAgregate.disabled = false; //el boton que envia el formulario se activa en caso de estar desactivado
        this.editando = true; //se le dice a la variable controladora que edite
        //Se cambia el texto del boton a Actualizar para evitar conflictos con Agregar
        inputFormulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    }

    seeClient(cliente) {
        this.chargeSee(cliente);
        cleanObject(); //limpiar objeto 
        btnAgregate.disabled = true; // Se deshabilita Agregar
        btnReset.addEventListener("click", function () { //Si se hace click, se habilita Agregar
            btnAgregate.disabled = false;
        });

    }

    cleanHTML() { //Limpia el DOM creado para que no haya conflictos en el agregado de nuevos clientes
        const divClientes = document.querySelector('.div-clientes');
        while (divClientes.firstChild) {
            divClientes.removeChild(divClientes.firstChild);
        }
    }

    showClient() { //MOSTRAR REGISTROS EN TABLAS
        registro.cleanHTML(); //Se limpian los elementos del DOM para evitar conflictos

        const tableClients = document.getElementById('table-clients').getElementsByTagName('tbody')[0]; //linea donde se insertan las filas
        tableClients.innerHTML = '' //Limpia la tabla antes de agregar una fila

        this.listaClientes.forEach(cliente => { //Recorre la lista de clientes para que se agreguen
            const fila = document.createElement('tr'); //se crea una nueva fila

            const celdas = [ //se crea un array de celdas para lo que se muestre en cada registro
                cliente.index,
                cliente.nombre,
                cliente.apellido,
                cliente.id,
                cliente.year,
                cliente.placa,
                `<div style="height: 50px; width: 50px ; background-color: ${cliente.color};"></div>`,
                `<img src="${cliente.url}" height="50" widdth="50">`,
                `<button class="btn-ver" onclick="registro.seeClient(${cliente.index})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </button>
                <button class="btn-editar" onclick="registro.chargeEdit(${cliente.index})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                </button>
                <button class="btn-eliminar" onclick="registro.eliminateClient(${cliente.index})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>`
            ];

            celdas.forEach(valor => { //se itera el array de celdas 
                const celda = document.createElement('td'); //se crean elementos para celda
                celda.innerHTML = valor; //se añaden los elementos a cada celda
                celda.style.textAlign = "center";
                celda.style.verticalAlign = "middle";
                fila.appendChild(celda); //cada celda se añade a una fila
            });

            tableClients.appendChild(fila); //cada fila se añade como un registro
        });

    }
} //FIN DE LAS CLASES

// Instanciamos el objeto de registros
const registro = new RegistroCliente();

function validarForm(e) { //AGREGAR ELIMINAR O EDITAR
    e.preventDefault(); //prevenir conflictos

    //VALIDACIONES AQUI VALIDAS TODOS LOS CAMPOS DEL DOM, LOS BOTONES NO CREO QUE HAGA FALTA
    const valuePlaca = inputPlaca.value !== '';
    const formatoPlaca = /^[a-zA-Z0-9]{1,8}$/;
    const formatoURL = /^https:\/\//;
    const valueDireccion = inputDireccion.value !== '';
    const soloTexto = /^[A-Za-z\s]+$/;
    const telefonoValido = /^0\d{3}-\d{7}$/;
    const añoVehiculo = parseInt(inputYear.value);
    const cedula = parseInt(inputCedula.value);
    const seleccionMarca = inputMarca.value !== '';
    const seleccionModelo = inputModelo.value !== '';

    (valuePlaca && formatoPlaca.test(inputPlaca.value) && !isNaN(añoVehiculo) && ((añoVehiculo > 0) && (añoVehiculo <= 2024)) && soloTexto.test(inputNombre.value) && soloTexto.test(inputApellido.value) && !isNaN(cedula) && ((cedula > 0) && (cedula <= 40000000)) && telefonoValido.test(inputTelefono.value) && valueDireccion && soloTexto.test(inputNombre_prop.value) && soloTexto.test(inputApellido_prop.value) && formatoURL.test(inputURL.value) && (seleccionMarca || seleccionModelo)) ? (
        // Se añade o edita
        registro.editando ? (
            registro.editClient(Cliente.editFromForm()), // carga formulario para editar
            registro.editando = false,
            //Se cambia el texto del boton a Agregar para evitar conflictos con Actualizar
            inputFormulario.querySelector('button[type="submit"]').textContent = 'Agregar'
            ) : (registro.agregateClient(Cliente.obtainFromForm()),
                inputPlaca.value = '',
                inputYear.value = '',
                inputMarca.value = '',
                inputModelo.value = '',
                inputColor.value = "#000000",
                inputNombre.value = '',
                inputApellido.value = '',
                inputCedula.value = '',
                inputTelefono.value = '',
                inputDireccion.value = '',
                inputNombre_prop.value = '',
                inputApellido_prop.value = '',
                inputURL.value = '',
                etImagen.src = 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/102012/logoujap.png?itok=--szBodC',
                //LIMPIAR CAMPOS
                cleanObject() //limpiar objeto
            ), // Carga el formulario para Agregar
        registro.showClient()
        ) : alert('Uno o mas campos son incorrectos');
}

function cleanObject() { //Usado para limpiar el objeto
    index = '';
    placa = '';
    year = '';
    marca = '';
    modelo = '';
    color = '';
    nombre = '';
    apellido = '';
    id = '';
    telf = '';
    direccion = '';
    prop_nombre = '';
    prop_apellido = '';
    image = '';
    url = '';
}