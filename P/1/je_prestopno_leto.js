function je_prestopno_leto(leto) {
    if (leto % 4 === 0) {
        if (leto % 100 === 0) {
            if (leto % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}
