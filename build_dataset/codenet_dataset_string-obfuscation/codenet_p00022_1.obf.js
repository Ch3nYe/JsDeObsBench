var a0_0x3cbf4c = a0_0x4826;
(function (stringArrayFunction, comparisonValue) {
    var _0x2436a5 = a0_0x4826;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2436a5(0x17f)) / 0x1 * (-parseInt(_0x2436a5(0x173)) / 0x2) + parseInt(_0x2436a5(0x17b)) / 0x3 + -parseInt(_0x2436a5(0x17a)) / 0x4 * (parseInt(_0x2436a5(0x17c)) / 0x5) + parseInt(_0x2436a5(0x17d)) / 0x6 + -parseInt(_0x2436a5(0x177)) / 0x7 + parseInt(_0x2436a5(0x180)) / 0x8 + parseInt(_0x2436a5(0x16f)) / 0x9 * (parseInt(_0x2436a5(0x16e)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x772b, 0xc9b15));
function main() {
    while (0x1) {
        var n = scan();
        if (n == 0x0) {
            break;
        }
        var x = Array(n);
        rep(n, function (i) {
            x[i] = scan();
        });
        x[-0x1] = 0x0;
        rep(n, function (i) {
            x[i] += x[i - 0x1];
        });
        var a = -Infinity;
        rep(n, function (i) {
            var _0x592bb3 = a0_0x4826;
            for (var j = i; j < n; ++j) {
                a = Math[_0x592bb3(0x174)](x[j] - x[i - 0x1], a);
            }
        });
        print(a);
    }
}
function rep(n, func) {
    for (var i = 0x0; i < n; ++i) {
        func(i);
    }
}
process[a0_0x3cbf4c(0x179)][a0_0x3cbf4c(0x171)]();
process[a0_0x3cbf4c(0x179)][a0_0x3cbf4c(0x172)](a0_0x3cbf4c(0x16d));
var input = '';
function a0_0x4826(PfPgHu, key) {
    var stringArray = a0_0x772b();
    a0_0x4826 = function (index, key) {
        index = index - 0x16d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4826(PfPgHu, key);
}
var input_index = 0x0;
function scan(type) {
    var _0x4d0c55 = a0_0x3cbf4c;
    if (type === _0x4d0c55(0x178)) {
        return input[input_index++];
    } else {
        return +input[input_index++];
    }
}
function print(val) {
    var _0x9baac1 = a0_0x3cbf4c;
    console[_0x9baac1(0x176)](val);
}
function a0_0x772b() {
    var _0x54a4bf = [
        '13836EXlYyN',
        'split',
        '233qaHXmH',
        '12430128lNiWkP',
        'utf8',
        '10pStgZc',
        '2300382tSiAzG',
        'end',
        'resume',
        'setEncoding',
        '1160juMOeu',
        'max',
        'data',
        'log',
        '10834824IuLocr',
        'string',
        'stdin',
        '45196jBbQXH',
        '3075318DPOVux',
        '145KpDrXV'
    ];
    a0_0x772b = function () {
        return _0x54a4bf;
    };
    return a0_0x772b();
}
process['stdin']['on'](a0_0x3cbf4c(0x175), function (chunk) {
    input += chunk;
});
process['stdin']['on'](a0_0x3cbf4c(0x170), function () {
    var _0x19a00b = a0_0x3cbf4c;
    input = input[_0x19a00b(0x17e)](/\s+/);
    main();
});