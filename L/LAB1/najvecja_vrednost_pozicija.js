function  najvecja_vrednost_pozicija(a, b, c) {
    var najvecji = a;

    if (b > najvecji) {
        najvecji = b;
    }

    if(c > najvecji){
        najvecji = c;
    }

    if (najvecji === a) {
        return "prvi";
    }

    else if(najvecji == b){
        return "drugi";
    }

    else{
        return "tretji"
    }
}
