function izracunaj_dajatve(cena) {
    let dajatve = 0;
    if (cena <= 22) {
        dajatve = 0;
    } else if (cena <= 150) {
        dajatve = cena * 0.22;
    } else {
        const carina = cena * 0.10;
        const davčnaOsnova = cena + carina;
        const ddv = davčnaOsnova * 0.22;
        dajatve = carina + ddv;
    }
    dajatve = Math.round(dajatve * 100) / 100;

    return dajatve;
}
