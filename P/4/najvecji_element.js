function najvecji_element(m, vr, st) {
    let maxElement = -99999999999999999;
    let maxIndexRow = -1;

    for (let i = 0; i < vr; i++) {
        for (let j = 0; j < st; j++) {
            if (m[i][j] > maxElement) {
                maxElement = m[i][j];
                maxIndexRow = i;
            }
        }
    }

    return maxIndexRow;
}
