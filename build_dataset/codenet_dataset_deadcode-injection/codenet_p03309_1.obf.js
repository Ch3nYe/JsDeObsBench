function myin() {
    var _0x3a65ef = a0_0x3aed;
    return require('fs')[_0x3a65ef(0x0)](_0x3a65ef(0x1), _0x3a65ef(0x2))[_0x3a65ef(0x3)]();
}
function myout(t) {
    console['log'](t);
}
function myconv(i, no) {
    var _0x32463f = a0_0x3aed;
    switch (no) {
    case 0x0:
        return i;
    case 0x1:
        return parseInt(i);
    case 0x2:
        return i[_0x32463f(0x4)]('\x20');
    case 0x3:
        return i['split']('\x0a');
    case 0x4:
        return i[_0x32463f(0x4)]('\x20')[_0x32463f(0x5)](a => Number(a));
    case 0x5:
        return i[_0x32463f(0x4)]('\x0a')[_0x32463f(0x5)](a => Number(a));
    case 0x6:
        return i[_0x32463f(0x4)]('');
    case 0x7:
        return i[_0x32463f(0x4)]('')[_0x32463f(0x5)](a => Number(a));
    }
}
function Main(input) {
    var _0x3c7f87 = a0_0x3aed;
    input = myconv(input, 0x3);
    var N = myconv(input[0x0], 0x1);
    var list = myconv(input[0x1], 0x4);
    var tmpList = [];
    for (var i = 0x0; i < N; i++) {
        tmpList[_0x3c7f87(0x6)](list[i] - (i + 0x1));
    }
    tmpList[_0x3c7f87(0x7)](function (a, b) {
        var _0x17b0ba = a0_0x3aed;
        if (_0x17b0ba(0x8) === _0x17b0ba(0x8)) {
            return a - b;
        } else {
            tmpList[_0x17b0ba(0x6)](list[i] - (i + 0x1));
        }
    });
    var b = tmpList[myconv(tmpList['length'] / 0x2, 0x1)];
    var output = 0x0;
    for (var i = 0x0; i < N; i++) {
        output += Math[_0x3c7f87(0x9)](list[i] - (b + (i + 0x1)));
    }
    myout(output);
}
function a0_0x3aed(LkbHSu, key) {
    var stringArray = a0_0x1a9e();
    a0_0x3aed = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3aed(LkbHSu, key);
}
function a0_0x1a9e() {
    var _0x4fc201 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'push',
        'sort',
        'LIvkr',
        'abs'
    ];
    a0_0x1a9e = function () {
        return _0x4fc201;
    };
    return a0_0x1a9e();
}
Main(myin());