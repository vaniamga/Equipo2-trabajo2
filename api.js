function consumir() {
    var endPoint = document.getElementById("endPoint").value;
    fetch(endPoint)
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(datos) {
        var precios = [];
        var categorias = [];
        for (var i = 0; i < datos.length; i++) {
          if (datos[i].category !== undefined && datos[i].price !== undefined) {
            precios.push(datos[i].price);
          }
        }
        console.log(precios);
        alert(precios);
      });
  }