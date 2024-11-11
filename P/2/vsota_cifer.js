function vsota_cifer(n) {
    let vsota = 0;
    while (n > 0) {
        vsota += n % 10;
        n = Math.floor(n / 10);
    }
    return vsota;
}
