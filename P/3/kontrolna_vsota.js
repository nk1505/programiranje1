function preveri_podatke(t, n) {
    let vsota = 0;
    for (let i = 0; i < n - 1; i++) {
        if (i % 2 === 0) {
            vsota += t[i];
        } else {
            vsota += t[i] * 2;
        }
    }
    let kontrolna_vsota = vsota % 10;
    return kontrolna_vsota === t[n - 1];
}
