const body = document.querySelector("html");
const inputField = document.querySelector("#input");
const BinputField = document.querySelector("#Binput");
const rezultatField = document.querySelector("#last_input");
const BrezultatField = document.querySelector("#Blast_input");
const binarniUi = document.querySelector(".binarniUi");
const decimalniUi = document.querySelector(".decimalniUi");


const allClearButton = document.querySelector("[data-all-clear]");
const brojevibuttons = document.querySelectorAll("[data-number]");
const brojeviButtonsB = document.querySelectorAll("[Bdata-number]");
const operacije = document.querySelectorAll("[data-operation]");
const Boperacije = document.querySelectorAll("[Bdata-operation]");
const jednakoDugme = document.querySelector("[data-jednako]");
const tackaDugme = document.querySelector("[data-tacka]");
const delDugme = document.querySelector("[data-del]");
const BdelDugme = document.querySelector("[Bdata-del]");
const korijenDugme = document.querySelector("[data-korijen]");
const brojDecimalaField = document.querySelector(".broj-decimala");
const powerDugme = document.querySelector("[data-power]");
const themeDugme = document.querySelector("[data-theme]");
const binarniDugme = document.querySelector(".binarni");

const eror = document.querySelector(".eror");
const erorContainer = document.querySelector(".eror-container");
const h1 = document.querySelector("h1");
const s2 = document.getElementsByClassName('span-two');


let last_op, imaMinus = 1, rezultat = 0, broj, brojDecimala = 2, tema = 1, isBinarni = 0;

brojDecimalaField.innerText = brojDecimala;

function changeTheme() {
    if (tema == 1) {
        $(body).addClass('background2');
        $('.Dtitle').addClass('decimale_title2');
        tema = 2;
    }
    else {
        $(body).removeClass('background2');
        $('.Dtitle').removeClass('decimale_title2');
        tema = 1;
    }
}

function power() {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    rezultat = parseFloat(rezultat);
    if (inputField.innerText == '' || inputField.innerText == '.' || inputField.innerText == '-') {
        // console.log('NEMORE POWER');

        powerDugme.blur();
        return;
    }
    else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '.') {

        if (last_op == '+') {

            broj = Math.pow(broj, 2);
            rezultat += broj;

            // console.log("POWER SABRO");

        } else if (last_op == '*') {
            broj = Math.pow(broj, 2);
            rezultat *= broj;

            // console.log("POWER POMNOZIO");


        } else if (last_op == '÷') {
            if (broj == '0') {
                erorNula();
                return;
            }
            broj = Math.pow(broj, 2);
            rezultat /= broj;
            // console.log("POWER PODIJELIO");

        } else if (last_op == '-') {
            broj = Math.pow(broj, 2);
            rezultat -= broj;

            // console.log("POWER ODUZEO");

        }
        // console.log("OVO MORA DA SE UCINI");
        // console.log(rezultat);

        rezultatField.innerText = "";
        broj = rezultat;


    } else {
        rezultat = Math.pow(broj, 2);
    }



    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    inputField.innerText = rezultat;

}
function korijen() {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    rezultat = parseFloat(rezultat);
    if ((inputField.innerText == '' || inputField.innerText == '.' || inputField.innerText == '-') && rezultatField.innerText == '') {
        // console.log('NEMORE KORIJEN');
        korijenDugme.blur();
        return;
    }
    else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '.') {

        if (last_op == '+') {
            broj = Math.sqrt(broj);
            rezultat += broj;

            // console.log("KORIJEN SABRO");

        } else if (last_op == '*') {
            broj = Math.sqrt(broj);
            rezultat *= broj;

            // console.log("KORIJEN POMNOZIO");


        } else if (last_op == '÷') {
            if (broj == '0') {
                erorNula();
                return;
            }
            broj = Math.sqrt(broj);
            rezultat /= broj;
            // console.log("KORIJEN PODIJELIO");

        } else if (last_op == '-') {
            broj = Math.sqrt(broj);
            rezultat -= broj;

            // console.log("KORIJEN ODUZEO");

        }
        // console.log("OVO MORA DA SE UCINI");
        rezultatField.innerText = "";
        broj = rezultat;


    } else {
        rezultat = Math.sqrt(broj);

    }
    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    inputField.innerText = rezultat + "√";


}
function povecaj() {
    if (brojDecimala == 100) {
        erorDec();
        return;
    }
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
    eror.showModal();
}
function erorDec() {
    if (brojDecimala > 1) {
        h1.innerText = 'Broj decimala ne moze biti veci od sto!';
    } else {
        h1.innerText = 'Broj decimala ne moze biti manji od nule!';
    }
    eror.showModal();
}
function ok() {
    eror.close();
}
function eskape() {
    // console.log('ESKAPE');
    rezultat = 0;
    broj = 0;
    zadnji_broj = 0;
    last_op = undefined;
    rezultatField.innerText = '';
    inputField.innerText = '';
    allClearButton.blur();

}
function DEL() {
    rezultat = 0;
    broj = 0;
    zadnji_broj = 0;
    last_op = undefined;
    rezultatField.innerText = '';
    inputField.innerText = '';
    allClearButton.blur();
}
function BDEL() {
    rezultat = 0;
    broj = 0;
    zadnji_broj = 0;
    last_op = undefined;
    BrezultatField.innerText = '';
    BinputField.innerText = '';
}

