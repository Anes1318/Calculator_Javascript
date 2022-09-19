// console.log('hashirama')
// console.error('hashiramaipo')
// document.write('hashiramaipo')
// alert('alertr ipo')
// console.warn("upozorenje ipo")
// console.log(5 === "5");
// open()
// document.getElementById("poruka").innerText = "pita ipo";

// let pita, sa, sirom;

// pita = 'pita ';
// sa = 'sa ';
// sirom = 'sirom ';
// let broj = 56.2;
// let broj2 = 2;
// let broj3 = '69';
// let gibanica = pita + sa + sirom + broj + broj2;
// let zbir = broj + broj2;
// console.log(typeof(broj3));

// broj3 = parseInt(broj3);
// console.log(typeof(broj3));

// console.log(gibanica, zbir, "hashirama");
// console.log(zbir);

// poruka.innerText = 'pitaipo';

// poruka.innerText = "hashriama ipo";

// let niz1 = [1, 2, 3, 4, 5, 6, 5, 8, 9, 10];

// for (let brojac of niz1) {
//     console.log(niz[brojac]);
//     console.log("index = " + brojac);
// }

// let niz2 = ["audi", "bemve", "hashriama", "pita ipo"];

// for (let brojac of niz2) {
//     // console.log(niz);
//     console.log("index = " + brojac);
// }

// for (let i = 0; i < niz.length; i++) {
// console.log(niz[i]);
// }

// let niz2 = ["audi", "bemve", "hashriama", "pita ipo"];

// niz2.forEach(function (element) {
//     console.log();
// });

// function sabiranje(a, b) {
//     return a / b;
// }

// console.log(sabiranje(9, 4));

// let varijabla = document.querySelector("#kategorija2");
// varijabla.remove();

// let novi_el = document.createElement("nav");
// novi_el.classList = "pitaipo";
// console.log(novi_el);

// novi_el.innerHTML = "<hr><h1>PITAAAAAAAAAAA</h1>";

// let body = document.querySelector("body");

// body.appendChild(novi_el);
// let varijabla2 = document.querySelector(".pitaipo");
// varijabla2.remove();

const inputField = document.getElementById("broj1");
let zbir = 0;
let last_op,
    last_br,
    prolaz = 0;

inputField.addEventListener("keydown", (e) => {
    console.log(e.key);
    // console.log("zadnja operacija", last_op);
    if (e.key == "+") {
        let rezultat = document.querySelector(".rezultat");
        if (inputField.value == "") {
            console.log("PROSO");
            console.log("PRAZAN");
            last_op = e.key;
            rezultat.innerText = `${zbir} +`;
            e.preventDefault();
        } else if (inputField.value != "+") {
            console.log("PROSO");

            console.log("BROJ 1 VALUE", broj1.value);
            prvi = parseFloat(broj1.value);
            if (last_op == "-") {
                zbir -= prvi;
                console.log("oduzeo");
            } else if ((last_op = "+")) {
                zbir += prvi;
                console.log("sabro");
            }
            console.log("zbir", zbir);

            last_br = prvi;
            last_op = "+";
            rezultat.innerText = `${zbir} +`;
            prolaz++;
            inputField.value = "";
            e.preventDefault();
        } else {
            console.log("NEMORE");
            e.preventDefault();
        }
    }
    if (e.key === "-") {
        if (inputField.value == "") {
            console.log("PROSO");
            console.log("PRAZAN");
            last_op = "-";
        } else if (inputField.value != "-") {
            console.log("PROSO");
            let rezultat = document.querySelector(".rezultat");
            console.log("BROJ 1 VALUE", broj1.value);
            prvi = parseFloat(broj1.value);
            if (last_op == "+") {
                zbir += prvi;
                console.log("sabro");
            } else {
                zbir = prvi;
                console.log("isto");
            }

            last_br = prvi;
            last_op = "-";
            rezultat.innerText = `${zbir} -`;
            prolaz++;
            inputField.value = "";
            console.log("zbir", zbir);
            e.preventDefault();
        } else {
            console.log("NEMORE");
            e.preventDefault();
        }
    }
    if (e.key === "*") {
        if (inputField.value !== "*" && inputField.value !== null && inputField.value !== "") {
            console.log("PROSO");
            last_op = "*";

            let rezultat = document.querySelector(".rezultat");
            console.log(broj1.value);
            prvi = parseFloat(broj1.value);
            if (last_op == null) {
                zbir = prvi;
            } else {
                zbir *= prvi;
            }
            rezultat.innerText = `${prvi} *`;

            rezultat.innerText = `${zbir} *`;

            inputField.value = "";
            e.preventDefault();
        } else {
            console.log("NIJE PROSO");
            e.preventDefault();
        }
    }
    if (e.key === "/") {
        if (inputField.value !== "/" && inputField.value !== null && inputField.value !== "") {
            console.log("PROSO");
            last_op = "/";
            let rezultat = document.querySelector(".rezultat");
            console.log(broj1.value);
            prvi = parseFloat(broj1.value);

            zbir /= prvi;
            rezultat.innerText = `${zbir} /`;

            inputField.value = "";
            e.preventDefault();
        } else {
            console.log("NIJE PROSO");
            e.preventDefault();
        }
    }
    if (e.key === "Enter") {
        if (inputField.value !== null && inputField.value !== "") {
            console.log("PROSO");
            let rezultat = document.querySelector(".rezultat");
            console.log(broj1.value);
            prvi = parseFloat(broj1.value);
            switch (last_op) {
                case "+":
                    zbir += prvi;
                    break;
                case "-":
                    zbir = prvi;
                    break;
                default:
                    zbir = prvi;
            }

            rezultat.innerText = zbir + last_op;

            inputField.value = "";
            e.preventDefault();
        } else {
            console.log("NIJE PROSO");
            e.preventDefault();
        }
    }
    if (e.key === "Escape") {
        reset();
    }
});
function reset() {
    let rezultat = document.querySelector(".rezultat");
    zbir = 0;
    rezultat.innerText = "";
    inputField.value = "";
}

// let dugme = document.querySelector("#reset_dugme");

// dugme.addEventListener("click", e => {
//     reset();
// });
