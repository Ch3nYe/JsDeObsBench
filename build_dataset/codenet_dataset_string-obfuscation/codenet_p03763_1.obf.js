function a0_0x54ff(lzUPfu, key) {
    var stringArray = a0_0x2771();
    a0_0x54ff = function (index, key) {
        index = index - 0x66;
        var value = stringArray[index];
        return value;
    };
    return a0_0x54ff(lzUPfu, key);
}
function a0_0x2771() {
    var _0x5e06b7 = [
        '281202xXajKp',
        'utf8',
        'readFileSync',
        '1977004MrDVBv',
        '403767oNUbqK',
        '1155500HLOOoj',
        '861573XjeKpx',
        'repeat',
        'abcdefghijklmnopqrstuvwxyz',
        '396eEJgfq',
        '/dev/stdin',
        '7TkqbmP',
        '11177950fkgSOX',
        'findIndex',
        '104KcRcRe',
        '397XAkkhn',
        'forEach',
        'split',
        'fill'
    ];
    a0_0x2771 = function () {
        return _0x5e06b7;
    };
    return a0_0x2771();
}
var a0_0x24ca71 = a0_0x54ff;
(function (stringArrayFunction, comparisonValue) {
    var _0x2a8548 = a0_0x54ff;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2a8548(0x6e)) / 0x1 * (-parseInt(_0x2a8548(0x68)) / 0x2) + -parseInt(_0x2a8548(0x78)) / 0x3 + -parseInt(_0x2a8548(0x75)) / 0x4 + -parseInt(_0x2a8548(0x77)) / 0x5 + -parseInt(_0x2a8548(0x72)) / 0x6 * (parseInt(_0x2a8548(0x6a)) / 0x7) + -parseInt(_0x2a8548(0x6d)) / 0x8 * (-parseInt(_0x2a8548(0x76)) / 0x9) + parseInt(_0x2a8548(0x6b)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2771, 0x89737));
function Main(input) {
    var _0x4813a5 = a0_0x54ff;
    input = input[_0x4813a5(0x70)]('\x0a');
    var S = _0x4813a5(0x67)[_0x4813a5(0x70)]('');
    var array = new Array(0x1a);
    array[_0x4813a5(0x71)](0x0);
    var temp;
    for (var i = 0x1; i < input['length']; i++) {
        temp = new Array(0x1a);
        temp[_0x4813a5(0x71)](0x0);
        for (var j = 0x0; j < input[i]['length']; j++) {
            temp[S[_0x4813a5(0x6c)](e => {
                return e === input[i][j];
            })]++;
        }
        for (var j = 0x0; j < 0x1a; j++) {
            if (array[j] > temp[j] || i === 0x1) {
                array[j] = temp[j];
            }
        }
    }
    var ret = '';
    array[_0x4813a5(0x6f)]((e, i) => {
        var _0x20f549 = _0x4813a5;
        ret += S[i][_0x20f549(0x66)](e);
    });
    console['log'](ret);
}
Main(require('fs')[a0_0x24ca71(0x74)](a0_0x24ca71(0x69), a0_0x24ca71(0x73)));