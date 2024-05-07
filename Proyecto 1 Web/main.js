function changeModel() { //Funcion que trata los selectores de las marcas y sus modelos
    var models = document.getElementById("car-model");

    //Se eliminan modelos anteriores 
    models.innerHTML = "";

    //Agregar nuevos modelos
    var agregateModel = function (model) {
        models.insertAdjacentHTML('beforeend', `<option value="${model}">${model}</option>`);
    };

    var brandSelect = document.getElementById("car-brand").value;

    switch (brandSelect) {
        case "ford":
            ["Selecciona un modelo","Fiesta", "Focus", "Mustang"].forEach(agregateModel);
            break;
        case "chevrolet":
            ["Selecciona un modelo","Silverado", "Cruze", "Camaro"].forEach(agregateModel);
            break;
        case "toyota":
            ["Selecciona un modelo","Corolla", "Camry", "RAV4"].forEach(agregateModel);
            break;
        case "honda":
            ["Selecciona un modelo","Civic", "Accord", "CR-V"].forEach(agregateModel);
            break;
        case "volkswagen":
            ["Selecciona un modelo","Golf", "Jetta", "Tiguan"].forEach(agregateModel);
            break;
        default:
            models.insertAdjacentHTML('beforeend', '<option value="">Selecciona una marca primero</option>');
    }
}

//SELECCION AUTOMATICA DE IMAGEN AL SELECCIONAR UNA MARCA Y UN MODELO
// Terminos del DOM a usar
const carBrandSelect = document.getElementById("car-brand");
const carModelSelect = document.getElementById("car-model");
const imagePreview = document.getElementById("image-preview");
const URL = document.getElementById("url");

// Evento de cambio en la marca
carBrandSelect.addEventListener("change", updateImage);

// Evento de cambio en el modelo
carModelSelect.addEventListener("change", updateImage);