function jednakoFunkcija(dugme) {
    if (inputField.innerText == '1318') {

        $('.container-grid button').each(function () {
            $(this).addClass('button_darkviperau');
        })
        $(body).addClass('background_darkviperau');
    }
    if (inputField.innerText == '8131') {

        $('.container-grid button').each(function () {
            $(this).removeClass('button_darkviperau');
        })
        $(body).removeClass('background_darkviperau');
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
        // console.log("JEDNAKO");
        return;
    }
    // console.log("ZADNJA OPERACIJA", last_op);
    if (inputField.innerText != '' && rezultatField.innerText == '') { // kada pritiskamo jednako vise puta zaredom
        // console.log('hashirama');
        rezultat = parseFloat(rezultat);
        switch (last_op) {
            case '+':
                rezultat += zadnji_broj;
                // console.log("JEDNAKO SABRO JOPE");
                break;
            case '-':
                rezultat -= zadnji_broj;
                // console.log("JEDNAKO ODUZEO JOPE");
                break;
            case '*':
                rezultat *= zadnji_broj;
                // console.log("JEDNAKO POMNOZIO JOPE");
                break;
            case '÷':
                rezultat /= zadnji_broj;
                // console.log("JEDNAKO PODIJELIO JOPE");
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
                // console.log("JEDNAKO SABRO");
                break;
            case '-':
                rezultat -= broj;
                zadnji_broj = broj;
                broj = rezultat;
                // console.log("JEDNAKO ODUZEO");
                break;
            case '*':
                rezultat *= broj;
                zadnji_broj = broj;
                broj = rezultat;
                // console.log("JEDNAKO POMNOZIO");
                break;
            case '÷':
                if (broj == '0') {
                    erorNula();
                    return;
                }
                rezultat /= broj;
                zadnji_broj = broj;
                broj = rezultat;
                // console.log("JEDNAKO PODIJELIO");
                break;
            default:
                break;
        }
        rezultat = parseFloat(rezultat).toFixed(brojDecimala);
        rezultatField.innerText = '';
        inputField.innerText = rezultat;
    }

}
function BjednakoFunkcija(dugme) {
    let result = BinputField.innerText;
    operator = result.replace(/[0-9]/g, '');
    result = result.split(new RegExp(/[+\-*/]/));

    let num1 = result[0];
    let num2 = result[1];

    num1 = binaryToDecimal(num1);
    num2 = binaryToDecimal(num2);

    switch (operator) {
        case '+':
            value = num1 + num2;
            break;
        case '*':
            value = num1 * num2;
            break;
        case '÷':
            value = num1 / num2;
            break;
        case '-':
            value = num1 - num2;
            break;
        default:
            value = ''
            break;
    }
    BinputField.innerText = decimalToBinary(value);

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
        // console.log("PITA");
    }
    // console.log(broj);
    dugme.blur();
}
function BpritisnuoBroj(dugme) {
    if (dugme == '+' || dugme == '-' || dugme == '*' || dugme == '÷') {
        if ((BinputField.innerText.toString().substr(BinputField.innerText.length - 1) == '+' || BinputField.innerText.toString().substr(BinputField.innerText.length - 1) == '-' || BinputField.innerText.toString().substr(BinputField.innerText.length - 1) == '*' || BinputField.innerText.toString().substr(BinputField.innerText.length - 1) == '÷') || BinputField.innerText.length == undefined) return;
    }
    BinputField.innerText += dugme;
    console.log();
}


