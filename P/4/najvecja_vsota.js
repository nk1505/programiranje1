function najvecja_vsota(m) {
    if (m.length === 1 && m[0].length === 1 && m[0][0] === 0) {
        return -1;
    }

    let maxSota = -1;
    let indexMax = -1;

    for (let i = 0; i < m.length; i++) {
        let vsota = 0;
        for (let j = 0; j < m[i].length - 1; j++) {
            vsota += m[i][j];
        }

        if (vsota > maxSota) {
            maxSota = vsota;
            indexMax = i;
        }
    }

    return indexMax;
}
