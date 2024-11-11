function razlike_elementov(tab, n, tab_razl) {
    if (n <= 1) {
        return;
    }

    for (let i = 1; i < n; i++) {
        tab_razl.push(tab[i] - tab[i - 1]);
    }
}