function updateImage() { //Previsualizar la imagen del inputFormulario
    const brand = carBrandSelect.value;
    const model = carModelSelect.value;

    // Cambio de modelo y marca
    switch (brand) {

        case "ford":
            switch (model) {
                case "Fiesta":
                    imagePreview.src = "https://media.autoexpress.co.uk/image/private/s--D8BPo2Sn--/v1579701600/autoexpress/2016/08/ford-fiesta-has-seven-years-as-the-uk-top-seller-and-four-years-as-europes-most-popular-small-car.jpg";
                    URL.value = "https://media.autoexpress.co.uk/image/private/s--D8BPo2Sn--/v1579701600/autoexpress/2016/08/ford-fiesta-has-seven-years-as-the-uk-top-seller-and-four-years-as-europes-most-popular-small-car.jpg";
                    break;
                case "Focus":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.hwUh0lJffDIBLixuLZCNfgAAAA?rs=1&pid=ImgDetMain";
                    URL.value = "https://th.bing.com/th/id/OIP.hwUh0lJffDIBLixuLZCNfgAAAA?rs=1&pid=ImgDetMain";
                    break;
                case "Mustang":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.EBjmeJnssSOPe6M7qqOyUAHaE8?rs=1&pid=ImgDetMain";
                    URL.value = "https://th.bing.com/th/id/OIP.EBjmeJnssSOPe6M7qqOyUAHaE8?rs=1&pid=ImgDetMain";
                    break;
                default:
                    imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
                    URL.value = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
            }
            break;
        case "chevrolet":
            switch (model) {
                case "Silverado":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.eyzQA8pcO-MQOWVtAxh_swHaFj?rs=1&pid=ImgDetMain";
                    URL.value = "https://th.bing.com/th/id/OIP.eyzQA8pcO-MQOWVtAxh_swHaFj?rs=1&pid=ImgDetMain";
                    break;
                case "Cruze":
                    imagePreview.src = "https://www.trifectaperformance.com/uploads/monthly_2019_11/Press_18.jpg.fa47d02d7827ac9eb85a1d1fea1211d2.jpg";
                    URL.value = "https://www.trifectaperformance.com/uploads/monthly_2019_11/Press_18.jpg.fa47d02d7827ac9eb85a1d1fea1211d2.jpg";
                    break;
                case "Camaro":
                    imagePreview.src = "https://th.bing.com/th/id/R.18c077789a05556ed628911b56d61e3f?rik=SPKXIUjVxx7ekA&pid=ImgRaw&r=0";
                    URL.value = "https://th.bing.com/th/id/R.18c077789a05556ed628911b56d61e3f?rik=SPKXIUjVxx7ekA&pid=ImgRaw&r=0";
                    break;
                default:
                    imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
                    URL.value = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
            }
            break;
        case "toyota":
            switch (model) {
                case "Corolla":
                    imagePreview.src = "https://quatrorodas.abril.com.br/wp-content/uploads/2019/03/toyota-corolla-2-e1553106218663.jpg?resize=165";
                    URL.value = "https://quatrorodas.abril.com.br/wp-content/uploads/2019/03/toyota-corolla-2-e1553106218663.jpg?resize=165";
                    break;
                case "Camry":
                    imagePreview.src = "https://th.bing.com/th/id/R.055986eeba4f91c164d6235dddfafd35?rik=GX4FS1%2bTRsJUcA&pid=ImgRaw&r=0";
                    URL.value = "https://th.bing.com/th/id/R.055986eeba4f91c164d6235dddfafd35?rik=GX4FS1%2bTRsJUcA&pid=ImgRaw&r=0";
                    break;
                case "RAV4":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.Ij84y7b5Ftg1thBlGdcC0AHaE8?rs=1&pid=ImgDetMain";
                    URL.value = "https://th.bing.com/th/id/OIP.Ij84y7b5Ftg1thBlGdcC0AHaE8?rs=1&pid=ImgDetMain";
                    break;
                default:
                    imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
                    URL.value = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
            }
            break;
        case "honda":
            switch (model) {
                case "Civic":
                    imagePreview.src = "https://th.bing.com/th/id/R.df0384434b0f3c62dc3a19dbd9bbc61e?rik=tGmLJ8avZyD6eA&pid=ImgRaw&r=0";
                    URL.value = "https://th.bing.com/th/id/R.df0384434b0f3c62dc3a19dbd9bbc61e?rik=tGmLJ8avZyD6eA&pid=ImgRaw&r=0";
                    break;
                case "Accord":
                    imagePreview.src = "https://th.bing.com/th/id/R.68f67082ec6a531a0f633b112f7302d5?rik=gG2mkTrMFLivEQ&pid=ImgRaw&r=0";
                    URL.value = "https://th.bing.com/th/id/R.68f67082ec6a531a0f633b112f7302d5?rik=gG2mkTrMFLivEQ&pid=ImgRaw&r=0";
                    break;
                case "CR-V":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.ItKC3uSSwlfxOUrtB0JpJwHaE7?rs=1&pid=ImgDetMain";
                    URL.value = "https://th.bing.com/th/id/OIP.ItKC3uSSwlfxOUrtB0JpJwHaE7?rs=1&pid=ImgDetMain";
                    break;
                default:
                    imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
                    URL.value = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
            }
            break;
        case "volkswagen":
            switch (model) {
                case "Golf":
                    imagePreview.src = "https://th.bing.com/th/id/R.e9ea6a605fd058f7b19004b16b8a3472?rik=5AOPNaskTrlrCg&riu=http%3a%2f%2fwww.sembang-auto.com%2fwp-content%2fuploads%2f2012%2f09%2fVW-Golf-1.jpg&ehk=BrIX8fXAcvr4IjYYB64xACS%2fNdD5pXOspewkt%2fLup0I%3d&risl=&pid=ImgRaw&r=0";
                    URL.value = "https://th.bing.com/th/id/R.e9ea6a605fd058f7b19004b16b8a3472?rik=5AOPNaskTrlrCg&riu=http%3a%2f%2fwww.sembang-auto.com%2fwp-content%2fuploads%2f2012%2f09%2fVW-Golf-1.jpg&ehk=BrIX8fXAcvr4IjYYB64xACS%2fNdD5pXOspewkt%2fLup0I%3d&risl=&pid=ImgRaw&r=0";
                    break;
                case "Jetta":
                    imagePreview.src = "https://th.bing.com/th/id/R.cb85d20e0e2133ddb06a81ed47092e43?rik=92dafdC4Nl9Pzg&riu=http%3a%2f%2fcdn.carbuzz.com%2fgallery-images%2f1600%2f509000%2f400%2f509421.jpg&ehk=rgA6iQFt8YEKLGkrMAY2fUhFRvF3eTaNAUlJmAW%2fgZc%3d&risl=&pid=ImgRaw&r=0";
                    URL.value =  "https://th.bing.com/th/id/R.cb85d20e0e2133ddb06a81ed47092e43?rik=92dafdC4Nl9Pzg&riu=http%3a%2f%2fcdn.carbuzz.com%2fgallery-images%2f1600%2f509000%2f400%2f509421.jpg&ehk=rgA6iQFt8YEKLGkrMAY2fUhFRvF3eTaNAUlJmAW%2fgZc%3d&risl=&pid=ImgRaw&r=0";
                    break;
                case "Tiguan":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.x05eMbtzvdrvi4Le2445_AHaEK?rs=1&pid=ImgDetMain";
                    URL.value = "https://th.bing.com/th/id/OIP.x05eMbtzvdrvi4Le2445_AHaEK?rs=1&pid=ImgDetMain";
                    break;
                default:
                    imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
                    URL.value = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
            }
            break;
        default:
            imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
            URL.value = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png";
    }
}

