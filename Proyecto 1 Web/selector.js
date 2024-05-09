function changeModel() {
    var models = document.getElementById("car-model");
    models.innerHTML = ""; // Eliminar modelos anteriores

    var brandSelect = document.getElementById("car-brand").value;
    // Definir las opciones de modelos para cada marca utilizando operadores ternarios    
    var modelsOptions = brandSelect === "ford" ? ["Selecciona un modelo","Fiesta", "Focus", "Mustang"] :
                        brandSelect === "chevrolet" ? ["Selecciona un modelo","Silverado", "Cruze", "Camaro"] :
                        brandSelect === "toyota" ? ["Selecciona un modelo","Corolla", "Camry", "RAV4"] :
                        brandSelect === "honda" ? ["Selecciona un modelo","Civic", "Accord", "CR-V"] :
                        brandSelect === "volkswagen" ? ["Selecciona un modelo","Golf", "Jetta", "Tiguan"] :
                        ['Selecciona una marca primero'];
    // Agregar las opciones de modelos al select 
    modelsOptions.forEach(function(model) {
        models.insertAdjacentHTML('beforeend', `<option value="${model}">${model}</option>`);
    });
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

function updateImage() { 
    const brand = carBrandSelect.value;
    const model = carModelSelect.value;

    const getImageURL = (brand, model) => {
        return brand === "ford" ? 
            model === "Fiesta" ? "https://media.autoexpress.co.uk/image/private/s--D8BPo2Sn--/v1579701600/autoexpress/2016/08/ford-fiesta-has-seven-years-as-the-uk-top-seller-and-four-years-as-europes-most-popular-small-car.jpg" :
            model === "Focus" ? "https://th.bing.com/th/id/OIP.hwUh0lJffDIBLixuLZCNfgAAAA?rs=1&pid=ImgDetMain" :
            model === "Mustang" ? "https://th.bing.com/th/id/OIP.EBjmeJnssSOPe6M7qqOyUAHaE8?rs=1&pid=ImgDetMain" :
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/102012/logoujap.png?itok=--szBodC" :

        brand === "chevrolet" ?
            model === "Silverado" ? "https://th.bing.com/th/id/OIP.eyzQA8pcO-MQOWVtAxh_swHaFj?rs=1&pid=ImgDetMain" :
            model === "Cruze" ? "https://www.trifectaperformance.com/uploads/monthly_2019_11/Press_18.jpg.fa47d02d7827ac9eb85a1d1fea1211d2.jpg" :
            model === "Camaro" ? "https://th.bing.com/th/id/R.18c077789a05556ed628911b56d61e3f?rik=SPKXIUjVxx7ekA&pid=ImgRaw&r=0" :
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/102012/logoujap.png?itok=--szBodC" :

        brand === "toyota" ?
            model === "Corolla" ? "https://quatrorodas.abril.com.br/wp-content/uploads/2019/03/toyota-corolla-2-e1553106218663.jpg?resize=165" :
            model === "Camry" ? "https://th.bing.com/th/id/R.055986eeba4f91c164d6235dddfafd35?rik=GX4FS1%2bTRsJUcA&pid=ImgRaw&r=0" :
            model === "RAV4" ? "https://th.bing.com/th/id/OIP.Ij84y7b5Ftg1thBlGdcC0AHaE8?rs=1&pid=ImgDetMain" :
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/102012/logoujap.png?itok=--szBodC" :

        brand === "honda" ?
            model === "Civic" ? "https://th.bing.com/th/id/R.df0384434b0f3c62dc3a19dbd9bbc61e?rik=tGmLJ8avZyD6eA&pid=ImgRaw&r=0" :
            model === "Accord" ? "https://th.bing.com/th/id/R.68f67082ec6a531a0f633b112f7302d5?rik=gG2mkTrMFLivEQ&pid=ImgRaw&r=0" :
            model === "CR-V" ? "https://th.bing.com/th/id/OIP.ItKC3uSSwlfxOUrtB0JpJwHaE7?rs=1&pid=ImgDetMain" :
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/102012/logoujap.png?itok=--szBodC" :

        brand === "volkswagen" ?
            model === "Golf" ? "https://th.bing.com/th/id/R.e9ea6a605fd058f7b19004b16b8a3472?rik=5AOPNaskTrlrCg&riu=http%3a%2f%2fwww.sembang-auto.com%2fwp-content%2fuploads%2f2012%2f09%2fVW-Golf-1.jpg&ehk=BrIX8fXAcvr4IjYYB64xACS%2fNdD5pXOspewkt%2fLup0I%3d&risl=&pid=ImgRaw&r=0" :
            model === "Jetta" ? "https://th.bing.com/th/id/R.cb85d20e0e2133ddb06a81ed47092e43?rik=92dafdC4Nl9Pzg&riu=http%3a%2f%2fcdn.carbuzz.com%2fgallery-images%2f1600%2f509000%2f400%2f509421.jpg&ehk=rgA6iQFt8YEKLGkrMAY2fUhFRvF3eTaNAUlJmAW%2fgZc%3d&risl=&pid=ImgRaw&r=0" :
            model === "Tiguan" ? "https://th.bing.com/th/id/OIP.x05eMbtzvdrvi4Le2445_AHaEK?rs=1&pid=ImgDetMain" :
            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/102012/logoujap.png?itok=--szBodC" :

            "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/102012/logoujap.png?itok=--szBodC";
    };

    const imageURL = getImageURL(brand, model);
    imagePreview.src = imageURL;
    URL.value = imageURL;
}