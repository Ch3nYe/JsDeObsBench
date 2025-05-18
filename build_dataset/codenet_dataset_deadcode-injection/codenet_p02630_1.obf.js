function a0_0x4f4e(KkoIlW, key) {
    const stringArray = a0_0x1c8f();
    a0_0x4f4e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4f4e(KkoIlW, key);
}
const a0_0x4e1a76 = a0_0x4f4e;
function main(lines) {
    const _0x9745f9 = a0_0x4f4e;
    const [N] = parseNumberLine(lines[0x0]);
    const numbers = parseNumberLine(lines[0x1]);
    const [Q] = parseNumberLine(lines[0x2]);
    const operationLines = lines[_0x9745f9(0x0)](0x3);
    let result = numbers[_0x9745f9(0x1)]((t, v) => t + v, 0x0);
    for (let i = 0x0; i < Q; ++i) {
        const [B, C] = parseNumberLine(operationLines[i]);
        while (!![]) {
            const index = numbers['indexOf'](B);
            if (index < 0x0)
                break;
            numbers[index] = C;
            result += C - B;
        }
        console[_0x9745f9(0x2)](result);
    }
}
function a0_0x1c8f() {
    const _0x5691f9 = [
        'slice',
        'reduce',
        'log',
        'split',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1c8f = function () {
        return _0x5691f9;
    };
    return a0_0x1c8f();
}
function parseNumberLine(line, radix = 0xa) {
    const _0x1de029 = a0_0x4f4e;
    return line[_0x1de029(0x3)](/\s+/)['map'](_ => parseInt(_, radix));
}
main(require('fs')[a0_0x4e1a76(0x4)](a0_0x4e1a76(0x5), a0_0x4e1a76(0x6))['split']('\x0a'));