function pritisnuoPlus(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    rezultat = parseFloat(rezultat);
    if ((inputField.innerText == '' || inputField.innerText == '.' || inputField.innerText == '-') && rezultatField.innerText == '') {
        // console.log('NEMORE PLUS');
        dugme.blur();
        return;
    } else if (rezultatField.innerText == '' && inputField.innerText != '' && inputField.innerText != '.' && inputField.innerText != '-') {
        // console.log('prebacavamo broj u rezultat');
        rezultat = broj;
    }
    else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') {

        if (last_op == '-') {
            rezultat -= broj;
            // console.log("PLUS ODUZEO");
        } else if (last_op == '*') {
            rezultat *= broj;
            // console.log("PLUS POMNOZIO");
        } else if (last_op == '÷') {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            // console.log("PLUS PODIJELIO");
        } else {
            rezultat += broj;
            // console.log("PLUS SABRO");

        }

    }
    // console.log(rezultat, "prije");
    rezultat = parseFloat(rezultat);
    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    // console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '+';
    inputField.innerText = '';

    last_op = '+';
    dugme.blur();
}
function pritisnuoMinus(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    rezultat = parseFloat(rezultat);
    if (inputField.innerText == '') {
        // console.log('MORE NEGATIVNI');
        inputField.innerText += '-';
        dugme.blur();
        return;
    } else if (inputField.innerText == '-') {
        // console.log('NEMORE MINUS');
        dugme.blur();
        return;
    }

    else if (rezultatField.innerText == '' && inputField.innerText != '' && inputField.innerText != '.' && inputField.innerText != '-') {
        // console.log('prebacavamo broj u rezultat');
        rezultat = broj;

    }


    else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '.') {

        if (last_op == '+') {
            rezultat += broj;

            // console.log("MINUS SABRO");

        } else if (last_op == '*') {

            rezultat *= broj;

            // console.log("MINUS POMNOZIO");

        } else if (last_op == '÷') {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            // console.log("MINUS PODIJELIO");

        } else {
            rezultat -= broj;

            // console.log("MINUS ODUZEO");

        }

    }
    // console.log(rezultat, "prije");

    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    // console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '-';
    inputField.innerText = '';

    last_op = '-';
    dugme.blur();
}
function pritisnuoPuta(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    rezultat = parseFloat(rezultat);
    if ((inputField.innerText == '' || inputField.innerText == '.' || inputField.innerText == '-') && rezultatField.innerText == '') {
        // console.log("NEMORE PUTA");
        dugme.blur();
        return;

    }
    else if (rezultatField.innerText == '' && inputField.innerText != '-' && inputField.innerText != '.') {
        rezultat = broj;

    } else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') {
        if (last_op == '-') {
            rezultat -= broj;
            // console.log("PUTA ODUZEO");
        } else if (last_op == '+') {
            rezultat += broj;
            // console.log("PUTA SABRO");
        } else if (last_op == '÷') {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            // console.log("PUTA PODIJELIO");

        } else {
            rezultat *= broj;
            // console.log("PUTA POMNOZIO");
        }
    }
    // console.log(rezultat, "prije");

    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    // console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '*';
    inputField.innerText = '';
    last_op = '*';
    // console.log('puta');
    // dugme.blur(); // ako ima dugme.blur onda ce da bude npr 5 * jednako = 0, a ovako samo nece nista da radi mislim da je ovako bolje
}
function pritisnuoPodijeljeno(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    rezultat = parseFloat(rezultat);
    if ((inputField.innerText == '' || inputField.innerText == '.' || inputField.innerText == '-') && rezultatField.innerText == '') {
        // console.log("NEMORE PODIJELJENO");
        dugme.blur();
        return;
    }
    else if (rezultatField.innerText == '' && inputField.innerText != '-' && inputField.innerText != '.') {
        rezultat = broj;
    } else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') {
        if (last_op == '-') {
            rezultat -= broj;
            // console.log("PODIJELJENO ODUZEO");
        } else if (last_op == '+') {
            rezultat += broj;
            // console.log("PODIJELJENO SABRO");
        } else if (last_op == '*') {
            rezultat *= broj;
            // console.log("PODIJELJENO POMNOZIO");
        } else {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            // console.log("PODIJELJENO PODIJELIO");
        }
    }
    // console.log(rezultat, "prije");

    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    // console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '÷';
    inputField.innerText = '';
    last_op = '÷';
    // console.log('podijeljeno');
}


