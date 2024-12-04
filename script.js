const button = document.querySelector(".click");
const apiKey = "fbeba6e069051f2d01dda20644d61c4b";
let lat,long;

button.addEventListener("click",()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess , onError);
  }
  else{
    button.innerHTML = "browser not support"
  }

  function onSuccess(position){
    lat = position.coords.latitude;
    long = position.coords.longitude;
    geoloco();
  }
  function onError(error){
    button.innerHTML = `error code: ${error.code} , ${error.message}`
  }
  
  async function geoloco(){
    const request = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=5&appid=${apiKey}`)
    var data = await request.json();
    button.innerHTML = `${data[0].name} , ${data[0].state} , ${data[0].country}`;
  }
})