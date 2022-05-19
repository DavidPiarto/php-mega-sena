// evento que dispara toda vez que um checkbox é checked ou não
$("input[name='valSorteio']").on("change", function () {

    // quantidade atual de quantos checkboxs estão checkeds
    qntAtual = $("input[name='valSorteio']:checked").length;

    // logica de desabilitar e habilitar checkboxs
    if (qntAtual < 5) {
        // habilita
        $("input[name='valSorteio']").attr("disabled", false);
    } else {
        // desabilita
        $("input[name='valSorteio']:not(:checked)").attr("disabled", true);
    }

});

// evento ao clicar no botao sortiar
$("#sortiar").on("click", function () {

    // arrays utilizados
    var numerosEscolhidos = [];
    var numerosSorteados = [];

    // adiciona no array dos numeros escolhidos
    $('input[name="valSorteio"]:checked').each(function () {
        numerosEscolhidos.push(this.value);
    });

    // se o array for igual a 5 de indice
    if (numerosEscolhidos.length == 5) {

        // ordenação dos numeros escolhidos
        numerosEscolhidos.map(i => Number(i));

        // requisição ajax para a pagina php
        $.ajax({
            url: "logica.php"
        }).done(function (sortiados) {

            // mostra a div oculta
            $("#divOculta").show()

            // add os números sorteados
            $("#numerosSortiados").text(sortiados);

            // transforma os numeros sortiados em um array 
            numerosSorteados = sortiados.split(" - ");

            // variavel booleana para saber se os 2 arrays sao iguais
            let isEqual = JSON.stringify(numerosEscolhidos) === JSON.stringify(numerosSorteados);

            if (isEqual) {
                // muda o texto da cor para verde
                $("#mensagem").css("color", "green");

                // mensagem
                $("#mensagem").text("Parabéns! Você ganhou!");
            } else {
                // muda o texto da cor para vermelho
                $("#mensagem").css("color", "red");

                // mensagem
                $("#mensagem").text("Por pouco! Tente novamente!");
            }

        });

    } else {
        // mensagem ao tentar sortiar sem escolher os 5 números
        alert("Atenção! Escolha 5 números para prosseguir...");
    }

});