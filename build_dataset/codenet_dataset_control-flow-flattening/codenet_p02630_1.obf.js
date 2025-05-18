function main(lines) {
    const WYBqhM = {
        'zXdiG': function (callee, param1) {
            return callee(param1);
        },
        'CsMHE': function (x, y) {
            return x < y;
        }
    };
    const [N] = parseNumberLine(lines[0x0]);
    const numbers = WYBqhM['zXdiG'](parseNumberLine, lines[0x1]);
    const [Q] = parseNumberLine(lines[0x2]);
    const operationLines = lines['slice'](0x3);
    let result = numbers['reduce']((t, v) => t + v, 0x0);
    for (let i = 0x0; i < Q; ++i) {
        const [B, C] = WYBqhM['zXdiG'](parseNumberLine, operationLines[i]);
        while (!![]) {
            const index = numbers['indexOf'](B);
            if (WYBqhM['CsMHE'](index, 0x0))
                break;
            numbers[index] = C;
            result += C - B;
        }
        console['log'](result);
    }
}
function parseNumberLine(line, radix = 0xa) {
    return line['split'](/\s+/)['map'](_ => parseInt(_, radix));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a'));