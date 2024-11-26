function preveri_prostor(tetris, p, d) {
    for (let i = 0; i < d; i++) {
        const [row, col] = p[i];
        if (tetris[row][col] !== 1) {
            return false;
        }
    }
    return true;
}
