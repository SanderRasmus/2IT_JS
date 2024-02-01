const TekstboksEl = document.querySelector("#Innlegg-Container");
const OverskriftEl = document.querySelector("#Overskrift-Innlegg");
const TekstEl = document.querySelector("#Tekst-Innlegg");
const ForfatterEl = document.querySelector("#Forfatter-Innlegg");
const LagtekstBtn = document.querySelector("#OpprettBtn");

let artikler = []

LagtekstBtn.addEventListener("click", OpprettInnlegg)

function OpprettInnlegg() {
    let Tekstboks = document.createElement("div");
    let elementer = [
        { input: OverskriftEl, id: "Overskrift" },
        { input: TekstEl, id: "Tekst" },
        { input: ForfatterEl, id: "Forfatter" },
    ]

    for (let i = 0; i < elementer.length; i++) {
        let element = document.createElement("p");
        element.innerHTML = elementer[i].input.value;
        element.id = elementer[i].id;
        Tekstboks.appendChild(element);
    }

    artikler.unshift(Tekstboks)
    TekstboksEl.appendChild(Tekstboks);
    SorterInnlegg();
}

function SorterInnlegg() {
    while (TekstboksEl.firstChild) {
        TekstboksEl.removeChild(TekstboksEl.firstChild);
    }

    artikler.sort();

    for(let i = 0; i < artikler.length; i++) {
        TekstboksEl.appendChild(artikler[i])
    }
}