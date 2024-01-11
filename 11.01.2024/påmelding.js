const navnInp = document.querySelector("#navnInp");
const adresseInp = document.querySelector("#adresseInp");
const epostInp = document.querySelector("#epostInp");
const tlfInp = document.querySelector("#tlfInp");

const regBtn = document.querySelector(".regBtn");

regBtn.onclick = () => {
    cls()
};

const cls = () => {
    navnInp.value = ("")
    adresseInp.value =("")
    epostInp.value = ("")
    tlfInp.value = ("")
};