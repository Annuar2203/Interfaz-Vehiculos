function changeModel(){ //Funcion que trata los selectores de las marcas y sus modelos
    var models = document.getElementById("car-model");

    //Se eliminan modelos anteriores 
    models.innerHTML = "";

    //Agregar nuevos modelos
    var agregateModel = function(model){
        models.insertAdjacentHTML('beforeend', `<option value="${model}">${model}</option>`);
    };

    var brandSelect = document.getElementById("car-brand").value;

    switch(brandSelect){
        case "ford":
            ["Fiesta", "Focus", "Mustang"].forEach(agregateModel);
            break;
        case "chevrolet":
            ["Silverado", "Cruze", "Camaro"].forEach(agregateModel);
            break;
        case "toyota":
            ["Corolla", "Camry", "RAV4"].forEach(agregateModel);
            break;
        case "honda":
            ["Civic", "Accord", "CR-V"].forEach(agregateModel);
            break;    
        case "volkswagen":
            ["Golf", "Jetta", "Tiguan"].forEach(agregateModel); 
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

// Evento de cambio en la marca
carBrandSelect.addEventListener("change", updateImage);

// Evento de cambio en el modelo
carModelSelect.addEventListener("change", updateImage);

function updateImage() { //Previsualizar la imagen del formulario
    const brand = carBrandSelect.value;
    const model = carModelSelect.value;

    // Cambio de modelo y marca
    switch (brand) {

        case "ford":
            switch (model) {
                case "Fiesta":
                    imagePreview.src = "https://media.autoexpress.co.uk/image/private/s--D8BPo2Sn--/v1579701600/autoexpress/2016/08/ford-fiesta-has-seven-years-as-the-uk-top-seller-and-four-years-as-europes-most-popular-small-car.jpg";
                    break;
                case "Focus":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.hwUh0lJffDIBLixuLZCNfgAAAA?rs=1&pid=ImgDetMain";
                    break;
                case "Mustang":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.EBjmeJnssSOPe6M7qqOyUAHaE8?rs=1&pid=ImgDetMain";
                    break;
                default:
                    imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png"; // Imagen no disponible
            }
            break;
        case "chevrolet":
            switch (model) {
                case "Silverado":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.eyzQA8pcO-MQOWVtAxh_swHaFj?rs=1&pid=ImgDetMain";
                    break;
                case "Cruze":
                    imagePreview.src = "https://www.trifectaperformance.com/uploads/monthly_2019_11/Press_18.jpg.fa47d02d7827ac9eb85a1d1fea1211d2.jpg";
                    break;
                case "Camaro":
                    imagePreview.src = "https://th.bing.com/th/id/R.18c077789a05556ed628911b56d61e3f?rik=SPKXIUjVxx7ekA&pid=ImgRaw&r=0";
                    break;
                default:
                    imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png"; // Imagen no disponible
            }
            break;
        case "toyota":
            switch (model){
                case "Corolla":
                    imagePreview.src = "https://quatrorodas.abril.com.br/wp-content/uploads/2019/03/toyota-corolla-2-e1553106218663.jpg?resize=165";
                    break;
                case "Camry":
                    imagePreview.src = "https://th.bing.com/th/id/R.055986eeba4f91c164d6235dddfafd35?rik=GX4FS1%2bTRsJUcA&pid=ImgRaw&r=0";
                    break;
                case "RAV4":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.Ij84y7b5Ftg1thBlGdcC0AHaE8?rs=1&pid=ImgDetMain";
                    break;
                default:
                    imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png"; // Imagen no disponible
            }
            break;
        case "honda":
            switch (model){
                case "Civic":
                    imagePreview.src = "https://th.bing.com/th/id/R.df0384434b0f3c62dc3a19dbd9bbc61e?rik=tGmLJ8avZyD6eA&pid=ImgRaw&r=0";
                    break;
                case "Accord":
                    imagePreview.src = "https://th.bing.com/th/id/R.68f67082ec6a531a0f633b112f7302d5?rik=gG2mkTrMFLivEQ&pid=ImgRaw&r=0";
                    break;
                case "CR-V":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.ItKC3uSSwlfxOUrtB0JpJwHaE7?rs=1&pid=ImgDetMain";
                    break;
                default:
                    imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png"; // Imagen no disponible
            }
            break;
        case "volkswagen":
            switch (model){
                case "Golf":
                    imagePreview.src = "https://th.bing.com/th/id/R.e9ea6a605fd058f7b19004b16b8a3472?rik=5AOPNaskTrlrCg&riu=http%3a%2f%2fwww.sembang-auto.com%2fwp-content%2fuploads%2f2012%2f09%2fVW-Golf-1.jpg&ehk=BrIX8fXAcvr4IjYYB64xACS%2fNdD5pXOspewkt%2fLup0I%3d&risl=&pid=ImgRaw&r=0";
                    break;
                case "Jetta":
                    imagePreview.src = "https://th.bing.com/th/id/R.cb85d20e0e2133ddb06a81ed47092e43?rik=92dafdC4Nl9Pzg&riu=http%3a%2f%2fcdn.carbuzz.com%2fgallery-images%2f1600%2f509000%2f400%2f509421.jpg&ehk=rgA6iQFt8YEKLGkrMAY2fUhFRvF3eTaNAUlJmAW%2fgZc%3d&risl=&pid=ImgRaw&r=0";
                    break;
                case "Tiguan":
                    imagePreview.src = "https://th.bing.com/th/id/OIP.x05eMbtzvdrvi4Le2445_AHaEK?rs=1&pid=ImgDetMain";
                    break;
                default:
                    imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png"; // Imagen no disponible
            }
            break;                                     
        default:
            imagePreview.src = "https://e7.pngegg.com/pngimages/623/754/png-clipart-sports-car-automotive-design-luxury-vehicle-cartoon-luxury-car-cartoon-character-compact-car.png"; // Imagen no disponible
    }    
}

// AGREGAR

let listRegistro = [];
const objCar = {
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
    image: '',
}

let edit = false; //deteca cuando agrega o actualiza la lista

const formulario = document.querySelector('#form'); //id etiquetas
const placa = document.querySelector('#placa');
const year = document.querySelector('#year');
const marca = document.querySelector('#car-brand');
const modelo = document.querySelector('#car-model');
const color = document.querySelector('#color');
const nombre = document.querySelector('#name');
const apellido = document.querySelector('#lastname');
const cedula = document.querySelector('#id');
const telefono = document.querySelector('#phone');
const direccion = document.querySelector('#direction');
const nombre_prop = document.querySelector('#property-name');
const apellido_prop = document.querySelector('#property-lastname');
const imagen = document.querySelector('#image-preview');
const btnAgregate = document.querySelector('#agregate'); 

formulario.addEventListener('submit', Validar);

function validarForm(e) {
    e.preventDefault();

    //VALIDACIONES
    if(placa.value === ''){
        alert('Todos los campos son obligatorios');
        return;
    }

    //EDITAR
    if(editando){
        //editEmpleado();
        editando = false;
    //AGREGAR    
    }else{
        objCar.index = Date.now();
        objCar.placa = placa.value;
        objCar.year = year.value;
        objCar.marca = placa.value;
        objCar.modelo = modelo.value;
        objCar.color = color.value;
        objCar.nombre = nombre.value;
        objCar.apellido = apellido.value;
        objCar.id = cedula.value;
        objCar.telf = telefono.value;
        objCar.direccion = direccion.value;
        objCar.prop_nombre = nombre_prop.value;
        objCar.prop_apellido = apellido_prop.value;
        objCar.image = imagen.value;

        agregateCar();
    }
}

function agregateCar(){
    listRegistro.push({...objCar});
    mostrarCar();
}

function mostrarCar(){
    
}