function BpritisnuoPlus(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    rezultat = parseFloat(rezultat);
    if ((inputField.innerText == '' || inputField.innerText == '.' || inputField.innerText == '-') && rezultatField.innerText == '') {
        // console.log('NEMORE PLUS');
        dugme.blur();
        return;
    } else if (rezultatField.innerText == '' && inputField.innerText != '' && inputField.innerText != '.' && inputField.innerText != '-') {
        // console.log('prebacavamo broj u rezultat');
        rezultat = broj;
    }
    else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') {

        if (last_op == '-') {
            rezultat -= broj;
            // console.log("PLUS ODUZEO");
        } else if (last_op == '*') {
            rezultat *= broj;
            // console.log("PLUS POMNOZIO");
        } else if (last_op == '÷') {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            // console.log("PLUS PODIJELIO");
        } else {
            rezultat += broj;
            // console.log("PLUS SABRO");

        }

    }
    // console.log(rezultat, "prije");
    rezultat = parseFloat(rezultat);
    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    // console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '+';
    inputField.innerText = '';

    last_op = '+';
    dugme.blur();
}
function BpritisnuoMinus(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    rezultat = parseFloat(rezultat);
    if (inputField.innerText == '') {
        // console.log('MORE NEGATIVNI');
        inputField.innerText += '-';
        dugme.blur();
        return;
    } else if (inputField.innerText == '-') {
        // console.log('NEMORE MINUS');
        dugme.blur();
        return;
    }

    else if (rezultatField.innerText == '' && inputField.innerText != '' && inputField.innerText != '.' && inputField.innerText != '-') {
        // console.log('prebacavamo broj u rezultat');
        rezultat = broj;

    }


    else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '.') {

        if (last_op == '+') {
            rezultat += broj;

            // console.log("MINUS SABRO");

        } else if (last_op == '*') {

            rezultat *= broj;

            // console.log("MINUS POMNOZIO");

        } else if (last_op == '÷') {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            // console.log("MINUS PODIJELIO");

        } else {
            rezultat -= broj;

            // console.log("MINUS ODUZEO");

        }

    }
    // console.log(rezultat, "prije");

    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    // console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '-';
    inputField.innerText = '';

    last_op = '-';
    dugme.blur();
}
function BpritisnuoPuta(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    rezultat = parseFloat(rezultat);
    if ((inputField.innerText == '' || inputField.innerText == '.' || inputField.innerText == '-') && rezultatField.innerText == '') {
        // console.log("NEMORE PUTA");
        dugme.blur();
        return;

    }
    else if (rezultatField.innerText == '' && inputField.innerText != '-' && inputField.innerText != '.') {
        rezultat = broj;

    } else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') {
        if (last_op == '-') {
            rezultat -= broj;
            // console.log("PUTA ODUZEO");
        } else if (last_op == '+') {
            rezultat += broj;
            // console.log("PUTA SABRO");
        } else if (last_op == '÷') {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            // console.log("PUTA PODIJELIO");

        } else {
            rezultat *= broj;
            // console.log("PUTA POMNOZIO");
        }
    }
    // console.log(rezultat, "prije");

    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    // console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '*';
    inputField.innerText = '';
    last_op = '*';
    // console.log('puta');
    // dugme.blur(); // ako ima dugme.blur onda ce da bude npr 5 * jednako = 0, a ovako samo nece nista da radi mislim da je ovako bolje
}
function BpritisnuoPodijeljeno(dugme) {
    broj = inputField.innerText;
    broj = parseFloat(broj);
    rezultat = parseFloat(rezultat);
    if ((inputField.innerText == '' || inputField.innerText == '.' || inputField.innerText == '-') && rezultatField.innerText == '') {
        // console.log("NEMORE PODIJELJENO");
        dugme.blur();
        return;
    }
    else if (rezultatField.innerText == '' && inputField.innerText != '-' && inputField.innerText != '.') {
        rezultat = broj;
    } else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') {
        if (last_op == '-') {
            rezultat -= broj;
            // console.log("PODIJELJENO ODUZEO");
        } else if (last_op == '+') {
            rezultat += broj;
            // console.log("PODIJELJENO SABRO");
        } else if (last_op == '*') {
            rezultat *= broj;
            // console.log("PODIJELJENO POMNOZIO");
        } else {
            if (broj == '0') {
                erorNula();
                return;
            }
            rezultat /= broj;
            // console.log("PODIJELJENO PODIJELIO");
        }
    }
    // console.log(rezultat, "prije");

    rezultat = parseFloat(rezultat).toFixed(brojDecimala);
    // console.log(rezultat, "posle");
    rezultatField.innerText = rezultat + '÷';
    inputField.innerText = '';
    last_op = '÷';
    // console.log('podijeljeno');
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
    if (e.key == 'ArrowRight') {
        povecaj();
    }
    if (e.key == 'ArrowLeft') {
        smanji();
    }

}

function decimalToBinary(broj) {
    let binary = [];
    while (broj > 0) {
        binary.push(broj % 2);
        broj = Math.floor(broj / 2);
    }
    return binary.reverse().join('');
}

function binaryToDecimal(binary) {
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        decimal += binary[i] * Math.pow(2, binary.length - i - 1);
    }
    return decimal;
}
function promijeniBinarni() {
    if (isBinarni == 0) {

        binarniDugme.innerText = "Binarni";
        decimalniUi.style.display = "none";
        binarniUi.style.display = "block";
        isBinarni = 1;
    }
    else {
        binarniDugme.innerText = "Decimalni";
        decimalniUi.style.display = "block";
        binarniUi.style.display = "none";
        isBinarni = 0;
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
BdelDugme.addEventListener('click', () => {
    BDEL();
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
    // console.log(e.key);
    checkKeyboard(e);
});