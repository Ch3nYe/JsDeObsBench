var a0_0x5279fd = a0_0x5f04;
function a0_0x5f04(PNwjyi, key) {
    var stringArray = a0_0x4201();
    a0_0x5f04 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5f04(PNwjyi, key);
}
function Main(input) {
    var _0x365077 = a0_0x5f04;
    input = input['split']('\x0a');
    var s = input[0x0];
    if (s[_0x365077(0x0)](/BW/g)) {
        var l1 = s[_0x365077(0x0)](/BW/g)[_0x365077(0x1)];
    } else {
        l1 = 0x0;
    }
    if (s['match'](/WB/g)) {
        var l2 = s['match'](/WB/g)['length'];
    } else {
        l2 = 0x0;
    }
    console['log']('%s', l1 + l2);
}
Main(require('fs')[a0_0x5279fd(0x2)](a0_0x5279fd(0x3), a0_0x5279fd(0x4)));
function a0_0x4201() {
    var _0x3d00cc = [
        'match',
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4201 = function () {
        return _0x3d00cc;
    };
    return a0_0x4201();
}