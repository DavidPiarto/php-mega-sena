<?php

// array mega-sena
$_megasena = array();

// contador
$_contador = 1;

// enquanto contador < 6
while ($_contador < 6) {
    // sorteia um numero de 1 a 10
    $_sorteio = rand(1, 10);

    // se o numero n estiver no array megasena, adiciona
    if (!in_array($_sorteio, $_megasena)) {

        // adicionando 
        $_megasena[] = $_sorteio;

        // contando
        $_contador++;
    }
}

// ordenacao do array
sort($_megasena);

// variavel de ajuda
$_ajuda = null;

// foreach para colocar na variavel de ajuda separado por ' - ' . Exemplo: 1 - 2 - 3 - 4 - 5 -
foreach ($_megasena as $_numeros) {

    $_ajuda = $_ajuda . $_numeros . " - ";
}

// tira o ultimo -
$_resposta = rtrim($_ajuda, " -");

// volta para a pagina js
echo $_resposta;
return;
