var a0_0x48be7b = a0_0x52ca;
(function (stringArrayFunction, comparisonValue) {
    var _0x39519f = a0_0x52ca;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x39519f(0x166)) / 0x1 * (parseInt(_0x39519f(0x15a)) / 0x2) + parseInt(_0x39519f(0x15f)) / 0x3 * (-parseInt(_0x39519f(0x164)) / 0x4) + -parseInt(_0x39519f(0x16e)) / 0x5 * (parseInt(_0x39519f(0x167)) / 0x6) + parseInt(_0x39519f(0x161)) / 0x7 * (-parseInt(_0x39519f(0x163)) / 0x8) + -parseInt(_0x39519f(0x15e)) / 0x9 * (-parseInt(_0x39519f(0x159)) / 0xa) + -parseInt(_0x39519f(0x168)) / 0xb * (-parseInt(_0x39519f(0x162)) / 0xc) + parseInt(_0x39519f(0x16c)) / 0xd * (parseInt(_0x39519f(0x16a)) / 0xe);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2e0b, 0xe546a));
config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
function a0_0x2e0b() {
    var _0x2d812a = [
        'log',
        '1MtfIrq',
        '2994gMysnI',
        '1823767QReSgw',
        'ascii',
        '854rnQjxb',
        'trim',
        '665665QJMcyw',
        'shift',
        '11530aqVDxn',
        '4595870aqKrYH',
        '3055678zQFvjs',
        'split',
        'input',
        'readFileSync',
        '18UDSXch',
        '1035sDQXjU',
        'push',
        '10087bMdCIi',
        '36QPijjV',
        '2384Fjypbh',
        '5716juzhdH'
    ];
    a0_0x2e0b = function () {
        return _0x2d812a;
    };
    return a0_0x2e0b();
}
line = require('fs')[a0_0x48be7b(0x15d)](config[a0_0x48be7b(0x15c)], a0_0x48be7b(0x169))[a0_0x48be7b(0x16b)]()[a0_0x48be7b(0x15b)](config['newline']);
n = Number(line['shift']());
adj = {};
for (i in line) {
    ary = line[i][a0_0x48be7b(0x15b)]('\x20');
    j = ary[a0_0x48be7b(0x16d)]();
    ary[a0_0x48be7b(0x16d)]();
    adj[j] = ary;
}
function a0_0x52ca(sCtbRS, key) {
    var stringArray = a0_0x2e0b();
    a0_0x52ca = function (index, key) {
        index = index - 0x159;
        var value = stringArray[index];
        return value;
    };
    return a0_0x52ca(sCtbRS, key);
}
for (i = 0x1; i <= n; i++) {
    ary = [];
    for (j = 0x1; j <= n; j++) {
        if (adj[i]['indexOf'](String(j)) !== -0x1)
            ary[a0_0x48be7b(0x160)](0x1);
        else
            ary['push'](0x0);
    }
    console[a0_0x48be7b(0x165)](ary['join']('\x20'));
}