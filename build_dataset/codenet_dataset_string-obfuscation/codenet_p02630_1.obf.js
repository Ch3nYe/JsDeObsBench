const a0_0x4082f5 = a0_0x5a07;
function a0_0x5dc1() {
    const _0x822111 = [
        'utf8',
        'map',
        '8979SlTaEh',
        'readFileSync',
        '407nILXBi',
        '6848550UIIDXB',
        '9275497DsvDfC',
        'log',
        'indexOf',
        '/dev/stdin',
        '1120ABdsAJ',
        '500VgOOLL',
        '177630devkdZ',
        '1119920NWpEBE',
        '36AIoOPV',
        '142IFnXmG',
        '6276432tYrjkU',
        'split'
    ];
    a0_0x5dc1 = function () {
        return _0x822111;
    };
    return a0_0x5dc1();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x4d7cc2 = a0_0x5a07;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4d7cc2(0xeb)) / 0x1 * (parseInt(_0x4d7cc2(0xdd)) / 0x2) + parseInt(_0x4d7cc2(0xe2)) / 0x3 * (-parseInt(_0x4d7cc2(0xea)) / 0x4) + -parseInt(_0x4d7cc2(0xda)) / 0x5 * (-parseInt(_0x4d7cc2(0xdc)) / 0x6) + -parseInt(_0x4d7cc2(0xe6)) / 0x7 + -parseInt(_0x4d7cc2(0xde)) / 0x8 + -parseInt(_0x4d7cc2(0xe5)) / 0x9 + parseInt(_0x4d7cc2(0xdb)) / 0xa * (parseInt(_0x4d7cc2(0xe4)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5dc1, 0xa6ee1));
function main(lines) {
    const _0x106cfe = a0_0x5a07;
    const [N] = parseNumberLine(lines[0x0]);
    const numbers = parseNumberLine(lines[0x1]);
    const [Q] = parseNumberLine(lines[0x2]);
    const operationLines = lines['slice'](0x3);
    let result = numbers['reduce']((t, v) => t + v, 0x0);
    for (let i = 0x0; i < Q; ++i) {
        const [B, C] = parseNumberLine(operationLines[i]);
        while (!![]) {
            const index = numbers[_0x106cfe(0xe8)](B);
            if (index < 0x0)
                break;
            numbers[index] = C;
            result += C - B;
        }
        console[_0x106cfe(0xe7)](result);
    }
}
function parseNumberLine(line, radix = 0xa) {
    const _0x37ca04 = a0_0x5a07;
    return line[_0x37ca04(0xdf)](/\s+/)[_0x37ca04(0xe1)](_ => parseInt(_, radix));
}
function a0_0x5a07(vgUALF, key) {
    const stringArray = a0_0x5dc1();
    a0_0x5a07 = function (index, key) {
        index = index - 0xda;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5a07(vgUALF, key);
}
main(require('fs')[a0_0x4082f5(0xe3)](a0_0x4082f5(0xe9), a0_0x4082f5(0xe0))[a0_0x4082f5(0xdf)]('\x0a'));