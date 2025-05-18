const a0_0x302f80 = a0_0x461a;
function a0_0x461a(BZjBQI, key) {
    const stringArray = a0_0x425b();
    a0_0x461a = function (index, key) {
        index = index - 0x190;
        let value = stringArray[index];
        return value;
    };
    return a0_0x461a(BZjBQI, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x547752 = a0_0x461a;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x547752(0x192)) / 0x1 * (parseInt(_0x547752(0x197)) / 0x2) + -parseInt(_0x547752(0x196)) / 0x3 * (parseInt(_0x547752(0x19c)) / 0x4) + parseInt(_0x547752(0x199)) / 0x5 + parseInt(_0x547752(0x19a)) / 0x6 * (-parseInt(_0x547752(0x195)) / 0x7) + parseInt(_0x547752(0x1a1)) / 0x8 * (parseInt(_0x547752(0x190)) / 0x9) + parseInt(_0x547752(0x1a0)) / 0xa * (-parseInt(_0x547752(0x19b)) / 0xb) + parseInt(_0x547752(0x198)) / 0xc * (parseInt(_0x547752(0x19e)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x425b, 0x42463));
const input = require('fs')[a0_0x302f80(0x19d)](a0_0x302f80(0x1a2), a0_0x302f80(0x193));
let cin = input[a0_0x302f80(0x194)](/ |\n/), cid = 0x0;
const next = () => cin[cid++];
const nexts = n => cin[a0_0x302f80(0x19f)](cid, cid += n)[a0_0x302f80(0x191)](i => parseInt(i));
const [H1, M1, H2, M2, K] = nexts(0x5);
const time = H2 * 0x3c + M2 - (H1 * 0x3c + M1) - K;
function a0_0x425b() {
    const _0x3b8c47 = [
        '1209803nzCPvN',
        '10359QVMBTa',
        '94YyzDFr',
        '92316tyAnCs',
        '1430475qXBDYY',
        '12oYgZLr',
        '1241383WOlARb',
        '172pENMEx',
        'readFileSync',
        '1443mPdahe',
        'slice',
        '20LFihod',
        '1032dxMQUj',
        '/dev/stdin',
        'log',
        '24822krNLTH',
        'map',
        '10734qyiBFZ',
        'utf8',
        'split'
    ];
    a0_0x425b = function () {
        return _0x3b8c47;
    };
    return a0_0x425b();
}
time > 0x0 ? console[a0_0x302f80(0x1a3)](time) : console[a0_0x302f80(0x1a3)](0x0);