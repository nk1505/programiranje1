function dan_v_tednu(dan) {
    if (dan === 0) {
        return "nedelja";
    } else if (dan === 1) {
        return "ponedeljek";
    } else if (dan === 2) {
        return "torek";
    } else if (dan === 3) {
        return "sreda";
    } else if (dan === 4) {
        return "četrtek";
    } else if (dan === 5) {
        return "petek";
    } else {
        return "sobota";
    }
}
