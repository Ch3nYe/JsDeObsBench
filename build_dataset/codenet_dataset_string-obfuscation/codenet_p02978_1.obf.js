function a0_0x17c2(aRylai, key) {
    var stringArray = a0_0x1d56();
    a0_0x17c2 = function (index, key) {
        index = index - 0x77;
        var value = stringArray[index];
        return value;
    };
    return a0_0x17c2(aRylai, key);
}
var a0_0x59a28c = a0_0x17c2;
function a0_0x1d56() {
    var _0x249d15 = [
        'length',
        'utf8',
        '8000368VWdaqR',
        'split',
        'log',
        '/dev/stdin',
        '1511290xTlWbR',
        '4293RKlvpC',
        'push',
        '58yhUkns',
        '8068IWKnaU',
        '4tZNkuz',
        '3881568jSqYhk',
        '121nuySzx',
        '594595yHOjyE',
        '2663457IiHABB',
        '7rKIyZn'
    ];
    a0_0x1d56 = function () {
        return _0x249d15;
    };
    return a0_0x1d56();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x432eac = a0_0x17c2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x432eac(0x7e)) / 0x1 * (-parseInt(_0x432eac(0x7f)) / 0x2) + parseInt(_0x432eac(0x84)) / 0x3 * (-parseInt(_0x432eac(0x80)) / 0x4) + -parseInt(_0x432eac(0x83)) / 0x5 + -parseInt(_0x432eac(0x81)) / 0x6 * (-parseInt(_0x432eac(0x85)) / 0x7) + -parseInt(_0x432eac(0x77)) / 0x8 + parseInt(_0x432eac(0x7c)) / 0x9 + parseInt(_0x432eac(0x7b)) / 0xa * (parseInt(_0x432eac(0x82)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1d56, 0x831b4));
function Main(input) {
    var _0x2f2cfe = a0_0x17c2;
    input = input['split']('\x0a');
    const N = parseInt(input[0x0]);
    const As = input[0x1][_0x2f2cfe(0x78)]('\x20')['map'](x => parseInt(x));
    var now = As;
    while (!![]) {
        var min = -0x1;
        var next = [];
        for (i = 0x1; i < now['length'] - 0x1; i++) {
            if (min == -0x1 || now[min] > now[i])
                min = i;
            if (min == now[i] && now[i - 0x1] + now[i + 0x1] < now[min - 0x1] + now[min + 0x1])
                min = i;
        }
        if (now[min] * 0x2 > now[now[_0x2f2cfe(0x86)] - 0x2])
            min = now[_0x2f2cfe(0x86)] - 0x2;
        for (i = 0x0; i < now[_0x2f2cfe(0x86)]; i++) {
            if (i == min - 0x1) {
                next[_0x2f2cfe(0x7d)](now[min - 0x1] + now[min]);
            } else if (i == min) {
            } else if (i == min + 0x1) {
                next['push'](now[min + 0x1] + now[min]);
            } else {
                next[_0x2f2cfe(0x7d)](now[i]);
            }
        }
        now = next;
        if (now[_0x2f2cfe(0x86)] == 0x2)
            break;
    }
    console[_0x2f2cfe(0x79)](now[0x0] + now[0x1]);
}
Main(require('fs')['readFileSync'](a0_0x59a28c(0x7a), a0_0x59a28c(0x87)));