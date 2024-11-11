function uredi(t, smer) {
    let stop = t.indexOf(0);

    for (let i = 0; i < stop - 1; i++) {
        let izbraniIndeks;

        if (smer === 1) {
            izbraniIndeks = poisci_najmanjsi_element(t, i);
        } else if (smer === -1) {
            izbraniIndeks = poisci_najvecji_element(t, i);
        } else {
            return;
        }
        zamenjaj_elementa(t, i, izbraniIndeks);
    }
}

function zamenjaj_elementa(t, m, n) {
    let stop = t.indexOf(0);
    if (m < 0 || n < 0 || m >= stop || n >= stop) {
        return -1;
    }

    let tmp = t[m];
    t[m] = t[n];
    t[n] = tmp;
    return 0;
}

function poisci_najmanjsi_element(t, n) {
    let stop = t.indexOf(0);
    if (n < 0 || n >= stop) {
        return -1;
    }

    let najmanjsiIndeks = n;
    for (let i = n + 1; i < stop; i++) {
        if (t[i] < t[najmanjsiIndeks]) {
            najmanjsiIndeks = i;
        }
    }
    return najmanjsiIndeks;
}

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
