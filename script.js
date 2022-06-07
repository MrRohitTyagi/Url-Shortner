let text = document.querySelector('.text');

let input = document.getElementById('inp');


async function link(){

    
    let val = input.value;
    if(val == ""){
        return
    }
    console.log(val);

const encodedParams = new URLSearchParams();
encodedParams.append("url",val );

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
		'X-RapidAPI-Key': '7b18740137msh4be1b00d17fda6bp1bbccfjsndafb6bd5ced1'
	},
	body: encodedParams
};

let data = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)

let res = await data.json();
console.log(res.result_url);    
if(res.result_url == undefined){

    text.innerHTML = "Enter Correct Link"
    input.value = ""
    return

}
text.innerHTML =res.result_url
}



function copy(){

    console.log(text.innerHTML);
    if(text.innerHTML == "Enter Correct Link"){
        document.getElementById('copybtn').innerText = "Not Applicable"
        document.getElementById('copybtn').style.backgroundColor = "red"
        setTimeout(() => {
            document.getElementById('copybtn').innerText = "Copy"
            document.getElementById('copybtn').style.backgroundColor = "#0074D9"
            
    }, 2000);
    return
    
}

navigator.clipboard.writeText(text.innerHTML)
document.getElementById('copybtn').innerText = "Copied"
document.getElementById('copybtn').style.border = "2px solid red"
  setTimeout(() => {
      document.getElementById('copybtn').innerText = "Copy"
      document.getElementById('copybtn').style.border = "2px solid blue"
      
  }, 2000);
  
}
