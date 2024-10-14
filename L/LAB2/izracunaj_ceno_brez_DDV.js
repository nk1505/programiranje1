function izracunaj_ceno_brez_DDV(cena, ddv) {
    let osnovna_cena = cena / (1 + (ddv / 100));
    osnovna_cena = Math.round(osnovna_cena * 100) / 100;
    return osnovna_cena;
}
