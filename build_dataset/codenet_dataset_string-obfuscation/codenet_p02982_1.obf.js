var a0_0x33fc4d = a0_0x1f3b;
(function (stringArrayFunction, comparisonValue) {
    var _0x34157e = a0_0x1f3b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x34157e(0x9b)) / 0x1 + parseInt(_0x34157e(0x93)) / 0x2 + -parseInt(_0x34157e(0x90)) / 0x3 + -parseInt(_0x34157e(0x94)) / 0x4 + parseInt(_0x34157e(0x8e)) / 0x5 + -parseInt(_0x34157e(0x91)) / 0x6 + -parseInt(_0x34157e(0x8f)) / 0x7 * (-parseInt(_0x34157e(0x97)) / 0x8);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x34d5, 0x6f742));
function a0_0x34d5() {
    var _0x2c23e6 = [
        '2002968wPbMXW',
        '3245568tIkIwt',
        'pow',
        '502964PGkDKs',
        '3096900YBYnjf',
        'log',
        'sqrt',
        '6568bNqxdC',
        'split',
        'isInteger',
        '/dev/stdin',
        '571733IjJqwS',
        '280105Mcytjo',
        '23051aDMLDg'
    ];
    a0_0x34d5 = function () {
        return _0x2c23e6;
    };
    return a0_0x34d5();
}
function main(input) {
    var _0x3d44ad = a0_0x1f3b;
    const args = input[_0x3d44ad(0x98)]('\x0a');
    const aiueo = args[0x0][_0x3d44ad(0x98)]('\x20');
    const N = parseInt(aiueo[0x0], 0xa);
    const D = parseInt(aiueo[0x1], 0xa);
    var arr = [];
    for (var i = 0x0; i < N; i++) {
        arr[i] = [];
        var subArgs = args[i + 0x1][_0x3d44ad(0x98)]('\x20');
        for (var j = 0x0; j < D + 0x1; j++) {
            arr[i]['push'](parseInt(subArgs[j], 0xa));
        }
    }
    var kakunin = 0x0;
    function kyori(arr1, arr2) {
        var _0x26b8d4 = _0x3d44ad;
        var sum = 0x0;
        for (var i = 0x0; i < D; i++) {
            sum = sum + Math[_0x26b8d4(0x92)](arr1[i] - arr2[i], 0x2);
        }
        if (Number[_0x26b8d4(0x99)](Math[_0x26b8d4(0x96)](sum)) == !![]) {
            return !![];
        } else {
            return ![];
        }
    }
    for (var i = 0x0; i < N; i++) {
        for (var j = i + 0x1; j < N; j++) {
            if (kyori(arr[i], arr[j]) == !![]) {
                kakunin++;
            }
        }
    }
    console[_0x3d44ad(0x95)](kakunin);
}
function a0_0x1f3b(VGyeJP, key) {
    var stringArray = a0_0x34d5();
    a0_0x1f3b = function (index, key) {
        index = index - 0x8e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1f3b(VGyeJP, key);
}
main(require('fs')['readFileSync'](a0_0x33fc4d(0x9a), 'utf8'));