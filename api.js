function consumir() {
  var urls=[];
  var names=[];
  var ids=[]
  var growth_times=[]; 
  var max_harvests=[]; 
  var natural_gift_powers=[]; 
  var sizes=[];
  var smoothnesses=[];  
  var soil_drynesses=[];
    var endPoint = document.getElementById("endPoint").value;
    fetch(endPoint)
      .then(function(respuesta) {
        return respuesta.json();})
      .then(function(datos) {
        console.log(datos);
        for (var i = 0; i < datos['results'].length; i++){
          urls.push(datos['results'][i]['url']);
        }
        for (var i = 0; i < urls.length; i++){
          fetch(urls[i])
            .then(function(respuesta) {
              return respuesta.json();
            })
            .then(function(datos2) {
              console.log(datos2['id']);
              ids.push(datos2['id']);
              console.log(datos2['name']);
              names.push(datos2['name']);
              console.log(datos2['growth_time']);
              growth_times.push(datos2['growth_time']);
              console.log(datos2['max_harvest']);
              max_harvests.push(datos2['max_harvest']);
              console.log(datos2['natural_gift_power']);
              natural_gift_powers.push(datos2['natural_gift_power']);
              console.log(datos2['size']);
              sizes.push(datos2['size']);
              console.log(datos2['smoothness']);
              smoothnesses.push(datos2['smoothness']);
              console.log(datos2['soil_dryness']);
              soil_drynesses.push(datos2['soil_dryness']);
            })
        }  
      })
}
  //https://pokeapi.co/api/v2/berry/