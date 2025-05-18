function main(lines) {
    const HwxlFc = {
        'MzVgR': function (x, y) {
            return x == y;
        },
        'lFizu': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'KVfil': function (callee) {
            return callee();
        },
        'BgmKT': function (callee, param1) {
            return callee(param1);
        },
        'yeHEa': function (x, y) {
            return x + y;
        },
        'Wdlxz': function (x, y) {
            return x <= y;
        },
        'RHXXD': function (callee) {
            return callee();
        }
    };
    const [N, M] = HwxlFc['KVfil'](na);
    const nodes = HwxlFc['BgmKT'](Array, HwxlFc['yeHEa'](N, 0x1))['fill'](0x0)['map'](() => new Set());
    for (let i = 0x1; HwxlFc['Wdlxz'](i, M); i++) {
        const [a, b] = HwxlFc['RHXXD'](na);
        nodes[a]['add'](b);
        nodes[b]['add'](a);
    }
    let ans = 0x0;
    HwxlFc['lFizu'](searchRoute, nodes[0x1], [0x1]);
    function searchRoute(node, passed) {
        if (HwxlFc['MzVgR'](passed['length'], N))
            return ++ans;
        for (let n of node) {
            if (passed['includes'](n))
                continue;
            HwxlFc['lFizu'](searchRoute, nodes[n], passed['concat'](n));
        }
    }
    return ans;
}
const lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
let lineCount = 0x0;
const s = () => lines[lineCount++];
const n = () => Number(s());
const b = () => BigInt(s());
const sa = () => s()['split']('\x20');
const na = () => sa()['map'](Number);
const ba = () => sa()['map'](BigInt);
const ans = main(lines);
console['log'](ans);