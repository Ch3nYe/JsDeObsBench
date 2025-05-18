'use strict';
const a0_0x18ac40 = a0_0x2950;
(function (stringArrayFunction, comparisonValue) {
    const _0x35b1d0 = a0_0x2950;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x35b1d0(0xd9)) / 0x1 + parseInt(_0x35b1d0(0xd5)) / 0x2 * (-parseInt(_0x35b1d0(0xdf)) / 0x3) + parseInt(_0x35b1d0(0xd3)) / 0x4 * (-parseInt(_0x35b1d0(0xcf)) / 0x5) + parseInt(_0x35b1d0(0xde)) / 0x6 * (-parseInt(_0x35b1d0(0xd6)) / 0x7) + parseInt(_0x35b1d0(0xd7)) / 0x8 * (-parseInt(_0x35b1d0(0xdd)) / 0x9) + parseInt(_0x35b1d0(0xda)) / 0xa + -parseInt(_0x35b1d0(0xdc)) / 0xb * (-parseInt(_0x35b1d0(0xd4)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x7c47, 0x9c355));
function a0_0x2950(SJKcdi, key) {
    const stringArray = a0_0x7c47();
    a0_0x2950 = function (index, key) {
        index = index - 0xcf;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2950(SJKcdi, key);
}
function Main(input) {
    const _0x17f508 = a0_0x2950;
    input = input[_0x17f508(0xd8)]()[_0x17f508(0xdb)]('\x0a');
    let WHN = input[0x0][_0x17f508(0xdb)]('\x20')[_0x17f508(0xe1)](Number);
    let minX = 0x0;
    let minY = 0x0;
    let maxX = WHN[0x0];
    let maxY = WHN[0x1];
    const N = WHN[0x2];
    for (let i = 0x1; i <= N; i++) {
        let tmp = input[i]['trim']()[_0x17f508(0xdb)]('\x20')[_0x17f508(0xe1)](Number);
        let A = tmp[0x2];
        if (A === 0x1) {
            if (tmp[0x0] > minX) {
                minX = tmp[0x0];
            }
        } else if (A === 0x2) {
            if (tmp[0x0] < maxX) {
                maxX = tmp[0x0];
            }
        } else if (A === 0x3) {
            if (tmp[0x1] > minY) {
                minY = tmp[0x1];
            }
        } else if (A === 0x4) {
            if (tmp[0x1] < maxY) {
                maxY = tmp[0x1];
            }
        }
    }
    const X = maxX - minX;
    const Y = maxY - minY;
    if (X <= 0x0 || Y <= 0x0) {
        console['log'](0x0);
    } else {
        console[_0x17f508(0xd0)](X * Y);
    }
}
Main(require('fs')[a0_0x18ac40(0xe0)](a0_0x18ac40(0xd1), a0_0x18ac40(0xd2)));
function a0_0x7c47() {
    const _0x271685 = [
        '11143790omYVCU',
        'split',
        '21483GKAYQN',
        '54CghDZA',
        '3410076VCNwEq',
        '3ILEcwA',
        'readFileSync',
        'map',
        '5GzSlwJ',
        'log',
        '/dev/stdin',
        'utf8',
        '1069436oLJbqk',
        '17412FldftG',
        '1962154eoTXjd',
        '7sKjEwN',
        '308536yitpvM',
        'trim',
        '1260169LxgdIT'
    ];
    a0_0x7c47 = function () {
        return _0x271685;
    };
    return a0_0x7c47();
}