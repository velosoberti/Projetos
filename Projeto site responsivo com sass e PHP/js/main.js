$(document).ready(function(){
  $('.menu-principal__btn').click(function(){
   $('.menu-principal').toggleClass('menu-principal--fechado')
  });
  $('.depoimentos__caixa').slick({
    autoplay: true,
    arrows: false,
    dots: true
  });
  $('.formulario').validate({
    rules:{
      nome:{
        required: true
      },
      email:{
        required: true,
        email: true
      },
      mensagem:{
        required: true
      }
    },
    messages:{
      nome:{
        required: "Preenchimento obrigatório!"
      },
      mensagem:{
        required: "Preenchimento obrigatório!"
      },
      email:{
        required: "Preenchimento obrigatório!",
        email: "Email inválido!"
      }
    }
  });
});






//JAVASCRIPT PURO
//let botao = document.querySelector('.menu-principal__btn');
//let menuPrincipal = document.querySelector('.menu-principal');

//botao.addEventListener("click", abreFechaMenu);

//function abreFechaMenu(evento){
//        menuPrincipal.classList.toggle('menu-principal--fechado');
//}

//jquery

//$('.seletor').ação(); -> comando para jquey
//$('.selector').evento(function{

//}); -> comando para eventos no JQUEY
