function najvecja_razlika(t, n) {
    if (n === 0) {
        return -1;
    }

    let min = t[0];
    let max = t[0];

    for (let i = 1; i < n; i++) {
        if (t[i] < min) {
            min = t[i];
        }
        if (t[i] > max) {
            max = t[i];
        }
    }

    let razlika = max - min;
    return razlika;
}
