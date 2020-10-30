<?php
  global $tituloPagina;
  $tituloPagina = "Contato";
 include ('partes/cabecalho.php');
 $name = '';
 $email = '';
 $mensagem = '';
 $erroFormulario = '';
 $sucessoFormulario = '';
 if(isset($_POST['submit'])){
   $name = $_POST['nome'];
   $email = $_POST['email'];
   $mensagem = $_POST['mensagem'];
    if($name != '' && $mensagem != '' && $email != ''){
        $mensagemEmail = 'nome: ' . $name . ' - ';
        $mensagemEmail .= 'email: ' . $email . ' - ';
        $mensagemEmail .= 'mensagem: ' . $mensagem;
        if(mail('EmailDeDestino@contato.com', 'Assunto', $mensagemEmail)){
          $sucessoFormulario = "Email enviado com sucesso";
        }
        else{
          $erroFormulario = "Falha ao enviar email!";
        }
    }
      else{
        $erroFormulario = "Por gentileza, preencher todos os campos!";
    }
 }
?>
      <header class="pagina_cabecalho">
        <h1 class="pagina_cabecalho__titulo">Contato</h1>
      </header>
      <section class="pagina_conteudo container">
        <p class="text_center">nasiansia aposaposn aspnapnsa panspiansa asnaipnsa apoinspias</p>
        <form action="contato.php" method="post" class="formulario">
          <?php if($erroFormulario != '' ): ?>
            <div class="formulario__erro">
              <?php echo $erroFormulario ?>
            </div>
          <?php endif; ?>
          <?php if($sucessoFormulario != '' ): ?>
            <div class="formulario__sucesso">
              <?php echo $sucessoFormulario ?>
            </div>
          <?php endif; ?>
          <div class="formulario__grupo formulario__grupo-esq">
            <label class="formulario__label" for="nome">Nome</label><br>
            <input class="formulario__campo" type="text" name="nome" value="">
          </div>
          <div class="formulario__grupo formulario__grupo-dir">
            <label class="formulario__label" for="email">Email</label><br>
            <input class="formulario__campo" type="email" name="email" value="">
          </div>
          <div class="formulario__grupo">
            <label class="formulario__label" for="mensagem">Mensagem</label><br>
            <textarea class="formulario__campo" name="mensagem" id="mensagem" rows="8" cols="80"></textarea>
          </div>
          <input class="formulario__botao" type="submit" name="submit" value="Enviar">
        </form>
      </section>
      <div class="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14634.1059964332!2d-46.18046269999999!3d-23.513558649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd9d0ad41e597%3A0x84b4e41f20761fa0!2zSMO2Z2Fuw6RzIEJyYXNpbCBMdGRh!5e0!3m2!1spt-BR!2sbr!4v1598491324433!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
  <?php include('partes/rodape.php');?>
