var a0_0x1eb079 = a0_0x3cf6;
function a0_0x3cf6(RYMKkg, key) {
    var stringArray = a0_0xa8b2();
    a0_0x3cf6 = function (index, key) {
        index = index - 0x1f4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3cf6(RYMKkg, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x235bef = a0_0x3cf6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x235bef(0x204)) / 0x1 + -parseInt(_0x235bef(0x1f5)) / 0x2 * (-parseInt(_0x235bef(0x1f4)) / 0x3) + parseInt(_0x235bef(0x1f9)) / 0x4 * (-parseInt(_0x235bef(0x202)) / 0x5) + -parseInt(_0x235bef(0x1f7)) / 0x6 * (parseInt(_0x235bef(0x1fa)) / 0x7) + -parseInt(_0x235bef(0x1ff)) / 0x8 + parseInt(_0x235bef(0x200)) / 0x9 + parseInt(_0x235bef(0x1fc)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xa8b2, 0xd7698));
function a0_0xa8b2() {
    var _0x54f242 = [
        '/dev/stdin',
        '39618640UYAuPz',
        'log',
        'YYMM',
        '14001224DHTquJ',
        '2622717pJYTAB',
        'MMYY',
        '670NnhHUJ',
        'utf8',
        '475881Fakvbf',
        '3jbpJWk',
        '1264024HuCZvc',
        'readFileSync',
        '6LOpaIv',
        'charAt',
        '7144LTZZva',
        '10763221gaQUfI'
    ];
    a0_0xa8b2 = function () {
        return _0x54f242;
    };
    return a0_0xa8b2();
}
function Main(input) {
    var _0x583b4 = a0_0x3cf6;
    var a = parseInt(input[_0x583b4(0x1f8)](0x0) + input[_0x583b4(0x1f8)](0x1));
    var b = parseInt(input[_0x583b4(0x1f8)](0x2) + input[_0x583b4(0x1f8)](0x3));
    var r = 0x0;
    if (a >= 0xd || a == 0x0) {
        r = 0x1;
    }
    if (b >= 0xd || b == 0x0) {
        r = 0x2;
    }
    if (a >= 0x1 && a <= 0xc && b >= 0x1 && b <= 0xc) {
        r = 0x3;
    }
    if (a >= 0xd && b >= 0xd || a >= 0xd && b == 0x0 || a == 0x0 && b >= 0xd || a == 0x0 && b == 0x0) {
        r = 0x4;
    }
    if (r == 0x1) {
        console['log'](_0x583b4(0x1fe));
    }
    if (r == 0x2) {
        console[_0x583b4(0x1fd)](_0x583b4(0x201));
    }
    if (r == 0x3) {
        console[_0x583b4(0x1fd)]('AMBIGUOUS');
    }
    if (r == 0x4) {
        console['log']('NA');
    }
}
Main(require('fs')[a0_0x1eb079(0x1f6)](a0_0x1eb079(0x1fb), a0_0x1eb079(0x203)));