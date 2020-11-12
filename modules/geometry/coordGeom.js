// p1 = [x1, y1];
// p2 = [x2, y2];

// p1 = [3, 5];
// p2 = [2, 4];

function eqOfLine(sloFunc, yint) {
    xint = (-1 * yint) / sloFunc;
    return `The equation of this line is y = ${sloFunc}x + ${yint}; the y-intercept is ${yint} and the x-intercept is ${xint}`;
}

function slope(pt1, pt2) {
    m = (pt2[0] - pt1[0]) / (pt2[1] - pt1[1]);
    return m;
}

// console.log(eqOfLine(slope(p1, p2), 2));

function distTwoPoints(pt1, pt2) {
    x0 = Math.pow(pt1[0] - pt2[0], 2);
    y0 = Math.pow(pt1[1] - pt2[1], 2);
    console.log(x0, y0)
    return Math.sqrt(x0 + y0);
}

// console.log(distTwoPoints(p1, pt2))

function coordMidPoint(pt1, pt2) {
    x0 = (pt1[0] + pt2[0]) / 2;
    y0 = (pt1[1] + pt2[1]) / 2;
    return [x0, y0];
}

// console.log(coordMidPoint(p1, p2))