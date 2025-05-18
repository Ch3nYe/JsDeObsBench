function main(lines) {
    const jCNEwv = {
        'bUUgA': function (callee, param1) {
            return callee(param1);
        },
        'RLNjv': function (callee, param1) {
            return callee(param1);
        },
        'fKmEV': function (x, y) {
            return x < y;
        }
    };
    const [N, K] = jCNEwv['bUUgA'](parseNumberLine, lines[0x0]);
    const prices = jCNEwv['RLNjv'](parseNumberLine, lines[0x1])['sort']((a, b) => a - b);
    let total = 0x0;
    for (let i = 0x0; jCNEwv['fKmEV'](i, K); ++i) {
        total += prices[i];
    }
    console['log'](total);
}
function parseNumberLine(line, radix = 0xa) {
    return line['split'](/\s+/)['map'](_ => parseInt(_, radix));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));