const GjennomsnittEl = document.querySelector("#GjennomsnittEl");
const TallContainerEl = document.querySelector("#TrukketTall-Container")

const NullstillBtn = document.querySelector("#NullstillBtn");
const TrekkBtn = document.querySelector("#TrekkBtn");

NullstillBtn.addEventListener("click", NullstillProgram);
TrekkBtn.addEventListener("click", TrekkTall)

let Trukkettall = []
let sum = 0;
let Utregnet_Gjennomsnitt = 0;

function TrekkTall() {
    let tall = Math.floor(Math.random() * 50 +1);

    let TrukkettallEl = document.createElement("p");
    TrukkettallEl.innerHTML = `${tall}`;
    TallContainerEl.appendChild(TrukkettallEl);
    Trukkettall.push(tall)
    Gjennomsnitt()
}

function NullstillProgram() {
    sum = 0
    while(Trukkettall.length > 0) {
        Trukkettall.pop()
    }

    TallContainerEl.innerHTML = ""
    Gjennomsnitt()
}

function Gjennomsnitt() {
    for(let i = 0; i < Trukkettall.length; i++) {
        sum += Trukkettall[i];
    }
    Utregnet_Gjennomsnitt = sum / Trukkettall.length;
    Trukkettall.length == 0 ? GjennomsnittEl.innerHTML = "" : GjennomsnittEl.innerHTML = `Gjennomsnittet er ${Utregnet_Gjennomsnitt}.`
}