 var schermo = document.getElementById("schermo");

        function aggiungi(s) {
            schermo.value += s;
        }

        function cancella() {
            schermo.value = "";
        }
        function calcola() {
        var testo = schermo.value;
        var elementi = [];
        var numero = "";
        if (testo.startsWith("sin")) {
          var n = parseFloat(testo.substring(3));
          schermo.value = Math.sin(n * Math.PI / 180);
          return;
        }
        if (testo.startsWith("cos")) {
          var n = parseFloat(testo.substring(3));
          schermo.value = Math.cos(n * Math.PI / 180);
          return;
        }
        if (testo.startsWith("tan")) {
          var n = parseFloat(testo.substring(3));
          schermo.value = Math.tan(n * Math.PI / 180);
          return;
        }
        if (testo.startsWith("√")) {
          var n = parseFloat(testo.substring(1));
          schermo.value = Math.sqrt(n);
          return;
        }
        if (schermo.value.endsWith("%")) {
          var numero = schermo.value.substring(0, schermo.value.length - 1);
          numero = parseFloat(numero);
          schermo.value = numero / 100;
          return;
        }
        for (var i = 0; i < testo.length; i++) {
          var c = testo[i];
            if ((c >= '0' && c <= '9') || c == '.') {
              numero += c;
            } else {
              elementi.push(numero);
              elementi.push(c);
              numero = "";
            }
        }
        elementi.push(numero);
        for (var i = 1; i < elementi.length; i += 2) {
          if (elementi[i] == '^') {
            var a = parseFloat(elementi[i - 1]);
            var b = parseFloat(elementi[i + 1]);
            var risultato = Math.pow(a, b);
            elementi.splice(i - 1, 3, risultato.toString());
            i -= 2;
          }
        }
        for (var i = 1; i < elementi.length; i += 2) {
          if (elementi[i] == '*' || elementi[i] == '/') {
            var a = parseFloat(elementi[i - 1]);
            var b = parseFloat(elementi[i + 1]);
            var risultato = 0;
            if (elementi[i] == '*') {
                risultato = a * b;
            } else {
                risultato = a / b;
            }
            elementi.splice(i - 1, 3, risultato.toString());
            i -= 2;
          }
        }
        for (var i = 1; i < elementi.length; i += 2) {
          var a = parseFloat(elementi[i - 1]);
          var b = parseFloat(elementi[i + 1]);
          var risultato = 0;
          if (elementi[i] == '+') {
            risultato = a + b;
          } else if (elementi[i] == '-') {
            risultato = a - b;
          }
          elementi.splice(i - 1, 3, risultato.toString());
          i -= 2;
        }
        schermo.value = elementi[0];
    }
