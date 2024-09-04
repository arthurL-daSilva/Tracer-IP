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
        input_error.style.opacity = "0";
        input_box.style.backgroundColor = "#DCDCDC";
        input_box.style.transform = "translateY(0)";
        input_box.style.transition = "ease 2s";
        request_box.style.transitionDuration = "2s";
        request_box.style.transitionDelay = "1.3s";
        request_box.style.opacity = "1";
        request_box.style.transform = "translateY(0)";
        back_box.style.opacity = "1";
        back_box.style.transition = "ease 2s";
        back_box.style.transform = "translateY(0)";
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
    
    input_box.style.backgroundColor = "#antiquewhite";
    input_box.style.transform = "translateY(270px)";
    input_box.style.transition = "ease 2s";
    request_box.style.transitionDuration = "2s";
    request_box.style.transitionDelay = "0s";
    request_box.style.opacity = "0";
    request_box.style.transform = "translateY(15px)";
    back_box.style.opacity = "0";
    back_box.style.transition = "ease 2s";
    back_box.style.transform = "translateY(20px)";
}

async function getIpInfo(btn){
    btn.disabled = false;
    const ip = document.getElementById("input_ip");
    const ip_content = ip.value;
    const accessKey = '5b7eb238-810e-4b9d-b14c-8421ca4f52d8';
    const url = 'https://apiip.net/api/check?ip='+ ip_content +'&accessKey='+ accessKey; 
    const response = await fetch(url);

    if(response.status == 400){
        console.log("Error!");
        InputButtonConteudo(false);
    }else{
        btn.disabled = true;
        const result = await response.json();
        console.log(result);
        InputButtonConteudo(true);
        //ELEMENTOS DA API
        let cidade = document.getElementById("cidade")
        cidade.innerHTML += result.city; 
        //result: resultado da busca da API
        //.city: atributo buscado pela API   
    }
}