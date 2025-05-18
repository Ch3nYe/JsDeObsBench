function equal(a, b) {
    var aP = Object.getOwnPropertyNames(a);
    var bP = Object.getOwnPropertyNames(b);
    if (aP.length != bP.length)
        return false;
    for (var i = 0; i < aP.length; i++)
        if (a[aP[i]] !== b[aP[i]])
            return false;
    return true;
}
function pi(text) {
    return parseInt(text, 10);
}
var six = [6, 5, 4, 3, 2, 1].map(_ => Math.pow(6, _));
var nine = [5, 4, 3, 2, 1].map(_ => Math.pow(9, _));
function count(i) {
    if (i < 6)
        return i;
    if (i < 9)
        return 1 + (i - 6);
    return Math.min(count(i - six.find(_ => _ <= i)) + 1, count(i - nine.find(_ => _ <= i)) + 1);
}
function main(input) {
    var i = pi(input);
    console.log(count(i));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
