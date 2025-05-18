function a0_0x2b2e(mmHogA, key) {
    const stringArray = a0_0x5c40();
    a0_0x2b2e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2b2e(mmHogA, key);
}
function a0_0x5c40() {
    const _0x6ca2de = [
        'utf8',
        'split',
        'shift',
        'map',
        'length',
        'abs',
        'push',
        'sort',
        'log'
    ];
    a0_0x5c40 = function () {
        return _0x6ca2de;
    };
    return a0_0x5c40();
}
const a0_0x470f72 = a0_0x2b2e;
const input = require('fs')['readFileSync']('/dev/stdin', a0_0x470f72(0x0));
const lines = input['trim']()[a0_0x470f72(0x1)]('\x0a');
while (line = lines[a0_0x470f72(0x2)]()) {
    const numbers = line['split']('\x20')[a0_0x470f72(0x3)](Number);
    if (numbers[a0_0x470f72(0x4)] > 0x1) {
        const diffList = [];
        numbers[a0_0x470f72(0x3)]((num1, ind1) => {
            const _0x1d7b8d = a0_0x2b2e;
            numbers[_0x1d7b8d(0x3)]((num2, ind2) => {
                const _0x38e3b4 = a0_0x2b2e;
                if (ind1 !== ind2) {
                    const diff = Math[_0x38e3b4(0x5)](num1 - num2);
                    const pair = num1 + '\x20' + num2;
                    diffList[_0x38e3b4(0x6)]([
                        pair,
                        diff
                    ]);
                }
            });
        });
        const sorted = diffList[a0_0x470f72(0x7)]((p1, p2) => p1[0x1] - p2[0x1])[0x0];
        console[a0_0x470f72(0x8)](sorted[0x1]);
    }
}