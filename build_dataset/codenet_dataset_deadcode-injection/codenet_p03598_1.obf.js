var a0_0x14aa22 = a0_0x5706;
function a0_0x5706(wvFeMN, key) {
    var stringArray = a0_0x255c();
    a0_0x5706 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5706(wvFeMN, key);
}
function a0_0x255c() {
    var _0x206c76 = [
        'split',
        'log',
        '/dev/stdin'
    ];
    a0_0x255c = function () {
        return _0x206c76;
    };
    return a0_0x255c();
}
function Main(input) {
    var _0x1d3f6f = a0_0x5706;
    var input = input[_0x1d3f6f(0x0)]('\x0a');
    var ballXList = input[0x2]['split']('\x20');
    var ret = 0x0;
    for (var i = 0x0; i < input[0x0]; i++) {
        var aDistance = ballXList[i];
        var bDistance = input[0x1] - ballXList[i];
        var ret = ret + (aDistance < bDistance ? aDistance : bDistance) * 0x2;
    }
    console[_0x1d3f6f(0x1)](ret);
}
Main(require('fs')['readFileSync'](a0_0x14aa22(0x2), 'utf8'));