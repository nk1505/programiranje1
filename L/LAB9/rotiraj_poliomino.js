function rotiraj_poliomino(p, d, os, smer) {
    if (os === -1) {
        return;
    }

    const pivot = p[os];

    for (let i = 0; i < d; i++) {
        if (smer === 1) {
            const x = p[i][0] - pivot[0];
            const y = p[i][1] - pivot[1];
            p[i][0] = pivot[0] - y;
            p[i][1] = pivot[1] + x;
        } else if (smer === -1) {
            const x = p[i][0] - pivot[0];
            const y = p[i][1] - pivot[1];
            p[i][0] = pivot[0] + y;
            p[i][1] = pivot[1] - x;
        }
    }
}
