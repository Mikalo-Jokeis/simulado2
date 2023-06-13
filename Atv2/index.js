function reverseString(str) {
    var reversed = "";

    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

function invertString() {
    var input = document.getElementById("inputString").value;
    var resultElement = document.getElementById("result");
    var invertedString = reverseString(input);

    resultElement.textContent = "String invertida: " + invertedString;
}