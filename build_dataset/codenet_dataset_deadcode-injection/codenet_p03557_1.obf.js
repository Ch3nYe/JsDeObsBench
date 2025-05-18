'use strict';
const a0_0x55c903 = a0_0x1ce1;
function a0_0x1ce1(icPJTA, key) {
    const stringArray = a0_0x5ca0();
    a0_0x1ce1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1ce1(icPJTA, key);
}
function main(input) {
    const _0x147b75 = a0_0x1ce1;
    const lines = input[_0x147b75(0x0)]('\x0a');
    const N = parseInt(lines[_0x147b75(0x1)]());
    const A = lines[_0x147b75(0x1)]()[_0x147b75(0x0)]('\x20')['map'](x => parseInt(x))[_0x147b75(0x2)]((a, b) => a - b);
    const B = lines[_0x147b75(0x1)]()[_0x147b75(0x0)]('\x20')[_0x147b75(0x3)](x => parseInt(x))[_0x147b75(0x2)]((a, b) => a - b);
    const C = lines[_0x147b75(0x1)]()[_0x147b75(0x0)]('\x20')['map'](x => parseInt(x))[_0x147b75(0x2)]((a, b) => a - b);
    let result = 0x0;
    for (let b = 0x0; b < N; b++) {
        let current_b = B[b];
        let count_a = N;
        for (let a = 0x0; a < N; a++) {
            if (current_b <= A[a]) {
                count_a--;
            }
        }
        let count_c = N;
        for (let c = 0x0; c < N; c++) {
            if (current_b >= C[c]) {
                count_c--;
            }
        }
        result += count_a * count_c;
    }
    console[_0x147b75(0x4)](result);
}
main(require('fs')[a0_0x55c903(0x5)](a0_0x55c903(0x6), 'utf8'));
function a0_0x5ca0() {
    const _0x5684a4 = [
        'split',
        'shift',
        'sort',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x5ca0 = function () {
        return _0x5684a4;
    };
    return a0_0x5ca0();
}