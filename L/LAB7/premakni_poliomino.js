function premakni_poliomino(p, d, ver, hor) {
    for (let i = 0; i < d; i++) {
        const newRow = p[i][0] + ver;
        const newCol = p[i][1] + hor;

        if (newRow < 1 || newRow >= 9 || newCol < 1 || newCol >= 7) {
            return;
        }
    }

    for (let i = 0; i < d; i++) {
        p[i][0] += ver;
        p[i][1] += hor;
    }
}
