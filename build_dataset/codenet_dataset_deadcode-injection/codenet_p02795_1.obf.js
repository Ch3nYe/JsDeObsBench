'use strict';
const a0_0x469f07 = a0_0xe718;
function a0_0x362e() {
    const _0x5aa422 = [
        'trim',
        'split',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x362e = function () {
        return _0x5aa422;
    };
    return a0_0x362e();
}
function a0_0xe718(BuzbqB, key) {
    const stringArray = a0_0x362e();
    a0_0xe718 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xe718(BuzbqB, key);
}
const main = arg => {
    const _0x5f3662 = a0_0xe718;
    const input = arg[_0x5f3662(0x0)]()[_0x5f3662(0x1)]('\x0a');
    let H = Number(input[0x0][_0x5f3662(0x1)]('\x20'));
    let W = Number(input[0x1][_0x5f3662(0x1)]('\x20'));
    let N = Number(input[0x2][_0x5f3662(0x1)]('\x20'));
    let paintedRow = 0x0;
    let paintedColumn = 0x0;
    let paintedCell = 0x0;
    while (0x1) {
        if (W >= H) {
            paintedCell += W - paintedColumn;
            paintedRow++;
        } else {
            paintedCell += H - paintedRow;
            paintedColumn++;
        }
        if (paintedCell >= N)
            break;
    }
    console[_0x5f3662(0x2)](paintedColumn + paintedRow);
};
main(require('fs')['readFileSync'](a0_0x469f07(0x3), a0_0x469f07(0x4)));