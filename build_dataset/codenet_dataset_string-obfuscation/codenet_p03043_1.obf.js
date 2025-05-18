function a0_0x4e0f() {
    var _0x10d917 = [
        '350496DMIVMg',
        '368450PelsMv',
        '163912slenST',
        'split',
        '11371984igpBGg',
        'slice',
        '3534828gmVhvo',
        '1031820NNDgaB',
        'log',
        '35LFEYkX',
        'readFileSync',
        'map',
        '3707081yUBrCN',
        'utf8'
    ];
    a0_0x4e0f = function () {
        return _0x10d917;
    };
    return a0_0x4e0f();
}
var a0_0x42447a = a0_0x2fc1;
function a0_0x2fc1(kqRSdM, key) {
    var stringArray = a0_0x4e0f();
    a0_0x2fc1 = function (index, key) {
        index = index - 0x1e8;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2fc1(kqRSdM, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x33d955 = a0_0x2fc1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x33d955(0x1f4)) / 0x1 + -parseInt(_0x33d955(0x1ec)) / 0x2 + -parseInt(_0x33d955(0x1f3)) / 0x3 + -parseInt(_0x33d955(0x1f5)) / 0x4 * (-parseInt(_0x33d955(0x1ee)) / 0x5) + -parseInt(_0x33d955(0x1eb)) / 0x6 + -parseInt(_0x33d955(0x1f1)) / 0x7 + parseInt(_0x33d955(0x1e9)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4e0f, 0x4f6d3));
function main(input) {
    var _0x28a49d = a0_0x2fc1;
    input = input[_0x28a49d(0x1e8)]('\x20')[_0x28a49d(0x1f0)](Number);
    const N = input[0x0];
    const K = input[0x1];
    var result = 0x0;
    for (i = 0x1; i <= N; i++) {
        var tmp = 0x1 / N;
        var now = i;
        while (now < K) {
            now *= 0x2;
            tmp /= 0x2;
        }
        result += tmp;
    }
    console[_0x28a49d(0x1ed)](result['toString']()[_0x28a49d(0x1ea)](0x0, 0xe));
}
main(require('fs')[a0_0x42447a(0x1ef)]('/dev/stdin', a0_0x42447a(0x1f2)));