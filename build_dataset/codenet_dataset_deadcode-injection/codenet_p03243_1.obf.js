var a0_0x297dab = a0_0x595d;
function a0_0x2736() {
    var _0xbc3272 = [
        'length',
        'jsFcm',
        'VpPhX',
        'rpCij',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2736 = function () {
        return _0xbc3272;
    };
    return a0_0x2736();
}
function a0_0x595d(ubWzWh, key) {
    var stringArray = a0_0x2736();
    a0_0x595d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x595d(ubWzWh, key);
}
function myout(text) {
    console['log'](text);
}
function Main(input) {
    var _0x1a17f8 = a0_0x595d;
    input = parseInt(input['trim']());
    var check = [
        0x0,
        0x6f,
        0xde,
        0x14d,
        0x1bc,
        0x22b,
        0x29a,
        0x309,
        0x378,
        0x3e7
    ];
    for (var i = 0x0; i < check[_0x1a17f8(0x0)] - 0x1; i++) {
        if (_0x1a17f8(0x1) !== _0x1a17f8(0x2)) {
            if (check[i] < input && check[i + 0x1] > input) {
                myout(check[i + 0x1]);
                return;
            } else if (check[i] == input) {
                if ('nxOdY' !== _0x1a17f8(0x3)) {
                    myout(check[i]);
                    return;
                } else {
                    myout(check[i + 0x1]);
                    return;
                }
            }
        } else {
            myout(check[i]);
            return;
        }
    }
}
Main(require('fs')['readFileSync'](a0_0x297dab(0x4), a0_0x297dab(0x5)));