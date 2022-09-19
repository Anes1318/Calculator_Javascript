const inputField = document.querySelector("#input");
const rezultat = document.querySelector("#last_input");
let rez_op,
    last_op,
    zbir = 0,
    broj;
inputField.addEventListener("keydown", (e) => {
    // console.log(e);

    if (e.key == "+") {
        
        broj = parseFloat(inputField.value);

        if (inputField.value == "" || inputField.value == "-" || inputField.value == "*" || inputField.value == "/") {
            console.log("PRAZNO");
            e.preventDefault();
        } else if (rezultat.innerText == "") {
            console.log("Sabiranje");

            zbir = broj;
          
        } else if (rezultat.innerText != '' && inputField.value != '') {
            if (last_op == '-' && !inputField.value.includes('-')) {
                zbir -= broj;
                console.log("PLUS ODUZEO");
            } else {
                zbir += broj;
                console.log("PLUS SABRO");
            }


            
        }
        rezultat.innerText = zbir + '+';
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
        else if (rezultat.innerText == '') {
            console.log("ODUZIMANJE");

            zbir = broj;
        } else if (rezultat.innerText != '' && inputField.value != '') {
            if (last_op == '+') {
                console.log("minus sabro");
                zbir += broj;
            } else {
                zbir -= broj;
                console.log("minus oduzeo");


            } 
        }
        rezultat.innerText = zbir + '-';
        inputField.value = "";  
        rez_op = '-';  
        console.log("REZ_OP ", rez_op);
        e.preventDefault();
        last_op = "-";

    }
    if (e.key == ".") {
        if (inputField.value.includes(".")) {
            console.log("NEMORE");
            e.preventDefault();
        }
    }
    if (e.key == "Enter") {
        if (rezultat.innerText != '' && inputField.value == '') {
            inputField.value = rezultat.innerText.split("+").join("");
            rezultat.innerText = "";
            e.preventDefault();
        } else if (rezultat.innerText != '' && inputField.value != '') {
            switch (last_op) {
                case '+':
                    broj = parseFloat(inputField.value);
                    zbir += broj;
                    rezultat.innerText = '';
                    inputField.value = zbir;
                    e.preventDefault();
                    break;
                case '-':
                    broj = parseFloat(inputField.value);
                    zbir -= broj;
                    rezultat.innerText = '';
                    inputField.value = zbir;
                    e.preventDefault();
                    break;
                default:
                    break;
            }


        }

    }
    if (e.key == 'Escape') {
        console.log('ESKAPE');
        zbir = 0;
        rezultat.innerText = '';
        inputField.value = '';
    }
});

// function mijenjanje_op() {
    
// }
