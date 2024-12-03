function spusti_poliomino(tetris, p, d) {
    let canDrop = true;
    let offset = 0;

    while (canDrop) {
        for (let i = 0; i < d; i++) {
            let x = p[i][0] + offset + 1;
            let y = p[i][1];
            if (tetris[x][y] !== 1) {
                canDrop = false;
                break;
            }
        }

        if (canDrop) {
            offset++;
        }
    }

    for (let i = 0; i < d; i++) {
        p[i][0] += offset;
    }
}
