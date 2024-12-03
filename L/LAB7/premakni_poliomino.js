function premakni_poliomino(p, d, ver, hor) {
    for (let i = 0; i < d; i++) {
        const newRow = p[i][0] + ver;
        const newCol = p[i][1] + hor;
    }

    for (let i = 0; i < d; i++) {
        p[i][0] += ver;
        p[i][1] += hor;
    }
}
