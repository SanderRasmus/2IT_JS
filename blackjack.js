const ståBtn = document.querySelector("#Stå");
const hitBtn = document.querySelector("#Hit");

const UtskriftEl = document.querySelector("#Utskrift")
const spillerContainer = document.querySelector(".SpillerKort")
const dealerContainer = document.querySelector(".DealerKort")

const dealerscoreEl = document.querySelector("#DealerPoengscore")
const spillerscoreEl = document.querySelector("#SpillerPoengscore")

const Blackjack = 21;

let DealerKortVerdi = 0;
let Spillerkortverdi = 0;

const kort = [
    { kortnavn: 'kortstokk_hjerter/H01.png', verdi: 1},
    { kortnavn: 'kortstokk_hjerter/H02.png', verdi: 2},
    { kortnavn: 'kortstokk_hjerter/H03.png', verdi: 3},
    { kortnavn: 'kortstokk_hjerter/H04.png', verdi: 4},
    { kortnavn: 'kortstokk_hjerter/H05.png', verdi: 5},
    { kortnavn: 'kortstokk_hjerter/H06.png', verdi: 6},
    { kortnavn: 'kortstokk_hjerter/H07.png', verdi: 7},
    { kortnavn: 'kortstokk_hjerter/H08.png', verdi: 8},
    { kortnavn: 'kortstokk_hjerter/H09.png', verdi: 9},
    { kortnavn: 'kortstokk_hjerter/H10.png', verdi: 10},
    { kortnavn: 'kortstokk_hjerter/H11.png', verdi: 11},
    { kortnavn: 'kortstokk_hjerter/H12.png', verdi: 12},
    { kortnavn: 'kortstokk_hjerter/H13.png', verdi: 13},
]

ståBtn.addEventListener("click", BlackStå);
hitBtn.addEventListener("click", BlackHit);


function BlackStå() {

    DealerTrekk();

    if(DealerKortVerdi > Spillerkortverdi && DealerKortVerdi <= 21) {
        UtskriftEl.innerHTML = "Dealeren har vunnet spillet!"
        SpillSlutt()
    }

    if(DealerkortTrekk == Blackjack) {
        UtskriftEl.innerHTML = "Dealeren har fått blackjack og har vunnet"
        SpillSlutt()
    }

};

function BlackHit() {
    SpillerTrekk();

    DealerTrekk();


    if(Spillerkortverdi == Blackjack) {
        UtskriftEl.innerHTML = "Du har fått Blackjack! Du har vunnet"
        SpillSlutt()
    }
    else if(DealerkortTrekk == Blackjack) {
        UtskriftEl.innerHTML = "Dealeren har fått blackjack og har vunnet"
        SpillSlutt()
    }
};

function SpillerTrekk() {
    const SpillerkortTrekk = kort[Math.floor(Math.random() * kort.length)];
    Spillerkortverdi += SpillerkortTrekk.verdi;

    const SpillerKortBilde = document.createElement("img");
    SpillerKortBilde.src = SpillerkortTrekk.kortnavn;
    SpillerKortBilde.alt = `Kort: ${SpillerkortTrekk.verdi}`;

    spillerContainer.appendChild(SpillerKortBilde);

    spillerscoreEl.innerHTML = (`Din score er ${Spillerkortverdi}`);

    if(Spillerkortverdi > 21) {
        UtskriftEl.innerHTML = "Du har tapt spillet!";
        SpillSlutt()
    }
}

function DealerTrekk () {
    const DealerkortTrekk = kort[Math.floor(Math.random() * kort.length)];
    DealerKortVerdi += DealerkortTrekk.verdi;

    const DealerKortBilde = document.createElement("img");
    DealerKortBilde.src = DealerkortTrekk.kortnavn;
    DealerKortBilde.alt = `Kort: ${DealerkortTrekk.verdi}`;

    dealerContainer.appendChild(DealerKortBilde);

    dealerscoreEl.innerHTML = (`Dealeren's score er ${DealerKortVerdi}`);

    if(DealerKortVerdi > 21) {
        UtskriftEl.innerHTML = "Dealer er busted, Du har vunnet!"
        SpillSlutt()
    }
}

function SpillSlutt() {
    ståBtn.removeEventListener("click", BlackStå);
    hitBtn.removeEventListener("click", BlackHit);
}