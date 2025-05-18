function a0_0x15eb(PYtDbc, key) {
    var stringArray = a0_0x55f6();
    a0_0x15eb = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x15eb(PYtDbc, key);
}
function a0_0x55f6() {
    var _0x176f7f = [
        'split',
        'AwUPN',
        'fQnhN',
        'push',
        'vazVw',
        'pow',
        'isInteger',
        'sqrt',
        'CMIkF',
        'buXpI',
        'ZGWTX',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x55f6 = function () {
        return _0x176f7f;
    };
    return a0_0x55f6();
}
var a0_0x3bcfc8 = a0_0x15eb;
function main(input) {
    var _0x3dd105 = a0_0x15eb;
    const args = input[_0x3dd105(0x0)]('\x0a');
    const aiueo = args[0x0][_0x3dd105(0x0)]('\x20');
    const N = parseInt(aiueo[0x0], 0xa);
    const D = parseInt(aiueo[0x1], 0xa);
    var arr = [];
    for (var i = 0x0; i < N; i++) {
        if (_0x3dd105(0x1) !== _0x3dd105(0x2)) {
            arr[i] = [];
            var subArgs = args[i + 0x1]['split']('\x20');
            for (var j = 0x0; j < D + 0x1; j++) {
                arr[i][_0x3dd105(0x3)](parseInt(subArgs[j], 0xa));
            }
        } else {
            for (var j = i + 0x1; j < N; j++) {
                if (kyori(arr[i], arr[j]) == !![]) {
                    kakunin++;
                }
            }
        }
    }
    var kakunin = 0x0;
    function kyori(arr1, arr2) {
        var _0x3e1420 = a0_0x15eb;
        var sum = 0x0;
        for (var i = 0x0; i < D; i++) {
            if (_0x3e1420(0x4) !== 'BaDRN') {
                sum = sum + Math[_0x3e1420(0x5)](arr1[i] - arr2[i], 0x2);
            } else {
                arr[i] = [];
                var subArgs = args[i + 0x1][_0x3e1420(0x0)]('\x20');
                for (var j = 0x0; j < D + 0x1; j++) {
                    arr[i][_0x3e1420(0x3)](parseInt(subArgs[j], 0xa));
                }
            }
        }
        if (Number[_0x3e1420(0x6)](Math[_0x3e1420(0x7)](sum)) == !![]) {
            if (_0x3e1420(0x8) !== _0x3e1420(0x8)) {
                return !![];
            } else {
                return !![];
            }
        } else {
            return ![];
        }
    }
    for (var i = 0x0; i < N; i++) {
        if (_0x3dd105(0x9) !== _0x3dd105(0xa)) {
            for (var j = i + 0x1; j < N; j++) {
                if (kyori(arr[i], arr[j]) == !![]) {
                    kakunin++;
                }
            }
        } else {
            return ![];
        }
    }
    console[_0x3dd105(0xb)](kakunin);
}
main(require('fs')[a0_0x3bcfc8(0xc)](a0_0x3bcfc8(0xd), a0_0x3bcfc8(0xe)));