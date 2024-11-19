function izvleci_poliomino(tetris, p) {
    let count = 0;
    for (let i = 0; i < tetris.length; i++) {
        for (let j = 0; j < tetris[i].length; j++) {
            if (tetris[i][j] === 3) {
                p.push([i, j]);
                count++;
            }
        }
    }
    return count;
}
