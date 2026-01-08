var schermo = document.getElementById("schermo");
var memoria = 0;

function aggiungi(valore) {
    if (schermo.value === "0") {
        schermo.value = valore;
    } else {
        schermo.value += valore;
    }
}

function cancella() {
    schermo.value = "0";
}


function sin() {
    var n = parseFloat(schermo.value);
    schermo.value = Math.sin(n * Math.PI / 180);
}

function cos() {
    var n = parseFloat(schermo.value);
    schermo.value = Math.cos(n * Math.PI / 180);
}

function tan() {
    var n = parseFloat(schermo.value);
    schermo.value = Math.tan(n * Math.PI / 180);
}

function radice() {
    var n = parseFloat(schermo.value);
    schermo.value = Math.sqrt(n);
}


function memoria() {
    memoria = parseFloat(schermo.value);
}

function memoriastampa() {
    schermo.value = memoria;
}


function calcola() {
    var testo = schermo.value;
    var elementi = [];
    var numero = "";

 
    for (var i = 0; i < testo.length; i++) {
        var c = testo[i];
        if ((c >= '0' && c <= '9') || c === '.') {
            numero += c;
        } else {
            elementi.push(numero);
            elementi.push(c);
            numero = "";
        }
    }
    elementi.push(numero);


    for (var i = 1; i < elementi.length; i += 2) {
        if (elementi[i] === '^') {
            var a = parseFloat(elementi[i - 1]);
            var b = parseFloat(elementi[i + 1]);
            var risultato = Math.pow(a, b);
            elementi.splice(i - 1, 3, risultato.toString());
            i -= 2;
        }
    }

    for (var i = 1; i < elementi.length; i += 2) {
        if (elementi[i] === '*' || elementi[i] === '/') {
            var a = parseFloat(elementi[i - 1]);
            var b = parseFloat(elementi[i + 1]);
            var risultato = (elementi[i] === '*') ? a * b : a / b;
            elementi.splice(i - 1, 3, risultato.toString());
            i -= 2;
        }
    }


    for (var i = 1; i < elementi.length; i += 2) {
        var a = parseFloat(elementi[i - 1]);
        var b = parseFloat(elementi[i + 1]);
        var risultato = (elementi[i] === '+') ? a + b : a - b;
        elementi.splice(i - 1, 3, risultato.toString());
        i -= 2;
    }

    schermo.value = elementi[0];
}
