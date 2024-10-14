function kalkulator(a, b, op) {
    if (op === "+") {
        return a + b;
    } else if (op === "-") {
        return a - b;
    } else if (op === "*") {
        return a * b;
    } else if (op === "/") {
        if (b === 0) {
            return "napaka";
        } else {
            return a / b;
        }
    } else {
        return "napaka";
    }
}
