<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php
        $titulo = "Design Responsivo";
        global $tituloPagina;
        if($tituloPagina != ''){
          $titulo .= '|' . $tituloPagina;
        }
    ?>
    <title><?php echo $titulo ?></title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
  </head>
  <body>
    <header class="cabecalho">
      <div class="container">
      <?php if($tituloPagina == ''): ?>
          <h1 class="logo">Responsivo</h1>
      <?php else: ?>
          <a href="index.php"class="logo">Responsivo</a>
      <?php endif; ?>
        <nav class="menu-principal menu-principal--fechado">
          <button type="button" name="button" class="menu-principal__btn menu-principal__btn--fechar">Abrir-Fechar</button>
          <ul class="menu-principal__lista">
            <li><a class="menu-principal__item" <?php echo $tituloPagina == '' ? 'menu-principal--atual' : ''?> href="index.php">Home</a></li>
            <li><a class="menu-principal__item" <?php echo $tituloPagina == 'Sobre Nós' ? 'menu-principal--atual' : ''?> href="sobre.php">Sobre Nós</a></li>
            <li><a class="menu-principal__item" <?php echo $tituloPagina == 'Portifolio' ? 'menu-principal--atual' : ''?>href="portifolio.php">Portifólio</a></li>
            <li><a class="menu-principal__item" <?php echo $tituloPagina == 'Contato' ? 'menu-principal--atual' : ''?> href="contato.php">Contato</a></li>
          </ul>
      </nav>
      </div>
    </header>
    <main>
