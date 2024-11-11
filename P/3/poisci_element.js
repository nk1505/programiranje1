function poisci_element(t, n) {
    let i = 0;

    while (t[i] !== -1) {
        if (t[i] === n) {
            return i;
        }
        i++;
    }

    return -1;
}
