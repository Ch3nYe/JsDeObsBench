function a0_0x23ba(NECirx, key) {
    var stringArray = a0_0x3724();
    a0_0x23ba = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x23ba(NECirx, key);
}
function a0_0x3724() {
    var _0x4ec69d = [
        'map',
        'log',
        'Yes',
        'readFileSync'
    ];
    a0_0x3724 = function () {
        return _0x4ec69d;
    };
    return a0_0x3724();
}
var a0_0x5cc0b9 = a0_0x23ba;
function Main(input) {
    var _0x1d666d = a0_0x23ba;
    var str = input;
    var tmp = str['split']('\x20')[_0x1d666d(0x0)](Number);
    if (tmp[0x0] == tmp[0x1] && tmp[0x1] == tmp[0x2]) {
        console[_0x1d666d(0x1)](_0x1d666d(0x2));
    } else {
        console[_0x1d666d(0x1)]('No');
    }
}
Main(require('fs')[a0_0x5cc0b9(0x3)]('/dev/stdin', 'utf8'));