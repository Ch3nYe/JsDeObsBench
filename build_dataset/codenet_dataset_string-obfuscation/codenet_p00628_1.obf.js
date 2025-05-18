var a0_0x5b46fc = a0_0x555f;
function a0_0x555f(YsZDdW, key) {
    var stringArray = a0_0x2c91();
    a0_0x555f = function (index, key) {
        index = index - 0x17b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x555f(YsZDdW, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x561056 = a0_0x555f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x561056(0x187)) / 0x1 + parseInt(_0x561056(0x17d)) / 0x2 * (parseInt(_0x561056(0x17c)) / 0x3) + -parseInt(_0x561056(0x188)) / 0x4 * (-parseInt(_0x561056(0x185)) / 0x5) + -parseInt(_0x561056(0x181)) / 0x6 + parseInt(_0x561056(0x184)) / 0x7 * (-parseInt(_0x561056(0x18a)) / 0x8) + parseInt(_0x561056(0x182)) / 0x9 * (-parseInt(_0x561056(0x189)) / 0xa) + -parseInt(_0x561056(0x18c)) / 0xb * (-parseInt(_0x561056(0x17e)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2c91, 0x5cb01));
var input = require('fs')[a0_0x5b46fc(0x183)]('/dev/stdin', a0_0x5b46fc(0x186));
var Arr = input['replace'](/\n$/, '')[a0_0x5b46fc(0x180)]('\x0a');
function a0_0x2c91() {
    var _0xe7f30b = [
        '3jhZUWi',
        '995312azdiPg',
        '1174116ibUfHk',
        'join',
        'split',
        '2693136FmXLiB',
        '3088080pGjOfw',
        'readFileSync',
        '49JkLkZZ',
        '655DfgPyJ',
        'utf8',
        '676981aQdKkC',
        '1832OdaKuJ',
        '10saHCZi',
        '425576FvjPpk',
        'length',
        '187MmPSds',
        'log'
    ];
    a0_0x2c91 = function () {
        return _0xe7f30b;
    };
    return a0_0x2c91();
}
while (!![]) {
    var str = Arr['shift']();
    if (str == 'END\x20OF\x20INPUT')
        break;
    var arr = str[a0_0x5b46fc(0x180)]('\x20');
    arr['forEach'](function (v, i) {
        var _0x311e0e = a0_0x5b46fc;
        arr[i] = v[_0x311e0e(0x18b)];
    });
    console[a0_0x5b46fc(0x17b)](arr[a0_0x5b46fc(0x17f)](''));
}