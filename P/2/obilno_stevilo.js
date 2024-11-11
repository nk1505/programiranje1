function obilno_stevilo(n) {
    function vsota_pravih_deliteljev(x) {
        let vsota = 0;
        for (let i = 1; i <= x / 2; i++) {
            if (x % i === 0) {
                vsota += i;
            }
        }
        return vsota;
    }

    let ob_st = n;
    while (true) {
        if (vsota_pravih_deliteljev(ob_st) > ob_st) {
            return ob_st;
        }
        ob_st++;
    }
}
