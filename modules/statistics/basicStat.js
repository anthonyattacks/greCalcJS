function average(array) {
    sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
// console.log(average(arr));

function stdev(avfunc, array) {
    sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += Math.pow(2, Math.abs((avfunc - array[i])));
    }
    return Math.sqrt(sum / array.length);
}
// console.log(stdev(average(arr), arr));

// arr = [2, 3, 3, 3, 4, 5, 6, 7, 7, 7, 8];