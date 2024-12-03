function isci_polno_vrstico(tetris) {
    let foundIndex = -1;

    for (let i = 1; i < tetris.length - 1; i++) {
        let row = tetris[i];
        if (row[0] === 0 && row[row.length - 1] === 0 && row.slice(1, row.length - 1).every(value => value === 2)) {
            if (foundIndex === -1) {
                foundIndex = i;
            }
        }
    }

    return foundIndex;
}
