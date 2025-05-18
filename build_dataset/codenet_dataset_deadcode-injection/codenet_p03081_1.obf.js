var a0_0x4dfcf5 = a0_0x3a58;
function a0_0x44d7() {
    var _0x2abd3f = [
        'split',
        'push',
        'OhuxP',
        'LpIpF',
        'length',
        'HvleK',
        'AeLkA',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x44d7 = function () {
        return _0x2abd3f;
    };
    return a0_0x44d7();
}
function Main(input) {
    var _0x5d4d37 = a0_0x3a58;
    var ary = [];
    for (var i = 0x0; i < input['split']('\x0a')[0x0][_0x5d4d37(0x0)]('\x20')[0x0]; i++) {
        ary[_0x5d4d37(0x1)](0x1);
    }
    var str = input['split']('\x0a')[0x1];
    for (var i = 0x2; i < input[_0x5d4d37(0x0)]('\x0a')['length']; i++) {
        var jumon = input[_0x5d4d37(0x0)]('\x0a')[i][_0x5d4d37(0x0)]('\x20');
        var newAry = [];
        for (var j = 0x0; j < ary['length']; j++) {
            newAry[_0x5d4d37(0x1)](0x0);
        }
        if (jumon[0x1] == 'L') {
            for (var j = 0x0; j < str['length']; j++) {
                if (_0x5d4d37(0x2) === _0x5d4d37(0x3)) {
                    for (var j = 0x0; j < str[_0x5d4d37(0x4)]; j++) {
                        if (j != ary[_0x5d4d37(0x4)] - 0x1 || str[j] != jumon[0x0])
                            newAry[str[j] == jumon[0x0] ? j + 0x1 : j] += ary[j];
                    }
                } else {
                    if (j != 0x0 || str[j] != jumon[0x0])
                        newAry[str[j] == jumon[0x0] ? j - 0x1 : j] += ary[j];
                }
            }
        } else {
            for (var j = 0x0; j < str['length']; j++) {
                if (_0x5d4d37(0x5) === _0x5d4d37(0x6)) {
                    for (var j = 0x0; j < str['length']; j++) {
                        if (j != 0x0 || str[j] != jumon[0x0])
                            newAry[str[j] == jumon[0x0] ? j - 0x1 : j] += ary[j];
                    }
                } else {
                    if (j != ary[_0x5d4d37(0x4)] - 0x1 || str[j] != jumon[0x0])
                        newAry[str[j] == jumon[0x0] ? j + 0x1 : j] += ary[j];
                }
            }
        }
        ary = newAry['concat']();
    }
    var golems = 0x0;
    for (var i of ary)
        golems += i;
    console[_0x5d4d37(0x7)](golems);
}
function a0_0x3a58(AAxRhK, key) {
    var stringArray = a0_0x44d7();
    a0_0x3a58 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3a58(AAxRhK, key);
}
Main(require('fs')[a0_0x4dfcf5(0x8)](a0_0x4dfcf5(0x9), 'utf8'));