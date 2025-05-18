var a0_0x581994 = a0_0x5b78;
function myout(text) {
    var _0x4fd315 = a0_0x5b78;
    console[_0x4fd315(0x0)](text);
}
function Main(input) {
    var _0x32cb7d = a0_0x5b78;
    input = parseInt(input);
    var output = 0x3b9aca00;
    for (var i = 0x1; i <= 0xa; i++) {
        var tmp = (input * i)[_0x32cb7d(0x1)]()['split']('')[_0x32cb7d(0x2)](a => Number(a));
        var check = 0x0;
        for (var j = 0x0; j < tmp[_0x32cb7d(0x3)]; j++) {
            check += tmp[j];
        }
        output = Math[_0x32cb7d(0x4)](output, check);
    }
    myout(output);
}
function a0_0xaf51() {
    var _0x7e97b6 = [
        'log',
        'toString',
        'map',
        'length',
        'min',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xaf51 = function () {
        return _0x7e97b6;
    };
    return a0_0xaf51();
}
function a0_0x5b78(EhDXXg, key) {
    var stringArray = a0_0xaf51();
    a0_0x5b78 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5b78(EhDXXg, key);
}
Main(require('fs')[a0_0x581994(0x5)](a0_0x581994(0x6), a0_0x581994(0x7))['trim']());