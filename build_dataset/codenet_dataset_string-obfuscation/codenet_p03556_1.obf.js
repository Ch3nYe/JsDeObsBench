var a0_0x344711 = a0_0x1083;
(function (stringArrayFunction, comparisonValue) {
    var _0x20895c = a0_0x1083;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x20895c(0x131)) / 0x1 + -parseInt(_0x20895c(0x137)) / 0x2 + parseInt(_0x20895c(0x138)) / 0x3 * (parseInt(_0x20895c(0x12f)) / 0x4) + parseInt(_0x20895c(0x136)) / 0x5 * (parseInt(_0x20895c(0x133)) / 0x6) + -parseInt(_0x20895c(0x13a)) / 0x7 + parseInt(_0x20895c(0x12e)) / 0x8 + -parseInt(_0x20895c(0x139)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4fb3, 0xbe947));
function Main(input) {
    var _0x9070e3 = a0_0x1083;
    input = input[_0x9070e3(0x134)]('\x0a');
    var n = parseInt(input[0x0]);
    var ans = Math['pow'](Math['floor'](Math[_0x9070e3(0x132)](n)), 0x2);
    console[_0x9070e3(0x130)]('%s', ans);
}
function a0_0x1083(FLjtGB, key) {
    var stringArray = a0_0x4fb3();
    a0_0x1083 = function (index, key) {
        index = index - 0x12d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1083(FLjtGB, key);
}
function a0_0x4fb3() {
    var _0x55b289 = [
        '548CQNRsr',
        'log',
        '45701vlNOBz',
        'sqrt',
        '12wZMKCk',
        'split',
        'readFileSync',
        '1207985NezBWR',
        '1580798iSAcFm',
        '12837bQAkFM',
        '2984211jGOBYw',
        '1676101CftopM',
        '/dev/stdin',
        'utf8',
        '8215344iMGMAA'
    ];
    a0_0x4fb3 = function () {
        return _0x55b289;
    };
    return a0_0x4fb3();
}
Main(require('fs')[a0_0x344711(0x135)](a0_0x344711(0x13b), a0_0x344711(0x12d)));