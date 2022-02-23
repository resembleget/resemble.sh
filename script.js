url = 'https://api.ipify.org/?format=json';
var ip = document.getElementById("ip");
function find(){
    fetch(url).then(res => res.json().then(result => {
        ip.innerText = result.ip;
    }))
}