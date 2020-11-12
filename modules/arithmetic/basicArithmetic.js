function expo(base, power) {
    while (power === 0) {
        return 1
    }
    return base * expo(base, power - 1);
}

function fact(n) {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
};