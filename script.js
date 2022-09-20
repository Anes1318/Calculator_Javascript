
const inputField = document.querySelector("#input");
const rezultatField = document.querySelector("#last_input");
let ister = document.querySelector(".ister");
let zaokruzi = 2,
    last_op,
    rezultat = 0,
    broj;

function eskape() {
    document.querySelector("html").style.background = 'linear-gradient(to right bottom, blue 30%, rgb(87, 87, 97), red)';
    console.log('ESKAPE');
    rezultat = 0;
    rezultatField.innerText = '';
    inputField.value = '';
}

inputField.addEventListener("keydown", (e) => {
    console.log(e);


    if (e.key == "+") {

        broj = parseFloat(inputField.value);

        if (inputField.value == "" || inputField.value == "-" || inputField.value == "*" || inputField.value == "/") {
            console.log("PRAZNO"); // ovo ode ti je da nemore da napises + kad je prazno sve
            e.preventDefault();
        } else if (rezultatField.innerText == "") {
            console.log("Sabiranje"); // ovo ode ti je da ti prvi broj prebaci u rezultat
            rezultat = broj;

        } else if (rezultatField.innerText != '' && inputField.value != '') { // ovo ode ti je kad "prenosimo operacije"

            if (last_op == '-' && !inputField.value.includes('-')) {
                rezultat -= broj;
                console.log("PLUS ODUZEO");
            } else if (last_op == '*') {
                rezultat *= broj;
                console.log("PLUS POMNOZIO");
            } else if (last_op == '/') {
                rezultat /= broj;
                console.log("PLUS PODIJELIO");
            } else {
                rezultat += broj;
                console.log("PLUS SABRO");
            }
        }
        rezultatField.innerText = rezultat + '+';
        inputField.value = "";
        e.preventDefault();
        last_op = "+";
    }
    if (e.key == "-") {
        broj = parseFloat(inputField.value);


        if (inputField.value == '-') {
            console.log("NEMORE JOS");
            e.preventDefault();
        } else if (inputField.value == '') {
            console.log('MORE NEGATIVNI');
        }
        else if (rezultatField.innerText == '') {
            console.log("ODUZIMANJE");

            rezultat = broj;
        } else if (rezultatField.innerText != '' && inputField.value != '') {
            if (last_op == '+') {
                console.log("MINUS SABRO");
                rezultat += broj;
            } else if (last_op == '*') {
                rezultat *= broj;
                console.log("MINUS POMNOZIO");
            } else if (last_op == '/') {
                rezultat /= broj;
                console.log("MINUS PODIJELIO");
            } else {
                rezultat -= broj;
                console.log("MINUS ODUZEO");
            }
        }

        rezultatField.innerText = rezultat + '-';
        inputField.value = "";
        e.preventDefault();
        last_op = "-";

    }
    if (e.key == '*') {
        broj = parseFloat(inputField.value);



        if (inputField.value == '') {
            console.log('NEMORE');
            e.preventDefault();
        } else if (rezultat.innerText == '' && inputField.value != '') {
            rezultat = broj;
        }

        else if (rezultatField.innerText == '') {
            rezultat = broj;

        } else if (rezultatField.innerText != '' && inputField.value != '') {
            if (last_op == '+') {
                console.log("PUTA SABRO");
                rezultat += broj;
            } else if (last_op == '-') {
                rezultat -= broj;
                console.log("PUTA ODUZEO");
            } else if (last_op == '÷') {
                rezultat /= broj;
                console.log("PUTA PODIJELIO");
            } else {
                rezultat *= broj;
                console.log("PUTA POMNOZIO");
            }

        }

        rezultatField.innerText = rezultat + '*';
        inputField.value = "";
        e.preventDefault();
        last_op = '*';


    }
    if (e.key == '/') {
        broj = parseFloat(inputField.value);

        if (inputField.value == '') {
            console.log('NEMORE');
            e.preventDefault();
        } else if (rezultat.innerText == '' && inputField.value != '') {
            rezultat = broj;
        } else if (rezultatField.innerText == '') {
            rezultat = broj;
        } else if (rezultatField.innerText != '' && inputField.value != '') {
            if (last_op == '+') {
                console.log("PODIJELJENO SABRO");
                rezultat += broj;
            } else if (last_op == '-') {
                rezultat -= broj;
                console.log("PODIJELJENO ODUZEO");
            } else if (last_op == '*') {
                rezultat *= broj;
                console.log("PODIJELJENO POMNOZIO");
            } else {
                rezultat /= broj;
                console.log("PODIJELJENO PODIJELIO");
            }
        }
        rezultatField.innerText = rezultat + '÷';
        inputField.value = "";
        e.preventDefault();
        last_op = '÷';
    }
    if (e.key == ".") {
        if (inputField.value.includes(".")) {
            console.log("NEMORE");
            e.preventDefault();
        }
    }
    if (e.key == "Enter") {
        if (inputField.value == '1318') {
            document.querySelector("html").style.background = 'green';
        }
        if (rezultatField.innerText != '' && inputField.value == '') {
            switch (last_op) {
                case '+':
                    inputField.value = rezultatField.innerText.split("+").join("");
                    break;
                case '-':
                    inputField.value = rezultatField.innerText.split("-").join("");
                    break;
                case '*':
                    inputField.value = rezultatField.innerText.split("*").join("");
                    break;
                case '÷':
                    inputField.value = rezultatField.innerText.split("÷").join("");
                    break;

                default:
                    break;
            }
            rezultatField.innerText = "";
            e.preventDefault();
        } else if (rezultatField.innerText != '' && inputField.value != '') {
            switch (last_op) {
                case '+':
                    broj = parseFloat(inputField.value);
                    rezultat += broj;
                    rezultatField.innerText = '';
                    inputField.value = rezultat;
                    e.preventDefault();
                    break;
                case '-':
                    broj = parseFloat(inputField.value);
                    rezultat -= broj;
                    rezultatField.innerText = '';
                    inputField.value = rezultat;
                    e.preventDefault();
                    break;
                case '*':
                    broj = parseFloat(inputField.value);
                    rezultat *= broj;
                    rezultatField.innerText = '';
                    inputField.value = rezultat;
                    e.preventDefault();
                    break;
                case '÷':

                    broj = parseFloat(inputField.value);
                    rezultat /= broj;
                    // rezultat = Math.round(rezultat * 100) / 100; // more sovim da se cini nesto samo polako
                    rezultatField.innerText = '';
                    inputField.value = rezultat;
                    e.preventDefault();
                    break;
                default:
                    break;
            }
        }
    }
    if (e.key == 'Escape') {
        eskape();
    }
});




const allClearButton = document.querySelector("[data-all-clear]");

allClearButton.addEventListener('click', () => {
    eskape();
});