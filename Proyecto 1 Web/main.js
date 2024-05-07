// LOGICA DEL CRUD
// INICIO

let listRegistro = []; // Guarda registros de cada cliente
let indice = 1; // Indice para los registros

const objClient = { //
    index: '',
    placa: '',
    year: '',
    marca: '',
    modelo: '',
    color: '',
    nombre: '',
    apellido: '',
    id: '',
    telf: '',
    direccion: '',
    prop_nombre: '',
    prop_apellido: '',
    url: '',
    image: '',
};

let editando = false; //Detecta cuando agrega o actualiza la lista

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

const btnAgregate = document.querySelector('#agregate');
const btnReset = document.querySelector('#reset');

inputFormulario.addEventListener('submit', validarForm);

btnReset.addEventListener('click', function(){ //Si se hace click, se habilita Agregar
    etImagen.src = 'https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png';
})

inputURL.addEventListener('input', function(){ //Si se hace click, se habilita Agregar
    etImagen.src = inputURL.value;
})

function validarForm(e) { //AGREGAR ELIMINAR O EDITAR
    e.preventDefault(); //prevenir conflictos

    //VALIDACIONES AQUI VALIDAS TODOS LOS CAMPOS DEL DOM, LOS BOTONES NO CREO QUE HAGA FALTA
    if (inputPlaca.value === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    //EDITAR
    if (editando) {
        editClient();
        editando = false;

    //AGREGAR    
    } else {
        //Crea un objetos nuevo
        objClient.index = indice++;
        objClient.placa = inputPlaca.value;
        objClient.year = inputYear.value;
        objClient.marca = inputMarca.value;
        objClient.modelo = inputModelo.value;
        objClient.color = inputColor.value;
        objClient.nombre = inputNombre.value;
        objClient.apellido = inputApellido.value;
        objClient.id = inputCedula.value;
        objClient.telf = inputTelefono.value;
        objClient.direccion = inputDireccion.value;
        objClient.prop_nombre = inputNombre_prop.value;
        objClient.prop_apellido = inputApellido_prop.value;
        objClient.url = inputURL.value;
        objClient.image = inputURL.value;
        //se agregar al resgitro
        agregateClient();
    }
}

function agregateClient() {

    listRegistro.push({ ...objClient }); //metodo PUSH para agregar un cliente y todos sus elementos
    mostrarClient(); //Mostrar lista actualizada
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
    objClient.index = '';
    objClient.placa = '';
    objClient.year = '';
    objClient.marca = '';
    objClient.modelo = '';
    objClient.color = '';
    objClient.nombre = '';
    objClient.apellido = '';
    objClient.id = '';
    objClient.telf = '';
    objClient.direccion = '';
    objClient.prop_nombre = '';
    objClient.prop_apellido = '';
    objClient.image = '';
    objClient.url = '';
}

function mostrarClient() {

    cleanHTML(); //Limpia el DOM creado para que no haya conflictos en el agregado de nuevos clientes

    const divClientes = document.querySelector('.div-clientes'); //parte donde se agregan los elementos html que contienen llos resgistros
    listRegistro.forEach(client => {

        const { index, nombre, apellido, id, year, placa, image, marca, modelo, color, telf, direccion, prop_nombre, prop_apellido, url} = client;

        const parrafo = document.createElement('p'); //creacion de etiquetas p
        const texto = document.createTextNode(`${index} - ${nombre} - ${apellido} - ${id} - ${year} - ${placa} - `); //nodo que contiene texto
        parrafo.dataset.id = id; //identificar el id para eliminar o modificar

        const foto = document.createElement('img'); //creacion de etiquetas de imagen
        foto.src = url; //le pasamos el url al atributo de la ruta de la foto
        foto.height = 50; //establecemos tamaños
        foto.width = 50; 

        parrafo.appendChild(texto); //Unimos las dos etiquetas
        parrafo.appendChild(foto);

        //BOTONES
        //VER
        const seeBot = document.createElement('button');
        seeBot.onclick = () => seeClient(client);
        seeBot.textContent = 'Ver';
        seeBot.classList.add('btn', 'btn-ver');
        parrafo.append(seeBot);

        //EDITAR
        const editBot = document.createElement('button');
        editBot.onclick = () => chargeClient(client);
        editBot.textContent = 'Editar';
        editBot.classList.add('btn', 'btn-editar');
        parrafo.append(editBot);

        //BORRAR
        const eliminateBot = document.createElement('button');
        eliminateBot.onclick = () => eliminateClient(index);
        eliminateBot.textContent = 'Borrar';
        eliminateBot.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminateBot);

        const hr = document.createElement('hr');
        divClientes.appendChild(parrafo);
        divClientes.appendChild(hr);
    });
}

