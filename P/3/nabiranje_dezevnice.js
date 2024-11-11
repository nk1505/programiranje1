function nabiranje_dezevnice(visine, n) {
    if (n <= 2) return 0;

    let levo = 0;
    let desno = n - 1;
    let maxLevo = visine[levo];
    let maxDesno = visine[desno];
    let kolicina = 0;

    while (levo < desno) {
        if (maxLevo <= maxDesno) {
            levo++;
            maxLevo = Math.max(maxLevo, visine[levo]);
            kolicina += Math.max(0, maxLevo - visine[levo]);
        } else {
            desno--;
            maxDesno = Math.max(maxDesno, visine[desno]);
            kolicina += Math.max(0, maxDesno - visine[desno]);
        }
    }

    return kolicina;
}
