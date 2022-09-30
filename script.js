const body = document.querySelector("html");
const inputField = document.querySelector("#input");
const rezultatField = document.querySelector("#last_input");
const allClearButton = document.querySelector("[data-all-clear]");
const brojevibuttons = document.querySelectorAll("[data-number]");
const operacije = document.querySelectorAll("[data-operation]");
const jednakoDugme = document.querySelector("[data-jednako]");
const tackaDugme = document.querySelector("[data-tacka]");
const delDugme = document.querySelector("[data-del]");
const brojDecimalaField = document.querySelector(".broj-decimala");
const eror = document.querySelector(".eror");
const erorContainer = document.querySelector(".eror-container");
const h1 = document.querySelector("h1");
var s2 = document.getElementsByClassName('span-two');


let last_op, imaMinus = 1, rezultat = 0, broj, brojDecimala = 2;

brojDecimalaField.innerText = brojDecimala;

function povecaj() {
    brojDecimala++;
    brojDecimalaField.innerText = brojDecimala;
}
function smanji() {
    if (brojDecimala == 0) {
        erorDec();
        return;
    }
    brojDecimala--;
    brojDecimalaField.innerText = brojDecimala;
}
function erorNula() {
    inputField.innerText = '';
    h1.innerText = 'Ne mozete dijeliti sa nulom!';
    eror.style.visibility = 'visible';
    erorContainer.style.visibility = 'visible';
}
function erorDec() {
    h1.innerText = 'Broj decimala ne moze biti manji od nule!';
    eror.style.visibility = 'visible';
    erorContainer.style.visibility = 'visible';
}
function ok() {

    eror.style.visibility = 'hidden';
    erorContainer.style.visibility = 'hidden';
}
function eskape() {
    console.log('ESKAPE');
    rezultat = 0;
    broj = 0;
    rezultatField.innerText = '';
    inputField.innerText = '';
    allClearButton.blur();

}
function DEL() {
    inputField.innerText = inputField.innerText.toString().slice(0, -1);
    console.log("IZBRISAT ZADNJI");
}
function jednakoFunkcija() {
    if (inputField.innerText == '1318') {
        $(s2).each(function () {
            $(this).addClass('dark');
        })
        $('.container-grid button').each(function () {
            $(this).addClass('darkviper');
        })
        $(body).addClass('au');
    }
    if (inputField.innerText == '8131') {
        $(s2).each(function () {
            $(this).removeClass('dark');
        })
        $('.container-grid button').each(function () {
            $(this).removeClass('darkviper');
        })
        $(body).removeClass('au');
    }
    if (inputField.innerText == '-' || inputField.innerText == '.') {
        return;
    }
    if (inputField.innerText == '') {
        if (rezultatField.innerText == '') {
            return;
        }
        inputField.innerText = rezultat;
        rezultatField.innerText = '';
        console.log("JEDNAKO");
        return;
    }
    console.log("ZADNJA OPERACIJA", last_op);
    if (inputField.innerText != '' && rezultatField.innerText == '') { // kada pritiskamo jednako vise puta zaredom
        console.log('hashirama');
        rezultat = parseFloat(rezultat);
        switch (last_op) {
            case '+':
                rezultat += zadnji_broj;
                console.log("JEDNAKO SABRO JOPE");
                break;
            case '-':
                rezultat -= zadnji_broj;
                console.log("JEDNAKO ODUZEO JOPE");
                break;
            case '*':
                rezultat *= zadnji_broj;
                console.log("JEDNAKO POMNOZIO JOPE");
                break;
            case '÷':
                rezultat /= zadnji_broj;
                console.log("JEDNAKO PODIJELIO JOPE");
                break;
            default:
                rezultat = broj;
                break;
        }
        rezultat = parseFloat(rezultat).toFixed(brojDecimala);
        rezultatField.innerText = '';
        inputField.innerText = rezultat;
    } else if (inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') { // jednako samo jednom
        rezultat = parseFloat(rezultat);
        switch (last_op) {
            case '+':
                rezultat += broj;
                zadnji_broj = broj;
                broj = rezultat;
                console.log("JEDNAKO SABRO");
                break;
            case '-':
                rezultat -= broj;
                zadnji_broj = broj;
                broj = rezultat;
                console.log("JEDNAKO ODUZEO");
                break;
            case '*':
                rezultat *= broj;
                zadnji_broj = broj;
                broj = rezultat;
                console.log("JEDNAKO POMNOZIO");
                break;
            case '÷':
                if (broj == '0') {
                    erorNula();
                    return;
                }
                rezultat /= broj;
                zadnji_broj = broj;
                broj = rezultat;
                console.log("JEDNAKO PODIJELIO");
                break;
            default:
                break;
        }
        rezultat = parseFloat(rezultat).toFixed(brojDecimala);
        rezultatField.innerText = '';
        inputField.innerText = rezultat;
    }

}
function pritisnuoBroj(dugme) {
    if (inputField.innerText == '0') {
        inputField.innerText = dugme.innerText;
    } else {
        inputField.innerText += dugme.innerText;
    }

    broj = inputField.innerText;
    broj = parseFloat(broj);


    if (inputField.innerText.includes('-')) {
        console.log("PITA");
    }
    console.log(broj);
    dugme.blur();
}
function pritisnuoMinus(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    if (inputField.innerText == '') {
        console.log('MORE NEGATIVNI');
        inputField.innerText += '-';
        dugme.blur();
        return;
    } else if (inputField.innerText == '-') {
        console.log('NEMORE MINUS');
        dugme.blur();
        return;
    }

    else if (rezultatField.innerText == '' && inputField.innerText != '' && inputField.innerText != '.' && inputField.innerText != '-') {
        console.log('prebacavamo broj u rezultat');
        rezultat = broj;
        // rezultatField.innerText = rezultat + '-';
        // inputField.innerText = '';
    }


    else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '.') {

        if (last_op == '+') {
            rezultat += broj;

            console.log("MINUS SABRO");

        } else if (last_op == '*') {

            rezultat *= broj;

            console.log("MINUS POMNOZIO");

        } else if (last_op == '÷') {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            console.log("MINUS PODIJELIO");

        } else {
            rezultat -= broj;

            console.log("MINUS ODUZEO");

        }



    }
    console.log(rezultat, "prije");
    rezultat = parseFloat(rezultat);
    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '-';
    inputField.innerText = '';

    last_op = '-';
    // dugme.blur();
}
function pritisnuoPlus(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    rezultat = parseFloat(rezultat);
    if ((inputField.innerText == '' || inputField.innerText == '.' || inputField.innerText == '-') && rezultatField.innerText == '') {
        console.log('NEMORE PLUS');
        dugme.blur();
        return;
    } else if (rezultatField.innerText == '' && inputField.innerText != '' && inputField.innerText != '.' && inputField.innerText != '-') {
        console.log('prebacavamo broj u rezultat');
        rezultat = broj;
    }
    else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') {

        if (last_op == '-') {
            rezultat -= broj;
            console.log("PLUS ODUZEO");
        } else if (last_op == '*') {
            rezultat *= broj;
            console.log("PLUS POMNOZIO");
        } else if (last_op == '÷') {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            console.log("PLUS PODIJELIO");
        } else {
            rezultat += broj;
            console.log("PLUS SABRO");

        }

    }
    console.log(rezultat, "prije");
    rezultat = parseFloat(rezultat);
    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '+';
    inputField.innerText = '';

    last_op = '+';
    dugme.blur();
}
function pritisnuoPuta(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    if ((inputField.innerText == '' || inputField.innerText == '.' || inputField.innerText == '-') && rezultatField.innerText == '') {
        console.log("NEMORE PUTA");
        return;
        dugme.blur();
    }
    else if (rezultatField.innerText == '' && inputField.innerText != '-' && inputField.innerText != '.') {
        rezultat = broj;

    } else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') {
        if (last_op == '-') {
            rezultat -= broj;
            console.log("PUTA ODUZEO");
        } else if (last_op == '+') {
            rezultat += broj;
            console.log("PUTA SABRO");
        } else if (last_op == '÷') {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            console.log("PUTA PODIJELIO");

        } else {
            rezultat *= broj;
            console.log("PUTA POMNOZIO");
        }
    }
    console.log(rezultat, "prije");
    rezultat = parseFloat(rezultat);
    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '*';
    inputField.innerText = '';
    last_op = '*';
    console.log('puta');
}
function pritisnuoPodijeljeno(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    if ((inputField.innerText == '' || inputField.innerText == '.' || inputField.innerText == '-') && rezultatField.innerText == '') {
        console.log("NEMORE PODIJELJENO");
        dugme.blur();
        return;
    }
    else if (rezultatField.innerText == '' && inputField.innerText != '-' && inputField.innerText != '.') {
        rezultat = broj;
    } else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') {
        if (last_op == '-') {
            rezultat -= broj;
            console.log("PODIJELJENO ODUZEO");
        } else if (last_op == '+') {
            rezultat += broj;
            console.log("PODIJELJENO SABRO");
        } else if (last_op == '*') {
            rezultat *= broj;
            console.log("PODIJELJENO POMNOZIO");
        } else {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            console.log("PODIJELJENO PODIJELIO");
        }
    }
    console.log(rezultat, "prije");
    rezultat = parseFloat(rezultat);
    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '÷';
    inputField.innerText = '';
    last_op = '÷';
    console.log('podijeljeno');
}
function pritisnuoTacku() {
    if (inputField.innerText.includes('.') || inputField.innerText == '-') {
        return;
    }
    inputField.innerText += '.';
}
function checkKeyboard(e) {
    if (e.key >= 0 && e.key <= 9) {
        document.getElementById(e.key).click(); // ty pekre
    }
    if (e.key == 'Backspace') {
        DEL();
    }
    if (e.key == '.') {
        pritisnuoTacku();
    }
    if (e.key == '+') {
        document.querySelector("#plus").click();
    }
    if (e.key == '-') {
        document.querySelector("#minus").click();
    }
    if (e.key == '*') {
        document.querySelector("#puta").click();
    }
    if (e.key == '/') {
        document.querySelector("#podijeljeno").click();
    }
    if (e.key == "Enter") {
        jednakoFunkcija();
    }
    if (e.key == 'Escape') {
        eskape();
    }
}
brojevibuttons.forEach(dugme => {
    dugme.addEventListener('click', () => {
        pritisnuoBroj(dugme);
    })
});
delDugme.addEventListener('click', () => {
    DEL();
});
operacije.forEach(dugme => {
    dugme.addEventListener('click', () => {

        switch (dugme.innerText) {
            case '-':
                pritisnuoMinus(dugme);
                break;
            case '+':
                pritisnuoPlus(dugme);
                break;
            case '*':
                pritisnuoPuta(dugme);
                break;
            case '÷':
                pritisnuoPodijeljeno(dugme);
                break;
            default:
                break;
        }


    })

});
tackaDugme.addEventListener('click', () => {
    pritisnuoTacku();
});
jednakoDugme.addEventListener('click', () => {
    jednakoFunkcija();
});
allClearButton.addEventListener('click', () => {
    eskape();
});
body.addEventListener("keydown", (e) => {
    checkKeyboard(e);
});