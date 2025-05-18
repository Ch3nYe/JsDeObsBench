const a0_0x197a66 = a0_0x1238;
(function (stringArrayFunction, comparisonValue) {
    const _0x562acc = a0_0x1238;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x562acc(0x1bd)) / 0x1 * (parseInt(_0x562acc(0x1b7)) / 0x2) + -parseInt(_0x562acc(0x1b8)) / 0x3 * (parseInt(_0x562acc(0x1b1)) / 0x4) + parseInt(_0x562acc(0x1bc)) / 0x5 * (parseInt(_0x562acc(0x1bf)) / 0x6) + parseInt(_0x562acc(0x1bb)) / 0x7 * (-parseInt(_0x562acc(0x1ae)) / 0x8) + parseInt(_0x562acc(0x1b3)) / 0x9 + -parseInt(_0x562acc(0x1b0)) / 0xa + -parseInt(_0x562acc(0x1ac)) / 0xb * (-parseInt(_0x562acc(0x1b6)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x127b, 0x71fc4));
function a0_0x1238(TJFAsZ, key) {
    const stringArray = a0_0x127b();
    a0_0x1238 = function (index, key) {
        index = index - 0x1ac;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1238(TJFAsZ, key);
}
function Main(input) {
    const _0x53dc37 = a0_0x1238;
    const inputs = input[_0x53dc37(0x1af)]('\x0a')[_0x53dc37(0x1b4)](v => v);
    const n = Number(inputs[0x0]);
    const strs = inputs[0x1][_0x53dc37(0x1af)]('');
    console[_0x53dc37(0x1b9)](strs[_0x53dc37(0x1be)](function (s) {
        let c = s['charCodeAt']() + n;
        if (c > 0x5a) {
            c -= 0x1a;
        }
        return String['fromCharCode'](c);
    })[_0x53dc37(0x1b5)](''));
}
function a0_0x127b() {
    const _0x3adc43 = [
        '30TcGsmb',
        '5894581FtDUNd',
        '/dev/stdin',
        '190496XQwokN',
        'split',
        '6051100GSXECA',
        '36dDGgIg',
        'utf8',
        '2512971CzqkSw',
        'filter',
        'join',
        '24Qlfmbj',
        '1132ojpklt',
        '47478WNmWRQ',
        'log',
        'readFileSync',
        '35izSmij',
        '838885VGiuQV',
        '1513xZbgJG',
        'map'
    ];
    a0_0x127b = function () {
        return _0x3adc43;
    };
    return a0_0x127b();
}
Main(require('fs')[a0_0x197a66(0x1ba)](a0_0x197a66(0x1ad), a0_0x197a66(0x1b2)));