const nedtelling = () => {
    const nedtellDato = new Date("Jun 17, 2024 00:00:00").getTime();
    const nå = new Date().getTime();
    const differanse = nedtellDato - nå;

    const sekund = 1000;
    const minutt = sekund * 60;
    const time = minutt * 60;
    const dag = time * 24;

    const TekstDag = Math.floor(differanse / dag);
    const TekstTime = Math.floor((differanse % dag) / time);
    const TekstMinutt = Math.floor((differanse % time) / minutt);
    const TekstSekund = Math.floor((differanse % minutt) / sekund);

    document.querySelector(".dag").innerHTML = TekstDag;
    document.querySelector(".time").innerHTML = TekstTime;
    document.querySelector(".minutt").innerHTML = TekstMinutt;
    document.querySelector(".sekund").innerHTML = TekstSekund;
};

setInterval(nedtelling, 1000);
