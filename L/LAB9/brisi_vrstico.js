function brisi_vrstico(tetris, n) {
    const novaVrstica = [0, 1, 1, 1, 1, 1, 0];

    for (let i = 0; i < novaTabela.length; i++) {
        tetris[i] = novaTabela[i];
    }

    novaTabela.push(novaVrstica);

    for (let i = 1; i < tetris.length - 1; i++) {
        if (i !== n + 1) {
            novaTabela.push(tetris[i]);
        }
    }

    novaTabela.push(tetris[tetris.length - 1]);

    for (let i = 0; i < novaTabela.length; i++) {
        tetris[i] = novaTabela[i];
    }
}
