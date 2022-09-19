const inputField = document.querySelector("#input");
const rezultatField = document.querySelector("#last_input");
let rez_op,
    last_op,
    rezultat = 0,
    broj;
inputField.addEventListener("keydown", (e) => {
    // console.log(e);

    if (e.key == "+") {

        broj = parseFloat(inputField.value);

        if (inputField.value == "" || inputField.value == "-" || inputField.value == "*" || inputField.value == "/") {
            console.log("PRAZNO");
            e.preventDefault();
        } else if (rezultatField.innerText == "") {
            console.log("Sabiranje");

            rezultat = broj;

        } else if (rezultatField.innerText != '' && inputField.value != '') {

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
        rez_op = '+';
        console.log("REZ_OP ", rez_op);
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
        rez_op = '-';
        console.log("REZ_OP ", rez_op);
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

        } else {
            rezultat *= broj;

        }

        rezultatField.innerText = rezultat + '*';
        inputField.value = "";
        rez_op = '*';
        console.log("REZ_OP ", rez_op);
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
        }

        else if (rezultatField.innerText == '') {
            rezultat = broj;

        } else {
            rezultat /= broj;

        }

        rezultatField.innerText = rezultat + '÷';
        inputField.value = "";
        rez_op = '÷';
        console.log("REZ_OP ", rez_op);
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
        if (rezultatField.innerText != '' && inputField.value == '') {
            inputField.value = rezultatField.innerText.split("+").join("");
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
        console.log('ESKAPE');
        rezultat = 0;
        rezultatField.innerText = '';
        inputField.value = '';
    }
});


