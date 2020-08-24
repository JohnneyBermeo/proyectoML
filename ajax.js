$('#idFormulario').on('submit',function(e){   

  e.preventDefault();

  var escuela = $('#Escuela').val();
  var sexo = $('#Sexo').val();
  var zona = $('#Zona').val();
  var tiempo_e = $('#Tiempo_E').val();
  var apoyo_e = $('#Apoyo_E').val();
  var apoyo_f = $('#Apoyo_F').val();
  var acceso_in = $('#Acceso_In').val();
  var salud = $('#Salud').val();
  var nota_1 = $('#Nota_1').val();
  var nota_2 = $('#Nota_2').val();

  var datos = {
    data: [{ 
        Escuela: escuela,
        Sexo:sexo,
        Zona: zona,
        Tiempo_E: tiempo_e,
        Apoyo_E: apoyo_e,
        Apoyo_F: apoyo_f,
        Acceso_In: acceso_in,
        Salud: salud,
        Nota_1: nota_1,
        Nota_2: nota_2
    }]
  };

  console.log(datos);

  var url = "https://go.rapidminer.com/am/api/deployments/30f470d5-dd9e-4cf4-9508-0775d75abc0f";
  
$.ajax({
    type: "POST",
    data: JSON.stringify(datos),
    url: url,
    contentType: "application/json"
}).done(function(res) {       
    
    var hola = res.data;
    console.log(hola);

    $.each(res.data, function(index,value){
      $.each(value, function (index, data) {
        if (index == "prediction(Nota_3)") {
          //var Nota_3 = Math.floor(data);
          var Nota_3 = Math.round(data*100)/100;
          $('#Nota_3').attr("value", Nota_3); 
          console.log(Nota_3);
        }
        
      })
    });
  });

});