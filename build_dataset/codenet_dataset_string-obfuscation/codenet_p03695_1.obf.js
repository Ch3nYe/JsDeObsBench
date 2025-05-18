var a0_0x1d8723 = a0_0x1fef;
function a0_0x1fef(lOcGGb, key) {
    var stringArray = a0_0x12d0();
    a0_0x1fef = function (index, key) {
        index = index - 0x133;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1fef(lOcGGb, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x222537 = a0_0x1fef;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x222537(0x13e)) / 0x1 + -parseInt(_0x222537(0x147)) / 0x2 * (-parseInt(_0x222537(0x133)) / 0x3) + parseInt(_0x222537(0x144)) / 0x4 + parseInt(_0x222537(0x140)) / 0x5 * (parseInt(_0x222537(0x139)) / 0x6) + parseInt(_0x222537(0x136)) / 0x7 * (parseInt(_0x222537(0x13a)) / 0x8) + parseInt(_0x222537(0x146)) / 0x9 * (parseInt(_0x222537(0x138)) / 0xa) + -parseInt(_0x222537(0x13c)) / 0xb * (parseInt(_0x222537(0x142)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x12d0, 0x7e269));
process[a0_0x1d8723(0x13b)]['resume']();
function a0_0x12d0() {
    var _0x3c359b = [
        '379544Mvayps',
        'log',
        '78297lFcszk',
        'map',
        '74640zTmbth',
        'data',
        '372SJQzzr',
        'setEncoding',
        '165164vxmUXg',
        'min',
        '1466622UVBKCN',
        '2cWijzI',
        '377127xtYaon',
        'fill',
        'end',
        '1638YxSlOQ',
        'split',
        '10hrZJic',
        '72wpouFg',
        '34152ZrpLuf',
        'stdin'
    ];
    a0_0x12d0 = function () {
        return _0x3c359b;
    };
    return a0_0x12d0();
}
process['stdin'][a0_0x1d8723(0x143)]('utf8');
var g_input = '';
process[a0_0x1d8723(0x13b)]['on'](a0_0x1d8723(0x141), function (chunk) {
    g_input += chunk;
});
process[a0_0x1d8723(0x13b)]['on'](a0_0x1d8723(0x135), function () {
    var _0x258dd1 = a0_0x1d8723;
    main(g_input[_0x258dd1(0x137)](/\r?\n/));
});
function main(inputs) {
    var _0x10f746 = a0_0x1d8723;
    var N = parseInt(inputs[0x0]);
    var rs = inputs[0x1]['split']('\x20')[_0x10f746(0x13f)](function (a) {
        return parseInt(a);
    });
    var a = new Array(0x7)[_0x10f746(0x134)](![]);
    var a8 = 0x0;
    var count = 0x0;
    for (var i = 0x0; i < N; i++) {
        for (var j = 0x0; j < 0x9; j++) {
            if (j != 0x8) {
                if (rs[i] < (j + 0x1) * 0x190) {
                    if (!a[j]) {
                        a[j] = !![];
                        count += 0x1;
                    }
                    break;
                }
            } else {
                a8 += 0x1;
            }
        }
    }
    var min = count;
    if (min == 0x0 && N > 0x0) {
        min = 0x1;
        if (a8 > 0x0) {
            a8 -= 0x1;
        }
    }
    var max = Math[_0x10f746(0x145)](0x8, min + a8);
    console[_0x10f746(0x13d)]('' + min + '\x20' + max);
}