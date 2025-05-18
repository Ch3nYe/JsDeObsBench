var a0_0x266456 = a0_0x3fc6;
function Main(input) {
    var _0x155892 = a0_0x3fc6;
    tmp = input[_0x155892(0x0)]('\x20');
    a = 0x0;
    b = 0x0;
    c = 0x0;
    d = 0x0;
    for (var i = 0x0; i < 0x4; i++) {
        if (tmp[i] == '1') {
            if (_0x155892(0x1) === _0x155892(0x2)) {
                console[_0x155892(0x3)]('NO');
            } else {
                a = 0x1;
            }
        }
        if (tmp[i] == '9') {
            if (_0x155892(0x4) !== _0x155892(0x4)) {
                c = 0x1;
            } else {
                b = 0x1;
            }
        }
        if (tmp[i] == '7') {
            if (_0x155892(0x5) === _0x155892(0x5)) {
                c = 0x1;
            } else {
                console['log'](_0x155892(0x6));
            }
        }
        if (tmp[i] == '4') {
            if (_0x155892(0x7) === _0x155892(0x7)) {
                d = 0x1;
            } else {
                a = 0x1;
            }
        }
    }
    if (a == 0x1 && b == 0x1 && c == 0x1 && d == 0x1) {
        console[_0x155892(0x3)](_0x155892(0x6));
    } else {
        if (_0x155892(0x8) !== _0x155892(0x9)) {
            console[_0x155892(0x3)]('NO');
        } else {
            d = 0x1;
        }
    }
}
Main(require('fs')[a0_0x266456(0xa)](a0_0x266456(0xb), 'utf8'));
function a0_0x3fc6(yMiyng, key) {
    var stringArray = a0_0x27a9();
    a0_0x3fc6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3fc6(yMiyng, key);
}
function a0_0x27a9() {
    var _0x18d585 = [
        'split',
        'Cltxl',
        'eIbLQ',
        'log',
        'KEwRK',
        'xUcXD',
        'YES',
        'Vmflv',
        'hDkzK',
        'BtXgX',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x27a9 = function () {
        return _0x18d585;
    };
    return a0_0x27a9();
}