'use strict';
const a0_0x5794cc = a0_0xed69;
function a0_0x52a3() {
    const _0x527e74 = [
        'split',
        'map',
        'trim',
        'MtLyC',
        'IjcqW',
        'UvSha',
        'pATkM',
        'log',
        'xZUOu',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x52a3 = function () {
        return _0x527e74;
    };
    return a0_0x52a3();
}
function Main(input) {
    const _0x58a1c1 = a0_0xed69;
    input = input['trim']()[_0x58a1c1(0x0)]('\x0a');
    let WHN = input[0x0]['split']('\x20')[_0x58a1c1(0x1)](Number);
    let minX = 0x0;
    let minY = 0x0;
    let maxX = WHN[0x0];
    let maxY = WHN[0x1];
    const N = WHN[0x2];
    for (let i = 0x1; i <= N; i++) {
        let tmp = input[i][_0x58a1c1(0x2)]()['split']('\x20')['map'](Number);
        let A = tmp[0x2];
        if (A === 0x1) {
            if (_0x58a1c1(0x3) !== _0x58a1c1(0x3)) {
                console['log'](0x0);
            } else {
                if (tmp[0x0] > minX) {
                    minX = tmp[0x0];
                }
            }
        } else if (A === 0x2) {
            if (tmp[0x0] < maxX) {
                if (_0x58a1c1(0x4) === _0x58a1c1(0x4)) {
                    maxX = tmp[0x0];
                } else {
                    minY = tmp[0x1];
                }
            }
        } else if (A === 0x3) {
            if (_0x58a1c1(0x5) === _0x58a1c1(0x5)) {
                if (tmp[0x1] > minY) {
                    minY = tmp[0x1];
                }
            } else {
                if (tmp[0x1] < maxY) {
                    maxY = tmp[0x1];
                }
            }
        } else if (A === 0x4) {
            if (_0x58a1c1(0x6) !== _0x58a1c1(0x6)) {
                console[_0x58a1c1(0x7)](X * Y);
            } else {
                if (tmp[0x1] < maxY) {
                    maxY = tmp[0x1];
                }
            }
        }
    }
    const X = maxX - minX;
    const Y = maxY - minY;
    if (X <= 0x0 || Y <= 0x0) {
        if (_0x58a1c1(0x8) !== _0x58a1c1(0x8)) {
            maxY = tmp[0x1];
        } else {
            console['log'](0x0);
        }
    } else {
        console[_0x58a1c1(0x7)](X * Y);
    }
}
function a0_0xed69(JyKyCR, key) {
    const stringArray = a0_0x52a3();
    a0_0xed69 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xed69(JyKyCR, key);
}
Main(require('fs')['readFileSync'](a0_0x5794cc(0x9), a0_0x5794cc(0xa)));