function koliko_kovancev(nom, st, zn, placilo) {
    let stevilka = 0;

    for (let i = st - 1; i >= 0; i--) {
        while (zn >= nom[i]) {
            placilo.push(nom[i]);
            zn -= nom[i];
            stevilka++;
        }
    }

    return stevilka;
}
