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

inputURL.addEventListener('input', function () { //Si se hace click, se habilita Agregar
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

static obtainFromForm() {
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

    static editFromForm() {
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
        this.listaClientes = [];
        this.index = 1;
        this.editando = false;
    }

    agregateClient(cliente) {
        cliente.index = this.index;
        this.listaClientes.push(cliente);
        this.index++;
    }

    eliminateClient(index) {
        this.listaClientes.splice(index - 1, 1);
        this.index--; //Reduce el contador de los indices
        this.listaClientes.forEach((cliente, i) => {
            cliente.index = i + 1; //actualiza indices
        });
        registro.showClient(); //muestra la tabla despues de eliminar
    }

    editClient(cliente) {
        index = parseInt(inputIndex.value);
        this.listaClientes[index-1] = cliente;
    }

    chargeSee(index){
        
        const cliente = this.listaClientes.find(cliente => cliente.index === index);

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
        
        inputFormulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    }

    charge(index){

        const cliente = this.listaClientes.find(cliente => cliente.index === index);
        
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
        

        btnAgregate.disabled = false;
        this.editando = true;
        inputFormulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    }

    seeClient(cliente){
        this.chargeSee(cliente);
        btnAgregate.disabled = true; // Se deshabilita Agregar

        btnReset.addEventListener("click", function () { //Si se hace click, se habilita Agregar
            btnAgregate.disabled = false;
        });
    
    }

    showClient() {
        cleanHTML();

        const tableClients = document.getElementById('table-clients').getElementsByTagName('tbody')[0];
        tableClients.innerHTML = '' //Limpia la tabla antes de agregar una fila

        this.listaClientes.forEach(cliente => {
            const fila = document.createElement('tr');

            const celdas = [
                cliente.index,
                cliente.nombre,
                cliente.apellido,
                cliente.id,
                cliente.year,
                cliente.placa,
                `<img src="${cliente.url}" height="50" widdth="50">`,
                `<button class="btn-ver" onclick="registro.seeClient(${cliente.index})">Ver</button>
                <button class="btn-editar" onclick="registro.charge(${cliente.index})">Editar</button>
                <button class="btn-eliminar" onclick="registro.eliminateClient(${cliente.index})">Eliminar</button>`
            ];

            celdas.forEach(valor => {
                const celda = document.createElement('td');
                celda.innerHTML = valor;
                fila.appendChild(celda);
            });

            tableClients.appendChild(fila);
        });

    }
} //FIN DE LAS CLASES

// Instanciamos el objeto de registros
const registro = new RegistroCliente();

function validarForm(e) { //AGREGAR ELIMINAR O EDITAR
    e.preventDefault(); //prevenir conflictos

    //VALIDACIONES AQUI VALIDAS TODOS LOS CAMPOS DEL DOM, LOS BOTONES NO CREO QUE HAGA FALTA
    if (inputPlaca.value === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    //EDITAR
    if (registro.editando) {
        registro.editClient(Cliente.editFromForm());
        registro.editando = false;
        inputFormulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    //AGREGAR    
    } else { 
        registro.agregateClient(Cliente.obtainFromForm());
    }

    registro.showClient();
    //LIMPIAR CAMPOS
    inputPlaca.value = '';
    inputYear.value = '';
    inputMarca.value = '';
    inputModelo.value = '';
    inputColor.value = "#000000";
    inputNombre.value = '';
    inputApellido.value = '';
    inputCedula.value = '';
    inputTelefono.value = '';
    inputDireccion.value = '';
    inputNombre_prop.value = '';
    inputApellido_prop.value = '';
    inputURL.value = '';
    etImagen.src = 'https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png';
    cleanObject(); //limpiar objeto
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

function cleanHTML() { //Limpia el DOM creado para que no haya conflictos en el agregado de nuevos clientes
    const divClientes = document.querySelector('.div-clientes');
    while (divClientes.firstChild) {
        divClientes.removeChild(divClientes.firstChild);
    }
}