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
