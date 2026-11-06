
// 1. SUMA
function SUMA() {
    var a = parseInt(document.getElementById("sumaA").value);
    var b = parseInt(document.getElementById("sumaB").value);

    if (isNaN(a) || isNaN(b)) {
        alert("Podaj dwie liczby!");
    } else {
        var suma = a + b;
        alert("Suma wynosi: " + suma);
    }
}


// 2. PODSTAWY
function PODSTAWY() {
    var a = Number(document.getElementById("podA").value);
    var b = Number(document.getElementById("podB").value);

    if (document.getElementById("podA").value === "" ||
        document.getElementById("podB").value === "") {
        alert("Podaj dwie liczby!");
        return;
    }

    var roznica = a - b;
    var iloczyn = a * b;

    alert("Różnica: " + roznica +
          "\nIloczyn: " + iloczyn);

    if (b !== 0) {
        alert("Iloraz: " + (a / b));
    } else {
        alert("Nie można dzielić przez zero!");
    }
}


// 3. KALKULATOR
function KALKULATOR() {
    var a = Number(document.getElementById("kalA").value);
    var b = Number(document.getElementById("kalB").value);
    var dzialanie = document.getElementById("dzialanie").value;
    var wynik;

    if (document.getElementById("kalA").value === "" ||
        document.getElementById("kalB").value === "") {
        alert("Podaj dwie liczby!");
        return;
    }

    if (dzialanie === "suma") {
        wynik = a + b;
    } else if (dzialanie === "roznica") {
        wynik = a - b;
    } else if (dzialanie === "iloczyn") {
        wynik = a * b;
    } else if (dzialanie === "iloraz") {
        if (b === 0) {
            document.getElementById("wynik").innerHTML =
                "Nie można dzielić przez zero!";
            return;
        }
        wynik = a / b;
    }

    document.getElementById("wynik").innerHTML =
        "Wynik: " + wynik;
}


// 4. MAKS
function MAKS() {
    var a = Number(document.getElementById("maksA").value);
    var b = Number(document.getElementById("maksB").value);
    var c = Number(document.getElementById("maksC").value);

    if (document.getElementById("maksA").value === "" ||
        document.getElementById("maksB").value === "" ||
        document.getElementById("maksC").value === "") {
        alert("Podaj trzy liczby!");
        return;
    }

    var maks = a;

    if (b > maks) {
        maks = b;
    }

    if (c > maks) {
        maks = c;
    }

    alert("Największa liczba to: " + maks);
}


// 5. WZROST
function WZROST() {
    var wzrost = Number(document.getElementById("wzrost").value);

    if (document.getElementById("wzrost").value === "" ||
        wzrost <= 0) {
        alert("Podaj prawidłowy wzrost!");
    } else if (wzrost < 150) {
        alert("Wzrost niski");
    } else if (wzrost > 180) {
        alert("Wzrost wysoki");
    } else {
        alert("Wzrost średni");
    }
}


// 6. BMI
function BMI() {
    var wzrost = Number(document.getElementById("bmiWzrost").value);
    var waga = Number(document.getElementById("bmiWaga").value);

    if (wzrost <= 0 || waga <= 0 ||
        document.getElementById("bmiWzrost").value === "" ||
        document.getElementById("bmiWaga").value === "") {
        alert("Podaj prawidłowy wzrost i wagę!");
        return;
    }

    var wzrostMetry = wzrost / 100;
    var bmi = waga / (wzrostMetry * wzrostMetry);

    var komentarz;

    if (bmi < 18.5) {
        komentarz = "za mało!";
    } else if (bmi > 25) {
        komentarz = "za dużo!";
    } else {
        komentarz = "OK!";
    }

    document.getElementById("bmiWynik").innerHTML =
        "BMI: " + bmi.toFixed(2) + " - " + komentarz;
}


// 7. STARSZY
function STARSZY() {
    var data1 = document.getElementById("data1").value;
    var data2 = document.getElementById("data2").value;

    if (data1 === "" || data2 === "") {
        alert("Podaj obie daty urodzenia!");
        return;
    }

    var osoba1 = new Date(data1);
    var osoba2 = new Date(data2);

    if (osoba1 < osoba2) {
        alert("Pierwsza osoba jest starsza.");
    } else if (osoba2 < osoba1) {
        alert("Druga osoba jest starsza.");
    } else {
        alert("Obie osoby są w tym samym wieku.");
    }
}


// 8. PRZESTEPNY
function PRZESTEPNY(rok) {
    if (rok === "" || isNaN(rok)) {
        console.log("Podaj prawidłowy rok!");
        return;
    }

    if (rok % 400 === 0 ||
        (rok % 4 === 0 && rok % 100 !== 0)) {
        console.log("Rok " + rok + " jest przestępny.");
    } else {
        console.log("Rok " + rok + " nie jest przestępny.");
    }
}


// 9. SIŁA
function SILA() {
    var haslo = document.getElementById("haslo").value;
    var wynik = "Hasło mocne";

    if (haslo.length <= 4) {
        wynik = "Hasło słabe";
    } else if (haslo.length < 8) {
        wynik = "Hasło średnie";
    }

    if (!/[0-9]/.test(haslo)) {
        wynik = "Hasło słabe - brak cyfry";
    }

    if (!/[A-Z]/.test(haslo)) {
        wynik = "Hasło słabe - brak dużej litery";
    }

    if (!/[a-z]/.test(haslo)) {
        wynik = "Hasło słabe - brak małej litery";
    }

    if (!/[^A-Za-z0-9]/.test(haslo)) {
        wynik = "Hasło słabe - brak znaku specjalnego";
    }

    if (haslo.length === 0) {
        wynik = "Wpisz hasło";
    }

    document.getElementById("silaWynik").innerHTML = wynik;
}


// 10. TROJKAT
function TROJKAT() {
    var a = Number(document.getElementById("bokA").value);
    var b = Number(document.getElementById("bokB").value);
    var c = Number(document.getElementById("bokC").value);

    if (document.getElementById("bokA").value === "" ||
        document.getElementById("bokB").value === "" ||
        document.getElementById("bokC").value === "") {
        console.log("Podaj trzy liczby!");
        return;
    }

    if (a > 0 && b > 0 && c > 0 &&
        a + b > c &&
        a + c > b &&
        b + c > a) {
        console.log("Można utworzyć trójkąt.");
    } else {
        console.log("Nie można utworzyć trójkąta.");
    }
}


// 11. SZYFR
function SZYFR(tekst) {
    var wynik = "";

    for (var i = 0; i < tekst.length; i++) {
        var znak = tekst[i];

        if (znak >= "a" && znak <= "z") {
            var kod = znak.charCodeAt(0);
            kod = ((kod - 97 + 2) % 26) + 97;
            wynik += String.fromCharCode(kod);
        } else if (znak >= "A" && znak <= "Z") {
            var kod = znak.charCodeAt(0);
            kod = ((kod - 65 + 2) % 26) + 65;
            wynik += String.fromCharCode(kod);
        } else {
            wynik += znak;
        }
    }

    return wynik;
}


// OBSŁUGA POLA HASŁA
document.getElementById("haslo").addEventListener("input", SILA);


// OBSŁUGA SZYFROWANIA
document.getElementById("tekst").addEventListener("input", function() {
    var tekst = document.getElementById("tekst").value;

    document.getElementById("szyfrWynik").innerHTML =
        SZYFR(tekst);
});
