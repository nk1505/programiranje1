function prva_ponovitev(t) {
    let stevilke = new Set();
    let stop = t.indexOf(-1);

    for (let i = 0; i < stop; i++) {
        if (stevilke.has(t[i])) {
            return i;
        }
        stevilke.add(t[i]);
    }

    return -1;
}
