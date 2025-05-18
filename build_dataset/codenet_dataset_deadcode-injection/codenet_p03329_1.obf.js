var a0_0x33ef63 = a0_0x2732;
function equal(a, b) {
    var _0x328a47 = a0_0x2732;
    var aP = Object['getOwnPropertyNames'](a);
    var bP = Object[_0x328a47(0x0)](b);
    if (aP[_0x328a47(0x1)] != bP[_0x328a47(0x1)])
        return ![];
    for (var i = 0x0; i < aP[_0x328a47(0x1)]; i++)
        if (a[aP[i]] !== b[aP[i]])
            return ![];
    return !![];
}
function a0_0x4604() {
    var _0x1001ca = [
        'getOwnPropertyNames',
        'length',
        'map',
        'pow',
        'min',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4604 = function () {
        return _0x1001ca;
    };
    return a0_0x4604();
}
function pi(text) {
    return parseInt(text, 0xa);
}
var six = [
    0x6,
    0x5,
    0x4,
    0x3,
    0x2,
    0x1
][a0_0x33ef63(0x2)](_ => Math['pow'](0x6, _));
var nine = [
    0x5,
    0x4,
    0x3,
    0x2,
    0x1
]['map'](_ => Math[a0_0x33ef63(0x3)](0x9, _));
function count(i) {
    var _0x2db5c3 = a0_0x2732;
    if (i < 0x6)
        return i;
    if (i < 0x9)
        return 0x1 + (i - 0x6);
    return Math[_0x2db5c3(0x4)](count(i - six['find'](_ => _ <= i)) + 0x1, count(i - nine['find'](_ => _ <= i)) + 0x1);
}
function main(input) {
    var _0x35be29 = a0_0x2732;
    var i = pi(input);
    console[_0x35be29(0x5)](count(i));
}
function a0_0x2732(bSMMSn, key) {
    var stringArray = a0_0x4604();
    a0_0x2732 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2732(bSMMSn, key);
}
main(require('fs')['readFileSync'](a0_0x33ef63(0x6), a0_0x33ef63(0x7)));