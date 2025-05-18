'use strict';
const a0_0xd9ed28 = a0_0x1df5;
(function (stringArrayFunction, comparisonValue) {
    const _0x2edd45 = a0_0x1df5;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2edd45(0x198)) / 0x1 * (-parseInt(_0x2edd45(0x192)) / 0x2) + parseInt(_0x2edd45(0x199)) / 0x3 * (parseInt(_0x2edd45(0x19a)) / 0x4) + parseInt(_0x2edd45(0x193)) / 0x5 * (parseInt(_0x2edd45(0x197)) / 0x6) + parseInt(_0x2edd45(0x195)) / 0x7 * (-parseInt(_0x2edd45(0x19c)) / 0x8) + -parseInt(_0x2edd45(0x196)) / 0x9 + -parseInt(_0x2edd45(0x19d)) / 0xa + parseInt(_0x2edd45(0x19e)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x27fb, 0x2d24f));
function a0_0x1df5(dqedYc, key) {
    const stringArray = a0_0x27fb();
    a0_0x1df5 = function (index, key) {
        index = index - 0x192;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1df5(dqedYc, key);
}
function a0_0x27fb() {
    const _0x248eb3 = [
        '915852dpUWQM',
        '4oZCfNd',
        'log',
        '139192kUbgYA',
        '3683860BkRneZ',
        '1409551lyNspi',
        '555932HEiYXP',
        '245510yFOoZa',
        'readFileSync',
        '77BTgpev',
        '1026099jLOCeH',
        '18YQPEGU',
        '1AehXKs'
    ];
    a0_0x27fb = function () {
        return _0x248eb3;
    };
    return a0_0x27fb();
}
const main = input => {
    const _0x6b1b54 = a0_0x1df5;
    const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
    const A = parseInt(args[0x0][0x0], 0xa);
    const B = parseInt(args[0x0][0x1], 0xa);
    console[_0x6b1b54(0x19b)](Math['max'](A + B, A - B, A * B) + 0x0);
};
main(require('fs')[a0_0xd9ed28(0x194)]('/dev/stdin', 'utf8'));