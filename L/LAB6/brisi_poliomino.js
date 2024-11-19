function brisi_poliomino(tetris) {
    for (let i = 0; i < tetris.length; i++) {
        for (let j = 0; j < tetris[i].length; j++) {
            if (tetris[i][j] === 3) {
                tetris[i][j] = 1;
            }
        }
    }
}
