//https://apiip.net/user/dashboard

function limitedInput(){
    //Pega o conteudo com id "input_ip"
    var ip = document.getElementById("input_ip");

    // Armazena o conteudo do id "input_ip" na váriável ip_input
    var ip_content = ip.value;
    // mostra o conteudo da variavel ip_content

    if(ip_content.length > 12){
        //ip_content.slice() - extrai uma parte 
        //da string com base nos índices específicados
        //de 0 a 15.
        ip.value = ip_content.slice(0, 15);
    }
    console.log(ip_content)
}

function InputButtonConteudo(){
    var color = document.getElementById("changeColor");
    var position =  document.getElementById("changePosition");
    color.style.backgroundColor = "#DCDCDC";
    position.style.alignItems = "flex-start";
    position.style.justifyContent = "flex-start";
}

async function getIpInfo (){
    // Set endpoint and your access key
    const ip = document.getElementById("input_ip");
    const ip_content = ip.value;
    const accessKey = '5b7eb238-810e-4b9d-b14c-8421ca4f52d8';
    const url = 'https://apiip.net/api/check?ip='+ ip_content +'&accessKey='+ accessKey; 
  
    // Make a request and store the response
    const response = await fetch(url);
  
    // Decode JSON response:
    const result = await response.json();
  
    // Output the "code" value inside "currency" object
    console.log(result);
    InputButtonConteudo();
  };
  getIpInfo();