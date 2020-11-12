// unfiled
//n = number of sides
function sumIntAng(n) {
    return 180 * (n - 2);
}

// Perimeter / Circumference -- two dimensions

function perSquare(s) {
    return s * 4;
}

function perRect(l, w) {
    return (2 * L) + (2 * w);
}

function cirCir(r) {
    return 2 * Math.PI * r;
}

// Area / two dimensions

function areaSquare(s) {
    return Math.pow(s, 2);
}

function areaRect(l, w) {
    return l * w;
}

function areaTri(b, h) {
    return .5 * b * h
}

function areaCir(r) {
    return Math.PI * (Math.pow(r, 2));
}

function areaPara(b, h) {
    return b * h;
}

// Surface Area

function surfCube(s) {
    return 6 * Math.pow(s, 2);
}

function surfRect(l, w, h) {
    return (2 * l * w) + (2 * w * h) + (w * l * h);
}

function surfCyl(r, h) {
    a = 2 * Math.PI * Math.pow(r, 2);
    b = 2 * Math.PI * r * h;
    return a + b;
}

function surfCone(r, h) {
    rt = Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2));
    a = r * (r + rt);
    return Math.PI * a;
}

function surfSph(r) {
    return 4 * Math.PI * Math.pow(r, 2);
}

// Volume

function volCube(s) {
    return Math.pow(s, 3);
}

function volRect(l, w, h) {
    return l * w * h;
}

function volCyl(r) {
    return Math.PI * Math.pow(r, 2) * h;
}

function volCone(r, h) {
    return .5 * Math.PI * Math.pow(r, 2) * h;
}

function volSph(r) {
    return (4 / 3) * Math.PI * Math.pow(r, 3);
}