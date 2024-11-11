function najvecji_kvadrat(m, vr, st) {
    let max_sirina = 0;
    let dp = Array.from(Array(vr), () => Array(st).fill(0));

    for (let i = 0; i < vr; i++) {
        for (let j = 0; j < st; j++) {
            if (m[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                max_sirina = Math.max(max_sirina, dp[i][j]);
            }
        }
    }

    return max_sirina;
}
