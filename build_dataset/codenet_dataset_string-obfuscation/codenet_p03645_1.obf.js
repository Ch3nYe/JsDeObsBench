var a0_0x4917c6 = a0_0x566f;
(function (stringArrayFunction, comparisonValue) {
    var _0x7ddd59 = a0_0x566f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x7ddd59(0xa5)) / 0x1 * (-parseInt(_0x7ddd59(0xa3)) / 0x2) + parseInt(_0x7ddd59(0xa8)) / 0x3 * (-parseInt(_0x7ddd59(0xab)) / 0x4) + -parseInt(_0x7ddd59(0x9c)) / 0x5 * (parseInt(_0x7ddd59(0xa1)) / 0x6) + -parseInt(_0x7ddd59(0x9f)) / 0x7 * (parseInt(_0x7ddd59(0xac)) / 0x8) + -parseInt(_0x7ddd59(0x9b)) / 0x9 + parseInt(_0x7ddd59(0xa0)) / 0xa * (-parseInt(_0x7ddd59(0x9d)) / 0xb) + parseInt(_0x7ddd59(0x9e)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x241a, 0x623ec));
function Main(input) {
    var _0x33ff6c = a0_0x566f;
    input = input[_0x33ff6c(0xaa)]('\x0a');
    var n = parseInt(input[0x0][_0x33ff6c(0xaa)]('\x20')[0x0]);
    var m = parseInt(input[0x0][_0x33ff6c(0xaa)]('\x20')[0x1]);
    x = new Array();
    var ans = _0x33ff6c(0xae);
    for (i = 0x0; i < m; i++) {
        tmp = input[i + 0x1][_0x33ff6c(0xaa)]('\x20');
        if (tmp[0x0] == 0x1) {
            if (x['indexOf'](tmp[0x1]) != -0x1) {
                ans = 'POSSIBLE';
                break;
            } else {
                x[_0x33ff6c(0xa9)](tmp[0x1]);
            }
        }
        if (tmp[0x1] == n) {
            if (x['indexOf'](tmp[0x0]) != -0x1) {
                ans = _0x33ff6c(0xa6);
                break;
            } else {
                x[_0x33ff6c(0xa9)](tmp[0x0]);
            }
        }
    }
    console['log']('%s', ans);
}
function debug() {
    var _0x49cb40 = a0_0x566f;
    var input = document[_0x49cb40(0xa2)]('input')[_0x49cb40(0xad)];
    Main(input);
}
Main(require('fs')[a0_0x4917c6(0xaf)](a0_0x4917c6(0xa7), a0_0x4917c6(0xa4)));
function a0_0x566f(Uvwrpd, key) {
    var stringArray = a0_0x241a();
    a0_0x566f = function (index, key) {
        index = index - 0x9b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x566f(Uvwrpd, key);
}
function a0_0x241a() {
    var _0xa9a53 = [
        'POSSIBLE',
        '/dev/stdin',
        '3OIeodD',
        'push',
        'split',
        '340028nwqnuS',
        '476104RjvMsP',
        'value',
        'IMPOSSIBLE',
        'readFileSync',
        '7056135TmXsiR',
        '1535VkdqTS',
        '127831tboqcx',
        '35863128knIsJj',
        '28qCktSN',
        '610nnprop',
        '498geuAcr',
        'getElementById',
        '146BLjOCO',
        'utf8',
        '10202kIkXuo'
    ];
    a0_0x241a = function () {
        return _0xa9a53;
    };
    return a0_0x241a();
}