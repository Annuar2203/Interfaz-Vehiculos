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
        registro.showClient();    
    }

    editClient(cliente) {
        index = inputIndex.value;
        console.log(index);
        this.listaClientes[index-1] = cliente;
    }

    chargeSee(cliente){
        inputIndex = cliente.index;
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

    charge(cliente){

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

        const divClientes = document.querySelector('.div-clientes');
        this.listaClientes.forEach(cliente => {
            const { index, nombre, apellido, id, year, placa, image, marca, modelo, color, telf, direccion, prop_nombre, prop_apellido, url } = cliente;
            const parrafo = document.createElement('p'); //creacion de etiquetas p
            const texto = document.createTextNode(`${cliente.index} - ${cliente.nombre} - ${cliente.apellido} - ${cliente.id} - ${cliente.year} - ${cliente.placa} - `); //nodo que contiene texto
            parrafo.dataset.id = cliente.id; //identificar el id para eliminar o modificar

            const foto = document.createElement('img'); //creacion de etiquetas de imagen
            foto.src = url; //le pasamos el url al atributo de la ruta de la foto
            foto.height = 50; //establecemos tamaños
            foto.width = 50;

            parrafo.appendChild(texto); //Unimos las dos etiquetas
            parrafo.appendChild(foto);

            //BOTONES
            //VER            
            const seeBot = document.createElement('button');
            seeBot.onclick = () => registro.seeClient(cliente);
            seeBot.textContent = 'Ver';
            seeBot.classList.add('btn', 'btn-ver');
            parrafo.append(seeBot);

            //EDITAR
            const editBot = document.createElement('button');
            editBot.onclick = () => registro.charge(cliente);
            editBot.textContent = 'Editar';
            editBot.classList.add('btn', 'btn-editar');
            parrafo.append(editBot);

            //BORRAR
            const eliminateBot = document.createElement('button');
            eliminateBot.onclick = () => registro.eliminateClient(cliente.index);
            eliminateBot.textContent = 'Borrar';
            eliminateBot.classList.add('btn', 'btn-eliminar');
            parrafo.append(eliminateBot);

            const hr = document.createElement('hr');
            divClientes.appendChild(parrafo);
            divClientes.appendChild(hr);
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