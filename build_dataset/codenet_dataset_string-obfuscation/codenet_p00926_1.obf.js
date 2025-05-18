var a0_0x53ad14 = a0_0x1417;
(function (stringArrayFunction, comparisonValue) {
    var _0x791b1d = a0_0x1417;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x791b1d(0x184)) / 0x1 + parseInt(_0x791b1d(0x187)) / 0x2 * (-parseInt(_0x791b1d(0x191)) / 0x3) + -parseInt(_0x791b1d(0x18a)) / 0x4 * (parseInt(_0x791b1d(0x183)) / 0x5) + parseInt(_0x791b1d(0x190)) / 0x6 + -parseInt(_0x791b1d(0x18c)) / 0x7 + parseInt(_0x791b1d(0x18f)) / 0x8 * (-parseInt(_0x791b1d(0x188)) / 0x9) + -parseInt(_0x791b1d(0x185)) / 0xa * (-parseInt(_0x791b1d(0x186)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1d07, 0xea618));
var n, m;
var x = [];
function main() {
    n = scan();
    m = scan();
    rep(n, function (i) {
        x[i] = 0x0;
    });
    rep(m, function (i) {
        var c = scan();
        var d = scan();
        x[c] += 0x1;
        x[d] -= 0x1;
    });
    rep(0x1, n, function (i) {
        x[i] += x[i - 0x1];
    });
    var c = 0x0;
    rep(n, function (i) {
        if (x[i] > 0x0) {
            ++c;
        }
    });
    print(c * 0x2 + n + 0x1);
}
function a0_0x1d07() {
    var _0x503127 = [
        '8805CokCmU',
        '362508NsNawQ',
        '59980190oingaQ',
        '11IAqlrr',
        '3463198zNPoBl',
        '351XKagJI',
        'data',
        '4012oSqYJb',
        'reverse',
        '11318363OTpsyx',
        'stdin',
        'pop',
        '119208QUenDm',
        '1772562EEehtc',
        '3VvlMAr',
        'split',
        'setEncoding',
        'trim'
    ];
    a0_0x1d07 = function () {
        return _0x503127;
    };
    return a0_0x1d07();
}
function a0_0x1417(DPxXFr, key) {
    var stringArray = a0_0x1d07();
    a0_0x1417 = function (index, key) {
        index = index - 0x181;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1417(DPxXFr, key);
}
function rep(a, b, c) {
    if (c === undefined) {
        c = b;
        b = a;
        a = 0x0;
    }
    for (var i = a; i < b; ++i) {
        if (c(i) === ![]) {
            break;
        }
    }
}
var input = '';
function scan() {
    var _0x385d12 = a0_0x1417;
    return +input[_0x385d12(0x18e)]();
}
function scan_string() {
    var _0x39720a = a0_0x1417;
    return input[_0x39720a(0x18e)]();
}
function print(val) {
    console['log'](val);
}
process[a0_0x53ad14(0x18d)]['resume']();
process[a0_0x53ad14(0x18d)][a0_0x53ad14(0x181)]('utf8');
process[a0_0x53ad14(0x18d)]['on'](a0_0x53ad14(0x189), function (chunk) {
    input += chunk;
});
process[a0_0x53ad14(0x18d)]['on']('end', function () {
    var _0x4098f0 = a0_0x53ad14;
    input = input[_0x4098f0(0x182)]()[_0x4098f0(0x192)](/\s+/)[_0x4098f0(0x18b)]();
    main();
});