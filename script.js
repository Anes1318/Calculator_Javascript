const body = document.querySelector("body");
const inputField = document.querySelector("#input");
const rezultatField = document.querySelector("#last_input");
const allClearButton = document.querySelector("[data-all-clear]");
const brojevibuttons = document.querySelectorAll("[data-number]");
const operacije = document.querySelectorAll("[data-operation]");
const jednakoDugme = document.querySelector("[data-jednako]");
const tackaDugme = document.querySelector("[data-tacka]");
const delDugme = document.querySelector("[data-del]");

let last_op, imaMinus = 1, rezultat = 0, broj, brojDecimala = 5;


function DEL() {
    inputField.innerText = inputField.innerText.toString().slice(0, -1);
}
function jednakoFunkcija() {
    if (inputField.innerText == '') {
        if (rezultatField.innerText == '') {
            return;
        }

        inputField.innerText = rezultat;
        rezultatField.innerText = '';
        console.log("JEDNAKO");
        return;
    }
    switch (last_op) {
        case '+':
            rezultat += broj;
            rezultatField.innerText = '';
            rezultat = rezultat.toFixed(brojDecimala)
            inputField.innerText = rezultat;
            console.log("JEDNAKO_SABRO");
            break;
        case '-':
            rezultat -= broj;
            rezultatField.innerText = '';
            rezultat = rezultat.toFixed(brojDecimala)

            inputField.innerText = rezultat;

            console.log("JEDNAKO_ODUZEO");
            break;
        case '*':
            rezultat *= broj;
            rezultatField.innerText = '';
            rezultat = rezultat.toFixed(brojDecimala)
            inputField.innerText = rezultat;
            console.log("JEDNAKO_POMNOZIO");
            break;
        case '÷':
            rezultat /= broj;
            rezultatField.innerText = '';
            rezultat = rezultat.toFixed(brojDecimala)
            inputField.innerText = rezultat;
            console.log("JEDNAKO_PODIJELIO");
            break;
        default:
            break;
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
        rezultatField.innerText = rezultat + '-';
        inputField.innerText = '';
    }


    else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '.') {

        if (last_op == '+') {
            rezultat += broj;

            console.log("MINUS SABRO");

        } else if (last_op == '*') {

            rezultat *= broj;

            console.log("MINUS POMNOZIO");

        } else if (last_op == '÷') {
            rezultat /= broj;

            console.log("MINUS PODIJELIO");

        } else {
            rezultat -= broj;

            console.log("MINUS ODUZEO");

        }
        rezultatField.innerText = rezultat + '-';
        inputField.innerText = '';
    }


    last_op = '-';
    dugme.blur();
}
function pritisnuoPlus(dugme) {
    if ((inputField.innerText == '' || inputField.innerText == '-') && rezultatField.innerText == '') {
        console.log('NEMORE');
        dugme.blur();

        return;
    } else if (rezultatField.innerText == '' && inputField.innerText != '' && inputField.innerText != '.' && inputField.innerText != '-') {
        console.log('prebacavamo broj u rezultat');
        rezultat = broj;

    } else if (inputField.innerText == '' && rezultatField.innerText != '') {
        console.log('mijenjamo operaciju');
        rezultatField.innerText = rezultat + '+';
    }


    else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') {

        if (last_op == '-') {
            rezultat -= broj;

            console.log("PLUS ODUZEO");

        } else if (last_op == '*') {

            rezultat *= broj;

            console.log("PLUS POMNOZIO");

        } else if (last_op == '÷') {
            rezultat /= broj;

            console.log("PLUS PODIJELIO");

        } else {
            rezultat += broj;

            console.log("PLUS SABRO");

        }

    }
    rezultatField.innerText = rezultat + '+';
    inputField.innerText = '';

    last_op = '+';
    dugme.blur();
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

                if (rezultatField.innerText == '' && inputField.innerText != '-' && inputField.innerText != '.') {
                    rezultat = broj;
                    rezultatField.innerText = rezultat + '*';
                    inputField.innerText = '';
                } else if (rezultatField.innerText != '' && inputField.innerText != '' && inputField.innerText != '-' && inputField.innerText != '.') {

                    if (last_op == '-') {
                        rezultat -= broj;

                        console.log("PUTA ODUZEO");

                    } else if (last_op == '+') {

                        rezultat += broj;

                        console.log("PUTA SABRO");

                    } else if (last_op == '÷') {
                        rezultat /= broj;

                        console.log("PUTA PODIJELIO");

                    } else {
                        rezultat *= broj;

                        console.log("PUTA POMNOZIO");

                    }
                }

                rezultatField.innerText = rezultat + '*';
                inputField.innerText = '';

                last_op = '*';
                console.log('puta');
                break;
            case '÷':
                last_op = '÷';
                console.log('podijeljeno');
                break;

            default:
                break;
        }


    })

});

tackaDugme.addEventListener('click', () => {

    if (inputField.innerText.includes('.') || inputField.innerText == '-') {
        return;
    }
    inputField.innerText += '.';



});




jednakoDugme.addEventListener('click', () => {
    // console.log(last_op);
    jednakoFunkcija();


})

function eskape() {

    console.log('ESKAPE');
    rezultat = 0;
    rezultatField.innerText = '';
    inputField.innerText = '';
}

allClearButton.addEventListener('click', () => {
    eskape();
});


