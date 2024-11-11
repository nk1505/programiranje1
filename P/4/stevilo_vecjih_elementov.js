function stevilo_vecjih_elementov(m, vr, st, x, y) {
    let stevec = 0;
    let trenutniElement = m[x][y];
    let smeri = [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [-1, 1], [1, -1], [1, 1]
    ];

    for (let i = 0; i < smeri.length; i++) {
        let dx = smeri[i][0];
        let dy = smeri[i][1];
        let noviX = x + dx;
        let noviY = y + dy;

        if (noviX >= 0 && noviX < vr && noviY >= 0 && noviY < st) {
            if (m[noviX][noviY] > trenutniElement) {
                stevec++;
            }
        }
    }

    return stevec;
}