function chargeClient(client) {
    // SE CARGAN LAS CLAVES CON SUS VALUES
    const { index, nombre, apellido, id, year, placa, image, marca, modelo, color, telf, direccion, prop_nombre, prop_apellido, url } = client;

    // Se cargan los inputs con los values de las claves
    inputPlaca.value = placa;
    inputYear.value = year;
    inputMarca.value = marca;
    inputModelo.value = modelo;
    inputColor.value = color;
    inputNombre.value = nombre;
    inputApellido.value = apellido;
    inputCedula.value = id;
    inputTelefono.value = telf;
    inputDireccion.value = direccion;
    inputNombre_prop.value = prop_nombre;
    inputApellido_prop.value = prop_apellido;
    inputURL.value = url;
    etImagen.src = url;

    objClient.index = index; //Usado para no perder el index de vista

    // Se suplanta el boton Añadir por actualizar
    inputFormulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    btnAgregate.disabled = false;
    editando = true;
}

// VER
function seeClient(client){
    // SE CARGAN LAS CLAVES CON SUS VALUES
    const { index, nombre, apellido, id, year, placa, image, marca, modelo, color, telf, direccion, prop_nombre, prop_apellido, url } = client;

    // Se cargan los inputs con los values de las claves
    inputPlaca.value = placa;
    inputYear.value = year;
    inputMarca.value = marca;
    inputModelo.value = modelo;
    inputColor.value = color;
    inputNombre.value = nombre;
    inputApellido.value = apellido;
    inputCedula.value = id;
    inputTelefono.value = telf;
    inputDireccion.value = direccion;
    inputNombre_prop.value = prop_nombre;
    inputApellido_prop.value = prop_apellido;
    inputURL.value = url;
    etImagen.src = url;

    objClient.index = index;

    btnAgregate.disabled = true; // Se deshabilita Agregar

    btnReset.addEventListener("click", function(){ //Si se hace click, se habilita Agregar
        btnAgregate.disabled = false;
    })
};

function editClient() {
    //Los values del DOM pasan a ser los valores del cliente a tratar
    objClient.index = indice;
    objClient.placa = inputPlaca.value;
    objClient.year = inputYear.value;
    objClient.marca = inputMarca.value;
    objClient.modelo = inputModelo.value;
    objClient.color = inputColor.value;
    objClient.nombre = inputNombre.value;
    objClient.apellido = inputApellido.value;
    objClient.id = inputCedula.value;
    objClient.telf = inputTelefono.value;
    objClient.direccion = inputDireccion.value;
    objClient.prop_nombre = inputNombre_prop.value;
    objClient.prop_apellido = inputApellido_prop.value;
    objClient.url = inputURL.value;
    objClient.image = etImagen.src;

    listRegistro.map(cliente => { //Se recorre el Array en busca de un resgistro que coindica con el Indice
        console.log(objClient.url)
        if (cliente.index === objClient.index - 1) {
            cliente.placa = objClient.placa;
            cliente.year = objClient.year;
            cliente.marca = objClient.marca;
            cliente.modelo = objClient.modelo;
            cliente.color = objClient.color;
            cliente.nombre = objClient.nombre;
            cliente.apellido = objClient.apellido;
            cliente.id = objClient.id;
            cliente.telf = objClient.telf;
            cliente.direccion = objClient.direccion;
            cliente.prop_nombre = objClient.prop_nombre;
            cliente.prop_apellido = objClient.prop_apellido;
            cliente.url = objClient.url;
            cliente.imagen = objClient.image;
        }
    });

    cleanHTML();
    mostrarClient();
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
    inputFormulario.querySelector('button[type="submit"]').textContent = 'Agregar';

    editando = false;
}

function eliminateClient(id) { //Se elimina el registro por el index
    listRegistro = listRegistro.filter(client => client.index !== id);
    cleanHTML();
    mostrarClient();
    btnAgregate.disabled = false;
};

function cleanHTML() { //Limpia el DOM creado para que no haya conflictos en el agregado de nuevos clientes
    const divClientes = document.querySelector('.div-clientes');
    while (divClientes.firstChild) {
        divClientes.removeChild(divClientes.firstChild);
    }
}