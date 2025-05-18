function a0_0xfd5f() {
    const _0x9d620c = [
        'min',
        'reduce',
        'split',
        '1259748rJJUlm',
        '3416038WCpXAF',
        '5735124Azubrm',
        'readFileSync',
        'log',
        'max',
        '464814IKBeOF',
        '1737768BCLoWh',
        '/dev/stdin',
        '85442fkunqb',
        '5haAzaV',
        '2293120mOpSpX',
        '1bMpJFL',
        'trim',
        '608mizYsG'
    ];
    a0_0xfd5f = function () {
        return _0x9d620c;
    };
    return a0_0xfd5f();
}
const a0_0x56c14f = a0_0x4db2;
function a0_0x4db2(bxYDrt, key) {
    const stringArray = a0_0xfd5f();
    a0_0x4db2 = function (index, key) {
        index = index - 0xa9;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4db2(bxYDrt, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x13303c = a0_0x4db2;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x13303c(0xaf)) / 0x1 * (parseInt(_0x13303c(0xb6)) / 0x2) + parseInt(_0x13303c(0xb5)) / 0x3 + parseInt(_0x13303c(0xaa)) / 0x4 + parseInt(_0x13303c(0xad)) / 0x5 * (-parseInt(_0x13303c(0xa9)) / 0x6) + -parseInt(_0x13303c(0xac)) / 0x7 * (-parseInt(_0x13303c(0xb1)) / 0x8) + parseInt(_0x13303c(0xb7)) / 0x9 + parseInt(_0x13303c(0xae)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xfd5f, 0xd2b62));
function main(input) {
    const _0x169bf6 = a0_0x4db2;
    const s = input[_0x169bf6(0xb0)]();
    let array = s[_0x169bf6(0xb4)]('')[_0x169bf6(0xb3)]((a, c) => {
        a[c['charCodeAt']() - 'a'['charCodeAt']()]++;
        return a;
    }, [
        0x0,
        0x0,
        0x0
    ]);
    if (Math[_0x169bf6(0xba)](...array) - Math[_0x169bf6(0xb2)](...array) >= 0x2) {
        console[_0x169bf6(0xb9)]('NO');
    } else {
        console[_0x169bf6(0xb9)]('YES');
    }
}
main(require('fs')[a0_0x56c14f(0xb8)](a0_0x56c14f(0xab), 'utf8'));