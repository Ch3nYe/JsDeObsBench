const a0_0x19fb7f = a0_0x4f61;
function a0_0x4f61(eOBUQS, key) {
    const stringArray = a0_0x1eca();
    a0_0x4f61 = function (index, key) {
        index = index - 0x184;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4f61(eOBUQS, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0xacdf41 = a0_0x4f61;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0xacdf41(0x18e)) / 0x1 + -parseInt(_0xacdf41(0x191)) / 0x2 * (-parseInt(_0xacdf41(0x188)) / 0x3) + -parseInt(_0xacdf41(0x18d)) / 0x4 * (parseInt(_0xacdf41(0x195)) / 0x5) + -parseInt(_0xacdf41(0x189)) / 0x6 + parseInt(_0xacdf41(0x193)) / 0x7 + parseInt(_0xacdf41(0x18b)) / 0x8 + parseInt(_0xacdf41(0x18c)) / 0x9 * (-parseInt(_0xacdf41(0x192)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1eca, 0xf28d5));
function Main(input) {
    const _0x255dd9 = a0_0x4f61;
    input = input[_0x255dd9(0x185)]('\x0a')['map'](v => v[_0x255dd9(0x185)]('\x20'));
    const [n, q] = input[0x0]['map'](v => +v);
    input[_0x255dd9(0x190)]();
    const mod = 0x3b800001;
    const str = new Array(n)[_0x255dd9(0x186)](0x1);
    input[_0x255dd9(0x184)](value => {
        const _0xb4175 = _0x255dd9;
        const [l, r, d] = [
            value[0x0] - 0x1,
            value[0x1] - 0x1,
            +value[0x2]
        ];
        for (let i = l; i <= r; i++) {
            str[i] = d;
        }
        let num = 0x0;
        for (let s = 0x0; s < n; s++) {
            num = (num * 0xa + str[s]) % mod;
        }
        console[_0xb4175(0x18a)](num);
    });
}
function a0_0x1eca() {
    const _0x3e0c1 = [
        '10SzOCjU',
        '10870oMUuGp',
        '6913270rZyqRa',
        'utf8',
        '6595HgUhzT',
        'map',
        'split',
        'fill',
        '/dev/stdin',
        '297003kjYbnt',
        '2450586hoqJHw',
        'log',
        '14018784YVfpMP',
        '7614rMddCn',
        '916tUOCEw',
        '611386dJuZPv',
        'readFileSync',
        'shift'
    ];
    a0_0x1eca = function () {
        return _0x3e0c1;
    };
    return a0_0x1eca();
}
function toInt(v) {
    return parseInt(v, 0xa);
}
Main(require('fs')[a0_0x19fb7f(0x18f)](a0_0x19fb7f(0x187), a0_0x19fb7f(0x194)));