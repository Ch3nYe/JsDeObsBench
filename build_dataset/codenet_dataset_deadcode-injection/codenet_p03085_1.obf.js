var a0_0xa2265f = a0_0x16ff;
function Main(input) {
    var _0x4a7054 = a0_0x16ff;
    input = input['split']('\x0a');
    input = input[0x0];
    switch (input) {
    case 'A': {
            console[_0x4a7054(0x0)]('T');
            return;
        }
    case 'T': {
            if (_0x4a7054(0x1) === _0x4a7054(0x2)) {
                return;
            } else {
                console[_0x4a7054(0x0)]('A');
                return;
            }
        }
    case 'C': {
            console[_0x4a7054(0x0)]('G');
            return;
        }
    case 'G': {
            console[_0x4a7054(0x0)]('C');
            return;
        }
    default: {
            if (_0x4a7054(0x3) !== _0x4a7054(0x3)) {
                console[_0x4a7054(0x0)]('G');
                return;
            } else {
                return;
            }
        }
    }
}
function a0_0xd819() {
    var _0x2a69ba = [
        'log',
        'byKnA',
        'ePTnf',
        'IMSda',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xd819 = function () {
        return _0x2a69ba;
    };
    return a0_0xd819();
}
function a0_0x16ff(YGIoyO, key) {
    var stringArray = a0_0xd819();
    a0_0x16ff = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x16ff(YGIoyO, key);
}
Main(require('fs')['readFileSync'](a0_0xa2265f(0x4), a0_0xa2265f(0x5)));