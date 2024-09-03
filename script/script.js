//https://apiip.net/user/dashboard

function limitedInput(){
    var ip = document.getElementById("input_ip");
    var ip_content = ip.value;

    if(ip_content.length > 12){
        ip.value = ip_content.slice(0, 15);
    }
    console.log(ip_content)
}

function InputButtonConteudo(){
    var input_box = document.getElementById("changeProperties");
    var request_box = document.getElementById("API_request");
    input_box.style.backgroundColor = "#DCDCDC";
    input_box.style.transform = "translateY(0)";
    input_box.style.transition = "2s ease-out";
    request_box.style.transitionDuration = "2s";
    request_box.style.transitionDelay = "1.3s";
    request_box.style.opacity = "1";
    request_box.style.transform = "translateY(0)";
}

async function getIpInfo (){
    const ip = document.getElementById("input_ip");
    const ip_content = ip.value;
    const accessKey = '5b7eb238-810e-4b9d-b14c-8421ca4f52d8';
    const url = 'https://apiip.net/api/check?ip='+ ip_content +'&accessKey='+ accessKey; 
    const response = await fetch(url);
    const result = await response.json();
  
    console.log(result);
    InputButtonConteudo();
}