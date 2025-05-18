var a0_0x377f04 = a0_0x5648;
function a0_0x5648(YpswaY, key) {
    var stringArray = a0_0x2bea();
    a0_0x5648 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5648(YpswaY, key);
}
function Main(input) {
    var _0x5477e3 = a0_0x5648;
    var N = input['split']('\x20')[0x0];
    var K = input[_0x5477e3(0x0)]('\x20')[0x1];
    N = parseInt(N, 0xa);
    K = parseInt(K, 0xa);
    var jud = N % K === 0x0;
    if (jud) {
        console[_0x5477e3(0x1)](0x0);
    } else {
        console[_0x5477e3(0x1)](0x1);
    }
}
Main(require('fs')['readFileSync'](a0_0x377f04(0x2), a0_0x377f04(0x3)));
function a0_0x2bea() {
    var _0x1c4b4a = [
        'split',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2bea = function () {
        return _0x1c4b4a;
    };
    return a0_0x2bea();
}