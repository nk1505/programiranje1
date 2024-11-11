function narascajoce_zaporedje(t) {
    let dolzina = 0;
    let trenutnaDolzina = 0;
    for (let i = 0; t[i] !== -1; i++) {
        if (i === 0 || t[i] >= t[i - 1]) {
            trenutnaDolzina++;
        } else {
            dolzina = Math.max(dolzina, trenutnaDolzina);
            trenutnaDolzina = 1;
        }
    }

    dolzina = Math.max(dolzina, trenutnaDolzina);

    return dolzina;
}
