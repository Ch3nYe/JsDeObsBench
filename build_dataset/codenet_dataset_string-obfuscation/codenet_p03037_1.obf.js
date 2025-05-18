'use strict';
function a0_0x169e(wSZrry, key) {
    const stringArray = a0_0x11ac();
    a0_0x169e = function (index, key) {
        index = index - 0x121;
        let value = stringArray[index];
        return value;
    };
    return a0_0x169e(wSZrry, key);
}
const a0_0x225051 = a0_0x169e;
(function (stringArrayFunction, comparisonValue) {
    const _0x2827de = a0_0x169e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2827de(0x12b)) / 0x1 * (parseInt(_0x2827de(0x125)) / 0x2) + -parseInt(_0x2827de(0x124)) / 0x3 * (-parseInt(_0x2827de(0x130)) / 0x4) + parseInt(_0x2827de(0x127)) / 0x5 + parseInt(_0x2827de(0x123)) / 0x6 * (-parseInt(_0x2827de(0x132)) / 0x7) + parseInt(_0x2827de(0x12f)) / 0x8 + parseInt(_0x2827de(0x12e)) / 0x9 * (-parseInt(_0x2827de(0x12d)) / 0xa) + -parseInt(_0x2827de(0x131)) / 0xb * (parseInt(_0x2827de(0x122)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x11ac, 0x497ee));
function a0_0x11ac() {
    const _0x172f9b = [
        'fill',
        '83357XPteVC',
        'utf8',
        '10LZQbYz',
        '4067748jYIpWa',
        '598576NGBCSx',
        '12wIheAW',
        '792omqfNj',
        '3731LodnVL',
        'filter',
        'map',
        '/dev/stdin',
        '82644oegOfG',
        '1434bJuRNf',
        '577251GVDySn',
        '10wozjTH',
        'length',
        '1537015owArej',
        'shift',
        'split'
    ];
    a0_0x11ac = function () {
        return _0x172f9b;
    };
    return a0_0x11ac();
}
function main(stdin) {
    const _0x76c733 = a0_0x169e;
    const input = stdin[_0x76c733(0x129)]('\x0a');
    const N = input[_0x76c733(0x128)]()['split']('\x20')[_0x76c733(0x134)](v => parseInt(v, 0xa))[0x0];
    const gates = input[_0x76c733(0x134)](g => g['split']('\x20')['map'](v => parseInt(v, 0xa)));
    const cards = new Array(N)[_0x76c733(0x12a)](!![]);
    gates['forEach'](g => {
        for (let i = 0x0; i < g[0x0] - 0x1; ++i) {
            cards[i] = ![];
        }
        for (let i = g[0x1]; i < N; ++i) {
            cards[i] = ![];
        }
    });
    console['log'](cards[_0x76c733(0x133)](c => c)[_0x76c733(0x126)]);
}
main(require('fs')['readFileSync'](a0_0x225051(0x121), a0_0x225051(0x12c)));