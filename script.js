$(function() {
    $('button').bind('click', function() {
        var altura = $('#altura').val();
        var peso = $('#peso').val();

        altura = altura.replace(',', '.');
        peso = peso.replace(',', '.');

        var resultado = peso / (altura * altura);

        if (resultado < 16) {
            var estadoIMC = 'Baixo peso [Muito Grave]';
        } else if (resultado >= 16 && resultado < 17) {
            var estadoIMC = 'Baixo peso [Grave]';
        } else if (resultado >= 17 && resultado < 18.50) {
            var estadoIMC = 'Baixo peso';
        } else if (resultado >= 18.50 && resultado < 25) {
            var estadoIMC = 'Peso normal';
        } else if (resultado >= 25 && resultado < 30) {
            var estadoIMC = 'Sobrepeso';
        } else if (resultado >= 30 && resultado < 35) {
            var estadoIMC = 'Obesidade grau I';
        } else if (resultado >= 35 && resultado < 40) {
            var estadoIMC = 'Obesidade grau II';
        } else if (resultado >= 40) {
            var estadoIMC = 'Obesidade grau III [Obesidade Mórbida]';
        }

        $('#resultado').html("O IMC é: " + resultado.toFixed(2) + " Kg/m² <br>O estado é: " + estadoIMC);
    });
});