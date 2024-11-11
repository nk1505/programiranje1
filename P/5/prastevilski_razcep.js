function prastevilski_razcep(n, tab) {
    let st_praf = 0;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            tab.push(i);
            n /= i;
            st_praf++;
        }
    }

    if (n > 1) {
        tab.push(n);
        st_praf++;
    }

    return st_praf;
}
