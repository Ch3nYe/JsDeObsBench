'use strict';
const a0_0x2d6409 = a0_0x2df7;
function a0_0x2df7(yckLkA, key) {
    const stringArray = a0_0x37bb();
    a0_0x2df7 = function (index, key) {
        index = index - 0x1d1;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2df7(yckLkA, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x5d7667 = a0_0x2df7;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x5d7667(0x1d3)) / 0x1 * (-parseInt(_0x5d7667(0x1d4)) / 0x2) + parseInt(_0x5d7667(0x1d5)) / 0x3 + -parseInt(_0x5d7667(0x1de)) / 0x4 + parseInt(_0x5d7667(0x1da)) / 0x5 * (parseInt(_0x5d7667(0x1dc)) / 0x6) + -parseInt(_0x5d7667(0x1df)) / 0x7 + parseInt(_0x5d7667(0x1d9)) / 0x8 * (-parseInt(_0x5d7667(0x1dd)) / 0x9) + -parseInt(_0x5d7667(0x1d6)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x37bb, 0x58ea9));
function Main(input) {
    const _0x2ab094 = a0_0x2df7;
    const date = input[_0x2ab094(0x1d8)]('\x0a')[0x0][_0x2ab094(0x1d2)](/^.{4}/, 0x7e2);
    console[_0x2ab094(0x1d7)](date);
}
function a0_0x37bb() {
    const _0x4c008b = [
        '360978vjnubJ',
        '4pvGUsk',
        '1386396lWHclE',
        '4256660CUHwYA',
        'log',
        'split',
        '93144JNxwvj',
        '3011585WooWTk',
        'readFileSync',
        '6gZrABY',
        '243nAFbha',
        '2292620sjMLLw',
        '763154FfZTgz',
        'utf8',
        'replace'
    ];
    a0_0x37bb = function () {
        return _0x4c008b;
    };
    return a0_0x37bb();
}
Main(require('fs')[a0_0x2d6409(0x1db)]('/dev/stdin', a0_0x2d6409(0x1d1)));