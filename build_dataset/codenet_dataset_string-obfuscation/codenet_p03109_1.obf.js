function a0_0x5a56() {
    const _0x33ab77 = [
        '5CsLhIF',
        '10wndwrB',
        '2200644VmPQvV',
        '243088eUpunb',
        'stdin',
        '74600DnCBWx',
        '20214036qJVymO',
        '3304432wqFbdW',
        '7xZKtaC',
        'Heisei',
        'line',
        'readline',
        '8CxUySc',
        '11546095GemhOS',
        '5519946jqkkok',
        'push',
        '108JVmkJF',
        'log',
        'stdout',
        'length'
    ];
    a0_0x5a56 = function () {
        return _0x33ab77;
    };
    return a0_0x5a56();
}
const a0_0x491b36 = a0_0x4a7e;
(function (stringArrayFunction, comparisonValue) {
    const _0x5c9b60 = a0_0x4a7e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x5c9b60(0x153)) / 0x1 * (parseInt(_0x5c9b60(0x14a)) / 0x2) + -parseInt(_0x5c9b60(0x157)) / 0x3 * (-parseInt(_0x5c9b60(0x14c)) / 0x4) + -parseInt(_0x5c9b60(0x15b)) / 0x5 * (-parseInt(_0x5c9b60(0x155)) / 0x6) + parseInt(_0x5c9b60(0x14f)) / 0x7 * (-parseInt(_0x5c9b60(0x14e)) / 0x8) + -parseInt(_0x5c9b60(0x149)) / 0x9 + -parseInt(_0x5c9b60(0x15c)) / 0xa * (parseInt(_0x5c9b60(0x154)) / 0xb) + parseInt(_0x5c9b60(0x14d)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5a56, 0x91967));
function a0_0x4a7e(PKRRRC, key) {
    const stringArray = a0_0x5a56();
    a0_0x4a7e = function (index, key) {
        index = index - 0x149;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4a7e(PKRRRC, key);
}
let lines = [];
let reader = require(a0_0x491b36(0x152))['createInterface']({
    'input': process[a0_0x491b36(0x14b)],
    'output': process[a0_0x491b36(0x159)]
});
reader['on'](a0_0x491b36(0x151), function (line) {
    const _0x3fb791 = a0_0x491b36;
    lines[_0x3fb791(0x156)](line);
});
reader['on']('close', function () {
    const _0x71b98e = a0_0x491b36;
    if (lines[_0x71b98e(0x15a)] === 0x1) {
        let date_int = lines[0x0]['replace'](/\//g, '');
        if (date_int <= 0x13414de) {
            console['log'](_0x71b98e(0x150));
            return;
        }
    }
    console[_0x71b98e(0x158)]('TBD');
});