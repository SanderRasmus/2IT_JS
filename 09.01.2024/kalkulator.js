const tall1Inp = document.querySelector("#tall1")
const tall2Inp = document.querySelector("#tall2")

const PlussBtn = document.querySelector("#PlussBtn")
const MinusBtn = document.querySelector("#MinusBtn")
const GangeBtn = document.querySelector("#GangeBtn")
const DeleBtn = document.querySelector("#DeleBtn")

const UtskriftEl = document.querySelector("#Utskrift")

PlussBtn.onclick = () => {
    const tall1 = tall1Inp.value;
    const tall2 = tall2Inp.value;
    const resultat = parseInt(tall1Inp.value) + parseInt(tall2Inp.value);

    UtskriftEl.innerHTML = (`Du har plusset sammen ${tall1} og ${tall2}. Resultatet ble ${resultat}`)
    cls()
}

MinusBtn.onclick = () => {
    const tall1 = tall1Inp.value;
    const tall2 = tall2Inp.value;
    const resultat = parseInt(tall1Inp.value) - parseInt(tall2Inp.value);

    UtskriftEl.innerHTML = (`Du har subtraktert ${tall1} med ${tall2}. Resultatet ble ${resultat}`)
    cls()
}

GangeBtn.onclick = () => {
    const tall1 = tall1Inp.value;
    const tall2 = tall2Inp.value;
    const resultat = parseInt(tall1Inp.value) * parseInt(tall2Inp.value);

    UtskriftEl.innerHTML = (`Du har ganget ${tall1} sammen med ${tall2}. Resultatet ble ${resultat}`)
    cls()
}

DeleBtn.onclick = () => {
    const tall1 = tall1Inp.value;
    const tall2 = tall2Inp.value;
    const resultat = parseInt(tall1Inp.value) / parseInt(tall2Inp.value);

    UtskriftEl.innerHTML = (`Du har delt ${tall1} og ${tall2}. Resultatet ble ${resultat}`)
    cls()
}

const cls = () => {
    console.log("Clearet Inputter")
    tall1Inp.value = ("")
    tall2Inp.value = ("")
}