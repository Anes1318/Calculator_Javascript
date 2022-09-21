
const inputField = document.querySelector("#input");
const rezultatField = document.querySelector("#last_input");
const allClearButton = document.querySelector("[data-all-clear]");
const brojevibuttons = document.querySelectorAll("[data-number]");
const operacije = document.querySelectorAll("[data-operation]");
const jednakoDugme = document.querySelector("[data-jednako]");



let zaokruzi = 2,
    last_op,
    imaMinus = 1,
    rezultat = 0,
    broj;

operacije.forEach(dugme => {
    dugme.addEventListener('click', () => {
        switch (dugme.innerText) {
            case '-':

                inputField.dispatchEvent(new KeyboardEvent('keydown', { 'key': '-' }));
                break;
            case '+':
                inputField.dispatchEvent(new KeyboardEvent('keydown', { 'key': '+' }));
                break;
            case '*':
                inputField.dispatchEvent(new KeyboardEvent('keydown', { 'key': '*' }));
                break;
            case '÷':
                inputField.dispatchEvent(new KeyboardEvent('keydown', { 'key': '/' }));
                break;


            default:
                break;
        }

    })
});



brojevibuttons.forEach(dugme => {
    dugme.addEventListener('click', () => {
        inputField.value += dugme.innerText;
    })
});


jednakoDugme.addEventListener('click', () => {
    inputField.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' }));
})

function eskape() {

    console.log('ESKAPE');
    rezultat = 0;
    rezultatField.innerText = '';
    inputField.value = '';
}

allClearButton.addEventListener('click', () => {
    eskape();
});


inputField.addEventListener("keydown", (e) => {
    console.log(e);


    if (e.key == "+") {
        console.log(last_op);
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
            } else if (last_op == '÷') {
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


        if (imaMinus == '1' && inputField.value == '') {
            console.log("MORE NEGATIVNI");
            imaMinus = 2;
            console.log(imaMinus);

        } else if (imaMinus == '2' && inputField.value == '') {
            console.log('NEMORE JOS');
            e.preventDefault();
        }
        else if (rezultatField.innerText == '') {
            console.log("ODUZIMANJE");
            rezultat = broj;
            rezultatField.innerText = rezultat + '-';
            inputField.value = "";
            e.preventDefault();

        } else if (rezultatField.innerText != '' && inputField.value != '') {
            if (last_op == '+') {

                rezultat += broj;
                rezultatField.innerText = rezultat + '-';
                inputField.value = "";
                console.log("MINUS SABRO");
                e.preventDefault();
            } else if (last_op == '*') {

                rezultat *= broj;
                rezultatField.innerText = rezultat + '-';
                inputField.value = "";
                console.log("MINUS POMNOZIO");
                e.preventDefault();
            } else if (last_op == '÷') {
                rezultat /= broj;
                rezultatField.innerText = rezultat + '-';
                inputField.value = "";
                console.log("MINUS PODIJELIO");
                e.preventDefault();
            } else {
                rezultat -= broj;
                rezultatField.innerText = rezultat + '-';
                inputField.value = "";
                console.log("MINUS ODUZEO");
                e.preventDefault();
            }
        }


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
        console.log("EMTER");
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
            broj = parseFloat(inputField.value);

            switch (last_op) {
                case '+':

                    rezultat += broj;

                    e.preventDefault();
                    break;
                case '-':

                    rezultat -= broj;

                    e.preventDefault();
                    break;
                case '*':

                    rezultat *= broj;

                    e.preventDefault();
                    break;
                case '÷':


                    rezultat /= broj;
                    // rezultat = Math.round(rezultat * 100) / 100; // more sovim da se cini nesto samo polako

                    e.preventDefault();
                    break;
                default:
                    break;
            }
            rezultatField.innerText = '';
            inputField.value = rezultat;

        }
    }
    if (e.key == 'Escape') {
        eskape();
    }
});






