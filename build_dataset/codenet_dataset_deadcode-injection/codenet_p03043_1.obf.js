var a0_0x5ca8c5 = a0_0x49cb;
function main(input) {
    var _0x3fc8ed = a0_0x49cb;
    input = input[_0x3fc8ed(0x0)]('\x20')[_0x3fc8ed(0x1)](Number);
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
    console[_0x3fc8ed(0x2)](result[_0x3fc8ed(0x3)]()[_0x3fc8ed(0x4)](0x0, 0xe));
}
function a0_0x194a() {
    var _0x30eb98 = [
        'split',
        'map',
        'log',
        'toString',
        'slice',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x194a = function () {
        return _0x30eb98;
    };
    return a0_0x194a();
}
function a0_0x49cb(iMsswp, key) {
    var stringArray = a0_0x194a();
    a0_0x49cb = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x49cb(iMsswp, key);
}
main(require('fs')[a0_0x5ca8c5(0x5)](a0_0x5ca8c5(0x6), 'utf8'));