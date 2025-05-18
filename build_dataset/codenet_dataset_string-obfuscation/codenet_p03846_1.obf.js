var a0_0x2370f8 = a0_0x1f36;
(function (stringArrayFunction, comparisonValue) {
    var _0x5b73e0 = a0_0x1f36;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5b73e0(0x91)) / 0x1 * (-parseInt(_0x5b73e0(0x93)) / 0x2) + -parseInt(_0x5b73e0(0x92)) / 0x3 + parseInt(_0x5b73e0(0x9b)) / 0x4 * (-parseInt(_0x5b73e0(0xa0)) / 0x5) + -parseInt(_0x5b73e0(0x90)) / 0x6 + -parseInt(_0x5b73e0(0x96)) / 0x7 * (-parseInt(_0x5b73e0(0xa3)) / 0x8) + -parseInt(_0x5b73e0(0x94)) / 0x9 * (parseInt(_0x5b73e0(0xa2)) / 0xa) + parseInt(_0x5b73e0(0x9a)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x46c1, 0xb4f58));
function a0_0x46c1() {
    var _0x805531 = [
        '1358DeRfov',
        'split',
        'getElementById',
        'utf8',
        '21186506QLKpCl',
        '376oECuty',
        'pow',
        'readFileSync',
        'length',
        'input',
        '44605wiPhEz',
        '/dev/stdin',
        '70lyVZCn',
        '38120ZlRDNq',
        'value',
        '883176SttUoY',
        '11900sKOHfK',
        '4078911pxvRxW',
        '124wgUCbe',
        '644967TmFUyG',
        'log'
    ];
    a0_0x46c1 = function () {
        return _0x805531;
    };
    return a0_0x46c1();
}
function a0_0x1f36(xJEsoa, key) {
    var stringArray = a0_0x46c1();
    a0_0x1f36 = function (index, key) {
        index = index - 0x90;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1f36(xJEsoa, key);
}
function Main(input) {
    var _0x2e08b2 = a0_0x1f36;
    input = input[_0x2e08b2(0x97)]('\x0a');
    tmp = input[0x1]['split']('\x20');
    var c = Math[_0x2e08b2(0x9c)](parseInt(tmp[_0x2e08b2(0x9e)] / 0x2), 0x2);
    var d = 0x0;
    for (j = tmp[_0x2e08b2(0x9e)] - 0x1; j >= 0x0; j--) {
        for (i = 0x0; i < tmp['length']; i++) {
            if (tmp[i] == j) {
                d++;
            }
        }
        if (d != 0x2 && j > 0x0) {
            c = 0x0;
            break;
        }
        if (d != 0x1 && j == 0x0) {
            c = 0x0;
            break;
        }
        d = 0x0;
        j--;
    }
    c = c % (Math[_0x2e08b2(0x9c)](0xa, 0x9) + 0x7);
    console[_0x2e08b2(0x95)]('%s', c);
}
function debug() {
    var _0xf440a4 = a0_0x1f36;
    var input = document[_0xf440a4(0x98)](_0xf440a4(0x9f))[_0xf440a4(0xa4)];
    Main(input);
}
Main(require('fs')[a0_0x2370f8(0x9d)](a0_0x2370f8(0xa1), a0_0x2370f8(0x99)));