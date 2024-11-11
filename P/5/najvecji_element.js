function najvecji_elementi(m, vr, st, t) {
    let maxVal = -999999999999999999999999999999;

    for (let i = 0; i < vr; i++) {
        for (let j = 0; j < st; j++) {
            if (m[i][j] > maxVal) {
                maxVal = m[i][j];
            }
        }
    }

    for (let i = 0; i < vr; i++) {
        if (m[i].includes(maxVal)) {
            t.push(i);
        }
    }
}