//-----------------------------------------------------------------------------//

// AGREGAR

let listRegistro = [];
let indice = 1;

const objClient = {
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
}

let editando = false; //deteca cuando agrega o actualiza la lista

const inputFormulario = document.querySelector('#form'); //id etiquetas
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

inputFormulario.addEventListener('submit', validarForm);

function validarForm(e) { //AGREGAR ELIMINAR O EDITAR
    e.preventDefault();

    //VALIDACIONES
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

        agregateClient();
    }
}

function agregateClient() {

    listRegistro.push({ ...objClient }); //metodo PUSH para agregar un cliente
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
    inputURL = 'https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png';
    etImagen.src = 'https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png';
    cleanObject(); //limpiar inputFormulario
}

function cleanObject() {
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

    cleanHTML();

    const divClientes = document.querySelector('.div-clientes'); //parte donde se agregan los elementos html
    listRegistro.forEach(client => {
        const { index, nombre, apellido, id, year, placa, image, marca, modelo, color, telf, direccion, prop_nombre, prop_apellido, url} = client;

        const parrafo = document.createElement('p'); //creacion de etiquetas p
        parrafo.textContent = `${index} - ${nombre} - ${apellido} - ${id} - ${year} - ${placa} - ${image}`; //info que se añade a la lista
        parrafo.dataset.id = id; //identificar el id para eliminar o modificar

        //BOTONES
        const editBot = document.createElement('button');
        editBot.onclick = () => chargeClient(client);
        editBot.textContent = 'Editar';
        editBot.classList.add('btn', 'btn-editar');
        parrafo.append(editBot);

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
    const { index, nombre, apellido, id, year, placa, image, marca, modelo, color, telf, direccion, prop_nombre, prop_apellido, url } = client;

    console.log(index);
    console.log(nombre);
    console.log(apellido);
    console.log(id);
    console.log(year);
    console.log(placa);
    console.log(image);
    console.log(marca);
    console.log(modelo);
    console.log(color);
    console.log(telf);
    console.log(direccion);
    console.log(prop_nombre);
    console.log(prop_apellido);
    console.log(url);

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
    inputURL = url;
    etImagen.src = url;

    objClient.index = id;

    inputFormulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editClient() {
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


    listRegistro.forEach(cliente => {
        if (cliente.index === objClient.index) {
            cliente.index = objClient.index;
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
}

function eliminateClient(id) {
    listRegistro = listRegistro.filter(client => client.index !== id);
    cleanHTML();
    mostrarClient();
};

function cleanHTML() {
    const divClientes = document.querySelector('.div-clientes');
    while (divClientes.firstChild) {
        divClientes.removeChild(divClientes.firstChild);
    }
}