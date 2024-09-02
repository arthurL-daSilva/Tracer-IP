// Set endpoint and your access key
const ip = '45.4.26.252';
const accessKey = '5b7eb238-810e-4b9d-b14c-8421ca4f52d8';
const url = 'https://apiip.net/api/check?ip='+ ip +'&accessKey='+ accessKey + '&output=json';

async function getIpInfo (){
    // Make a request and store the response
    const response = await fetch(url)
    
    if(response.status == 200){
        const obj = await response.json()
        console.log(obj)
    }
    else{
      console.log("Request failed")
    }
    // Decode JSON response:
    //const result = await response.json();
  
    // Output the "code" value inside "currency" object
    //console.log(result.currency.code);
  };
  getIpInfo();