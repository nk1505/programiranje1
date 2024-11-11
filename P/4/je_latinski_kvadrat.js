function je_latinski_kvadrat(lat, n) {
    for (let i = 0; i < n; i++) {
        let vrstica = lat[i];
        let setVrstica = new Set(vrstica);
        if (setVrstica.size !== n) {
            return false;
        }
    }

    for (let j = 0; j < n; j++) {
        let stolpec = [];
        for (let i = 0; i < n; i++) {
            stolpec.push(lat[i][j]);
        }
        let setStolpec = new Set(stolpec);
        if (setStolpec.size !== n) {
            return false;
        }
    }

    return true;
}
