
$(function () {
  CreateColorPicker();

  // $('#CadEvent').on("submit", function (event){
  //   event.preventDefault();
  //   $.ajax({
  //     method: "POST",
  //     url: "colocar aqui o ulr",
  //     data: new FormData(this),
  //     contentType: false, 
  //     processData: false,
  //     success: function(retorna){
  //        if(retorna['sit']){
  //          location.reload();
  //        }else{
  //            $("#msg-cad").html(retorna['msg'])
  //         }
  //     }
  //   })
  // });

    // $('#editEvent').on("submit", function (event){
  //   event.preventDefault();
  //   $.ajax({
  //     method: "POST",
  //     url: "colocar aqui o ulr",
  //     data: new FormData(this),
  //     contentType: false, 
  //     processData: false,
  //     success: function(retorna){
  //        if(retorna['sit']){
  //          location.reload();
  //        }else{
  //            $("#msg-edit").html(retorna['msg'])
  //         }
  //     }
  //   })
  // });

  $(".btn-canc-vis").click(function(){
    $('.visEvent').slideToggle();
    $('.formEdit').slideToggle();
  });

  $(".btnEditarEvento").click(function(){
    $('.visEvent').slideToggle();
    $('.formEdit').slideToggle();
  });

  $(".btn-materias-faltas").click(function(){
    $('.matFalta').slideToggle();
    $('.visMaterias').slideToggle();
  });

  $(".btn-materias-notas").click(function(){
    $('.matNota').slideToggle();
    $('.visMaterias').slideToggle();
  });

  $(".btn-materias-info").click(function(){
    $('.matInfo').slideToggle();
    $('.visMaterias').slideToggle();
  });

  $(".btnToggleAddEvento").click(function(){
    $('.visEvent').slideToggle();
    $('.ModalVisEventAdd').slideToggle();
  });

  $(".btn-visualizar-faltas").click(function(){
    $('.visFalta').slideToggle();
    $('.visEvent').slideToggle();
  });

  $(".btn-visualizar-notas").click(function(){
    $('.visNota').slideToggle();
    $('.visEvent').slideToggle();
  });

});

function CreateColorPicker(){
  const x = document.querySelectorAll('.color-pickers');
  const newElement = document.createElement('div');

  for (i = 0; i < x.length; i++){
    var id = x[i].id;
    if(id == "bgcolor"){
      x[i].appendChild(newElement);

      const pickr = new Pickr({
        el: newElement,
        theme: 'nano',
        default:'#E1E1E1',
        
        swatches: [
          'rgba(244, 67, 54, 1)',
          'rgba(233, 30, 99, 0.95)',
          'rgba(156, 39, 176, 0.9)',
          'rgba(103, 58, 183, 0.85)',
          'rgba(63, 81, 181, 0.8)',
          'rgba(33, 150, 243, 0.75)',
          'rgba(3, 169, 244, 0.7)',
          'rgba(0, 188, 212, 0.7)',
          'rgba(0, 150, 136, 0.75)',
          'rgba(76, 175, 80, 0.8)',
          'rgba(139, 195, 74, 0.85)',
          'rgba(205, 220, 57, 0.9)',
          'rgba(255, 235, 59, 0.95)',
          'rgba(255, 193, 7, 1)'
        ],

        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: true,
            save: true
          }
        }

      });
    }
    else{
      x[i].appendChild(newElement);

      const pickr = new Pickr({
        el: newElement,
        theme: 'nano',
        default:'#000000',
        
        swatches: [
          'rgba(244, 67, 54, 1)',
          'rgba(233, 30, 99, 0.95)',
          'rgba(156, 39, 176, 0.9)',
          'rgba(103, 58, 183, 0.85)',
          'rgba(63, 81, 181, 0.8)',
          'rgba(33, 150, 243, 0.75)',
          'rgba(3, 169, 244, 0.7)',
          'rgba(0, 188, 212, 0.7)',
          'rgba(0, 150, 136, 0.75)',
          'rgba(76, 175, 80, 0.8)',
          'rgba(139, 195, 74, 0.85)',
          'rgba(205, 220, 57, 0.9)',
          'rgba(255, 235, 59, 0.95)',
          'rgba(255, 193, 7, 1)'
        ],

        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: true,
            save: true
          }
        }

      });

    }
  }
}

//Mascara para o campo data e hora
function DataHora(evento, objeto) {
    var keypress = (window.event) ? event.keyCode : evento.which;
    campo = eval(objeto);
    if (campo.value == '00/00/0000 00:00:00') {
        campo.value = "";
    }

    caracteres = '0123456789';
    separacao1 = '/';
    separacao2 = ' ';
    separacao3 = ':';
    conjunto1 = 2;
    conjunto2 = 5;
    conjunto3 = 10;
    conjunto4 = 13;
    conjunto5 = 16;
    if ((caracteres.search(String.fromCharCode(keypress)) != -1) && campo.value.length < (19)) {
        if (campo.value.length == conjunto1)
            campo.value = campo.value + separacao1;
        else if (campo.value.length == conjunto2)
            campo.value = campo.value + separacao1;
        else if (campo.value.length == conjunto3)
            campo.value = campo.value + separacao2;
        else if (campo.value.length == conjunto4)
            campo.value = campo.value + separacao3;
        else if (campo.value.length == conjunto5)
            campo.value = campo.value + separacao3;
    } else {
        event.returnValue = false;
    }
}

function limparForm(idform){
  var input = $('#' + idform).find(".form-control");
  var select = $('#' + idform).find(".custom-select");

  for (var i = 0; i < input.length; i++) {
    input[i].value = "";
  }

  for (var i = 0; i < select.length; i++) {
    select[i].value = "1";
  }
}
