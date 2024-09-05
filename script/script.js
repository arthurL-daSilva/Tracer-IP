//https://apiip.net/user/dashboard

function limitedInput(){
    var ip = document.getElementById("input_ip");
    var ip_content = ip.value;

    if(ip_content.length > 12){
        ip.value = ip_content.slice(0, 15);
    }
    console.log(ip_content);
}

function InputButtonConteudo(callback){
    var input_error = document.getElementById("ip_notfound");
    var input_box = document.getElementById("changeProperties");
    var request_box = document.getElementById("API_request");
    var back_box = document.getElementById("cancel");
    if(callback){
        document.getElementById("first_pick").disabled = true;
        input_error.style.opacity = "0";
        input_box.style.backgroundColor = "#DCDCDC";
        input_box.style.transform = "translateY(0)";
        input_box.style.transition = "ease 2s";
        request_box.style.transitionDuration = "2s";
        request_box.style.transitionDelay = "1.3s";
        request_box.style.opacity = "1";
        request_box.style.transform = "translateY(0)";
        back_box.style.cursor = "pointer";
        back_box.style.opacity = "1";
        back_box.style.transition = "ease 2s";
    }
    else{
        input_error.style.opacity = "1";
    }
}

function inputButtonback(){
    var input_box = document.getElementById("changeProperties");
    var request_box = document.getElementById("API_request");
    var back_box = document.getElementById("cancel");

    document.getElementById("first_pick").disabled = false;

    input_box.style.backgroundColor = "#FAEBD7";
    input_box.style.transform = "translateY(220px)";
    input_box.style.transition = "ease 2s";
    request_box.style.transitionDuration = "2s";
    request_box.style.transitionDelay = "0s";
    request_box.style.opacity = "0";
    request_box.style.transform = "translateY(15px)";
    back_box.style.opacity = "0";
    back_box.style.transition = "ease 2s";
    back_box.style.cursor = "default"

}

async function getIpInfo(){
    const ip = document.getElementById("input_ip");
    const ip_content = ip.value;
    const accessKey = '4eb9b3b5-2d37-46e9-a7fa-3e5ffa38ded9';
    const url = 'https://apiip.net/api/check?ip='+ ip_content +'&accessKey='+ accessKey; 
    const response = await fetch(url);

    if(response.status == 400){
        console.log("Error!");
        InputButtonConteudo(false);
    }else{
        const result = await response.json();
        console.log(result);
        InputButtonConteudo(true);
        //ELEMENTOS DA API
        let cidade = document.getElementById("cidade");
        let pais = document.getElementById("pais");
        let capital = document.getElementById("capital");
        let continente = document.getElementById("continente");
        let nome_oficial = document.getElementById("nomeoficial");
        let estado = document.getElementById("estado");
        let cep = document.getElementById("cep");
        let geox = document.getElementById("geox");
        let geoy = document.getElementById("geoy");

        cidade.innerHTML += result.city;
        pais.innerHTML += result.countryNameNative + " " + result.countryFlagEmoj;
        capital.innerHTML += result.capital;
        continente.innerHTML += result.continentName + " " + result.continentCode;
        nome_oficial.innerHTML += result.officialCountryName;
        estado.innerHTML += result.regionName;
        cep.innerHTML += result.postalCode;
        geox.innerHTML += result.longitude;
        geoy.innerHTML += result.latitude; 
    }
}