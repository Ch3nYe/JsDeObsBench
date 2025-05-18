var a0_0xe2fa98 = a0_0xe933;
function a0_0xe933(KLqzds, key) {
    var stringArray = a0_0x2af9();
    a0_0xe933 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xe933(KLqzds, key);
}
function a0_0x2af9() {
    var _0x168903 = [
        'split',
        '2019/',
        'getMonth',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2af9 = function () {
        return _0x168903;
    };
    return a0_0x2af9();
}
function Main(input) {
    var _0x207ad8 = a0_0xe933;
    var input = input[_0x207ad8(0x0)]('\x0a');
    var i1 = input[0x0]['split']('\x20');
    var i2 = input[0x1][_0x207ad8(0x0)]('\x20');
    var d1 = new Date(_0x207ad8(0x1) + i1[0x0] + '/' + i1[0x1]);
    var d2 = new Date(_0x207ad8(0x1) + i2[0x0] + '/' + i2[0x1]);
    if (d1[_0x207ad8(0x2)]() == d2[_0x207ad8(0x2)]()) {
        console[_0x207ad8(0x3)](0x0);
    } else {
        console['log'](0x1);
    }
}
Main(require('fs')[a0_0xe2fa98(0x4)](a0_0xe2fa98(0x5), a0_0xe2fa98(0x6)));