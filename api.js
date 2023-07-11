/*function consumir() {
  //var urls=[];
  // Nombre
  //var names=[];
  // id
  //var ids=[]
  // Tiempo de crecimiento
  //var growth_times=[]; 
  // Tamaño
  //var max_harvests=[];
  //  poderes de dones naturales
  //var natural_gift_powers=[]; 
  // tamaño
  var sizes=[];
  // suavidad
  var smoothnesses=[];  
  // sequedad de suelo
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
              //console.log(datos2['id']);
              ids.push(datos2['id']);
              //console.log(datos2['name']);
              names.push(datos2['name']);
              //console.log(datos2['growth_time']);
              growth_times.push(datos2['growth_time']);
              //console.log(datos2['max_harvest']);
              max_harvests.push(datos2['max_harvest']);
              //console.log(datos2['natural_gift_power']);
              natural_gift_powers.push(datos2['natural_gift_power']);
              //console.log(datos2['size']);
              sizes.push(datos2['size']);
              //console.log(datos2['smoothness']);
              smoothnesses.push(datos2['smoothness']);
              //console.log(datos2['soil_dryness']);
              soil_drynesses.push(datos2['soil_dryness']);
            })
          }  

            console.log(ids[5]);
            var tabla = document.getElementById('tabla');
            var contenido = '';
            for (var i = 0; i < urls.length; i++){
                contenido = contenido + '<tr><td>' + ids[i] + '</td><td>'+ names[i] + '</td><td>'+ growth_times[i] + '</td><td>'+ natural_gift_powers[i] + '</td><td>'+ sizes[i] + '</td><td>'+ smoothnesses[i] + '</td><td>'+ soil_drynesses[i] + '</td><td>'
                +' </td></tr>';
            }
            tabla.innerHTML = contenido;
      })*/
  //https://pokeapi.co/api/v2/berry/


  function consumir() {
    var urls = [];
    var names = [];
    var ids = [];
    var growth_times = [];
    var max_harvests = [];
    var natural_gift_powers = [];
    var sizes = [];
    var smoothnesses = [];
    var soil_drynesses = [];
  
    var endPoint = document.getElementById("endPoint").value;
    fetch(endPoint)
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(datos) {
        var promesas = [];
        for (var i = 0; i < datos['results'].length; i++) {
          urls.push(datos['results'][i]['url']);
        }
        for (var i = 0; i < urls.length; i++) {
          promesas.push(fetch(urls[i])
            .then(function(respuesta) {
              return respuesta.json();
            })
            .then(function(datos2) {
              ids.push(datos2['id']);
              names.push(datos2['name']);
              growth_times.push(datos2['growth_time']);
              max_harvests.push(datos2['max_harvest']);
              natural_gift_powers.push(datos2['natural_gift_power']);
              sizes.push(datos2['size']);
              smoothnesses.push(datos2['smoothness']);
              soil_drynesses.push(datos2['soil_dryness']);
            })
          );
        }
  
        Promise.all(promesas)
          .then(function() {
            var tabla = document.getElementById('tabla');
            var contenido = '';
            for (var i = 0; i < urls.length; i++) {
              contenido += '<tr><td>' + ids[i] + '</td><td>'+ names[i] + '</td><td>'+ growth_times[i] + '</td><td>'+ natural_gift_powers[i] + '</td><td>'+ sizes[i] + '</td><td>'+ smoothnesses[i] + '</td><td>'+ soil_drynesses[i] + '</td></tr>';
            }
            tabla.innerHTML = contenido;

            
              var data = [{
                
                  x: names, 
                  y: growth_times, 
                  type: 'bar'
                }
              ];
            
              Plotly.newPlot('myDiv1', data);
            
          });
      });
    }

  

