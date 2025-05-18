function a0_0x5d10(qjMkat, key) {
    var stringArray = a0_0x268b();
    a0_0x5d10 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5d10(qjMkat, key);
}
var a0_0x36dc32 = a0_0x5d10;
function Main(input) {
    var _0x5a1903 = a0_0x5d10;
    input = input[_0x5a1903(0x0)]('\x0a');
    inputStr = input[0x0][_0x5a1903(0x0)]('\x20');
    var N = Number['parseInt'](inputStr[0x0]);
    var M = Number['parseInt'](inputStr[0x1]);
    var tmp = [];
    var array = [];
    var buycnt = 0x0;
    var okane = 0x0;
    var mokori = M;
    for (i = 0x0; i < N; i++) {
        tmp = input[i + 0x1][_0x5a1903(0x0)]('\x20');
        array[i] = tmp[_0x5a1903(0x1)](tmp => parseInt(tmp, 0xa));
        array[i][0x0] = (_0x5a1903(0x2) + array[i][0x0])[_0x5a1903(0x3)](-0xa);
    }
    array['sort']();
    for (i = 0x0; i < N; i++) {
        if (mokori > parseInt(array[i][0x1])) {
            okane += parseInt(array[i][0x0]) * parseInt(array[i][0x1]);
            mokori -= parseInt(array[i][0x1]);
        } else {
            okane += parseInt(array[i][0x0]) * mokori;
            break;
        }
    }
    console[_0x5a1903(0x4)](okane);
}
Main(require('fs')[a0_0x36dc32(0x5)](a0_0x36dc32(0x6), a0_0x36dc32(0x7)));
function a0_0x268b() {
    var _0x30bb8d = [
        'split',
        'map',
        '0000000000',
        'substr',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x268b = function () {
        return _0x30bb8d;
    };
    return a0_0x268b();
}