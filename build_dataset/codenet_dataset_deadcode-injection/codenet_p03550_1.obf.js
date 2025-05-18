function a0_0x2227() {
    const _0x34d8ef = [
        'split',
        'shift',
        'abs',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2227 = function () {
        return _0x34d8ef;
    };
    return a0_0x2227();
}
const a0_0x27a06e = a0_0x136e;
function a0_0x136e(VwvzjF, key) {
    const stringArray = a0_0x2227();
    a0_0x136e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x136e(VwvzjF, key);
}
function main(input) {
    const _0x5d7b87 = a0_0x136e;
    const lines = input[_0x5d7b87(0x0)]('\x0a');
    const NZW = lines['shift']()['split']('\x20')['map'](x => parseInt(x));
    const N = NZW[0x0];
    const Z = NZW[0x1];
    const W = NZW[0x2];
    const A = lines[_0x5d7b87(0x1)]()[_0x5d7b87(0x0)]('\x20')['map'](x => parseInt(x));
    const initial = Math[_0x5d7b87(0x2)](Z - W);
    var fetch_n_1 = Math[_0x5d7b87(0x2)](A[N - 0x1] - A[N - 0x2]);
    if (N < 0x2) {
        fetch_n_1 = 0x0;
    }
    const fetch_n = Math['abs'](A[N - 0x1] - W);
    const result = Math['max'](initial, fetch_n_1, fetch_n);
    console['log'](result);
}
main(require('fs')[a0_0x27a06e(0x3)](a0_0x27a06e(0x4), a0_0x27a06e(0x5)));