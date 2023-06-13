function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function checkPrime() {
    var number = parseInt(document.getElementById("numberInput").value);
    var resultElement = document.getElementById("result");

    if (isPrime(number)) {
        resultElement.textContent = "O número " + number + " é primo.";
    } else {
        resultElement.textContent = "O número " + number + " não é primo.";
    }
}