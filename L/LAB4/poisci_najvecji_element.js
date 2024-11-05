function poisci_najvecji_element(t, n) {
    let stop = t.indexOf(0);
    if (n < 0 || n >= stop) {
        return -1;
    }

    let najvecjiIndeks = n;
    for (let i = n + 1; i < stop; i++) {
        if (t[i] > t[najvecjiIndeks]) {
            najvecjiIndeks = i;
        }
    }
    return najvecjiIndeks;
}
