var a0_0xc2ed58 = a0_0x1ac5;
(function (stringArrayFunction, comparisonValue) {
    var _0x5cd1b6 = a0_0x1ac5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5cd1b6(0x13e)) / 0x1 + -parseInt(_0x5cd1b6(0x13c)) / 0x2 + parseInt(_0x5cd1b6(0x148)) / 0x3 * (parseInt(_0x5cd1b6(0x139)) / 0x4) + parseInt(_0x5cd1b6(0x142)) / 0x5 + -parseInt(_0x5cd1b6(0x140)) / 0x6 * (parseInt(_0x5cd1b6(0x144)) / 0x7) + -parseInt(_0x5cd1b6(0x143)) / 0x8 * (-parseInt(_0x5cd1b6(0x13d)) / 0x9) + -parseInt(_0x5cd1b6(0x146)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f28, 0x8ac0a));
var n;
var x = [];
function main() {
    var _0x2f7a12 = a0_0x1ac5;
    while (n = scan()) {
        rep(n, function (i) {
            x[i] = [
                scan(),
                scan()
            ];
        });
        x[_0x2f7a12(0x138)](function (a, b) {
            return a[0x1] - b[0x1];
        });
        var ans = !![];
        var w = 0x0;
        rep(n, function (i) {
            w += x[i][0x0];
            ans = w <= x[i][0x1] && ans;
        });
        print(ans ? _0x2f7a12(0x137) : 'No');
    }
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
process['stdin'][a0_0xc2ed58(0x145)]();
process[a0_0xc2ed58(0x141)][a0_0xc2ed58(0x149)](a0_0xc2ed58(0x13b));
var input = '';
var input_index = 0x0;
function a0_0x2f28() {
    var _0x3f887f = [
        'setEncoding',
        'trim',
        'Yes',
        'sort',
        '31476VDOCgQ',
        'split',
        'utf8',
        '18004STgXyf',
        '1368414jBlEVn',
        '256101DhsxZR',
        'string',
        '641052zQyIyP',
        'stdin',
        '5211920VyqqyT',
        '56yMCyLm',
        '49Gzdhlc',
        'resume',
        '13201480tmFLZt',
        'data',
        '303JEuNgp'
    ];
    a0_0x2f28 = function () {
        return _0x3f887f;
    };
    return a0_0x2f28();
}
function scan(type) {
    var _0x777a7a = a0_0xc2ed58;
    if (type === _0x777a7a(0x13f)) {
        return input[input_index++];
    } else {
        return +input[input_index++];
    }
}
function print(val) {
    console['log'](val);
}
function a0_0x1ac5(FNRcEL, key) {
    var stringArray = a0_0x2f28();
    a0_0x1ac5 = function (index, key) {
        index = index - 0x137;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ac5(FNRcEL, key);
}
process[a0_0xc2ed58(0x141)]['on'](a0_0xc2ed58(0x147), function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var _0x3e0ae9 = a0_0xc2ed58;
    input = input[_0x3e0ae9(0x14a)]()[_0x3e0ae9(0x13a)](/\s+/);
    main();
});