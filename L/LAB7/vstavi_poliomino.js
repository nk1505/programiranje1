function vstavi_poliomino(t, p, d) {
    for (let i = 0; i < d; i++) {
        const row = p[i][0];
        const col = p[i][1];
        t[row][col] = 2;
    }
}