body.addEventListener("keydown", (e) => {
    // console.log(e);
    // if (e.key == "+") {
    //     console.log(last_op);
    //     broj = parseFloat(inputField.value);

    //     if (inputField.value == "" || inputField.value == "-" || inputField.value == "*" || inputField.value == "/") {
    //         console.log("PRAZNO"); // ovo ode ti je da nemore da napises + kad je prazno sve
    //         e.preventDefault();
    //     } else if (rezultatField.innerText == "") {
    //         console.log("Sabiranje"); // ovo ode ti je da ti prvi broj prebaci u rezultat
    //         rezultat = broj;

    //     } else if (rezultatField.innerText != '' && inputField.value != '') { // ovo ode ti je kad "prenosimo operacije"

    //         if (last_op == '-' && !inputField.value.includes('-')) {
    //             rezultat -= broj;
    //             console.log("PLUS ODUZEO");
    //         } else if (last_op == '*') {
    //             rezultat *= broj;
    //             console.log("PLUS POMNOZIO");
    //         } else if (last_op == '÷') {
    //             rezultat /= broj;
    //             console.log("PLUS PODIJELIO");
    //         } else {
    //             rezultat += broj;
    //             console.log("PLUS SABRO");
    //         }
    //     }
    //     rezultatField.innerText = rezultat + '+';
    //     inputField.value = "";
    //     e.preventDefault();
    //     last_op = "+";
    // }
    // if (e.key == "-") {


    //     broj = parseFloat(inputField.value);


    //     if (imaMinus == '1' && inputField.value == '') {
    //         console.log("MORE NEGATIVNI");
    //         imaMinus = 2;
    //         console.log(imaMinus);

    //     } else if (imaMinus == '2' && inputField.value == '') {
    //         console.log('NEMORE JOS');
    //         e.preventDefault();
    //     }
    //     else if (rezultatField.innerText == '') {
    //         console.log("ODUZIMANJE");
    //         rezultat = broj;
    //         rezultatField.innerText = rezultat + '-';
    //         inputField.value = "";
    //         e.preventDefault();

    //     } else if (rezultatField.innerText != '' && inputField.value != '') {
    //         if (last_op == '+') {

    //             rezultat += broj;
    //             rezultatField.innerText = rezultat + '-';
    //             inputField.value = "";
    //             console.log("MINUS SABRO");
    //             e.preventDefault();
    //         } else if (last_op == '*') {

    //             rezultat *= broj;
    //             rezultatField.innerText = rezultat + '-';
    //             inputField.value = "";
    //             console.log("MINUS POMNOZIO");
    //             e.preventDefault();
    //         } else if (last_op == '÷') {
    //             rezultat /= broj;
    //             rezultatField.innerText = rezultat + '-';
    //             inputField.value = "";
    //             console.log("MINUS PODIJELIO");
    //             e.preventDefault();
    //         } else {
    //             rezultat -= broj;
    //             rezultatField.innerText = rezultat + '-';
    //             inputField.value = "";
    //             console.log("MINUS ODUZEO");
    //             e.preventDefault();
    //         }
    //     }


    //     last_op = "-";

    // }
    // if (e.key == '*') {
    //     broj = parseFloat(inputField.value);



    //     if (inputField.value == '') {
    //         console.log('NEMORE');
    //         e.preventDefault();
    //     } else if (rezultat.innerText == '' && inputField.value != '') {
    //         rezultat = broj;
    //     }

    //     else if (rezultatField.innerText == '') {
    //         rezultat = broj;

    //     } else if (rezultatField.innerText != '' && inputField.value != '') {
    //         if (last_op == '+') {
    //             console.log("PUTA SABRO");
    //             rezultat += broj;
    //         } else if (last_op == '-') {
    //             rezultat -= broj;
    //             console.log("PUTA ODUZEO");
    //         } else if (last_op == '÷') {
    //             rezultat /= broj;
    //             console.log("PUTA PODIJELIO");
    //         } else {
    //             rezultat *= broj;
    //             console.log("PUTA POMNOZIO");
    //         }

    //     }

    //     rezultatField.innerText = rezultat + '*';
    //     inputField.value = "";
    //     e.preventDefault();
    //     last_op = '*';


    // }
    // if (e.key == '/') {
    //     broj = parseFloat(inputField.value);

    //     if (inputField.value == '') {
    //         console.log('NEMORE');
    //         e.preventDefault();
    //     } else if (rezultat.innerText == '' && inputField.value != '') {
    //         rezultat = broj;
    //     } else if (rezultatField.innerText == '') {
    //         rezultat = broj;
    //     } else if (rezultatField.innerText != '' && inputField.value != '') {
    //         if (last_op == '+') {
    //             console.log("PODIJELJENO SABRO");
    //             rezultat += broj;
    //         } else if (last_op == '-') {
    //             rezultat -= broj;
    //             console.log("PODIJELJENO ODUZEO");
    //         } else if (last_op == '*') {
    //             rezultat *= broj;
    //             console.log("PODIJELJENO POMNOZIO");
    //         } else {
    //             rezultat /= broj;
    //             console.log("PODIJELJENO PODIJELIO");
    //         }
    //     }
    //     rezultatField.innerText = rezultat + '÷';
    //     inputField.value = "";
    //     e.preventDefault();
    //     last_op = '÷';
    // }
    // if (e.key == ".") {
    //     if (inputField.value.includes(".")) {
    //         console.log("NEMORE");
    //         e.preventDefault();
    //     }
    // }
    if (e.key == "Enter") {
        jednakoFunkcija();
    }
    if (e.key == 'Escape') {
        eskape();
    }
});






