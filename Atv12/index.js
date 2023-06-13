function SqrPerfect(number) {
    if (number < 0) {
        return false;
    }

    for (let i = 0; i = Math.sqrt(number); i++) {
        if ((Number.isInteger(Math.sqrt(number)))) {
            return false;
        }
    }

    return true;
}



function checkSquare() {
    var numero = parseInt(document.getElementById("numeroInput").value);
    var resultElement = document.getElementById("result");

    if (SqrPerfect(numero)) {
        resultElement.textContent = "O número " + numero + " é um quadrado perfeito.";
    } else {
        resultElement.textContent = "O número " + numero + " não é um quadrado perfeito.";
    }
}