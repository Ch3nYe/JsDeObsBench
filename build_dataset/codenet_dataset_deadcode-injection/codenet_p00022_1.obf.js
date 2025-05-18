var a0_0xb5d1a0 = a0_0x52c1;
function main() {
    while (0x1) {
        if ('KaERF' !== 'fZMxl') {
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
                var _0x389ea6 = a0_0x52c1;
                if (_0x389ea6(0x0) === 'kjfLD') {
                    x[i] += x[i - 0x1];
                } else {
                    for (var j = i; j < n; ++j) {
                        a = Math[_0x389ea6(0x1)](x[j] - x[i - 0x1], a);
                    }
                }
            });
            print(a);
        } else {
            func(i);
        }
    }
}
function a0_0x52c1(wXlTpr, key) {
    var stringArray = a0_0xf7ac();
    a0_0x52c1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x52c1(wXlTpr, key);
}
function rep(n, func) {
    var _0x28f613 = a0_0x52c1;
    for (var i = 0x0; i < n; ++i) {
        if (_0x28f613(0x2) !== _0x28f613(0x2)) {
            return input[input_index++];
        } else {
            func(i);
        }
    }
}
function a0_0xf7ac() {
    var _0xb5a6d2 = [
        'GmSCv',
        'max',
        'WziaH',
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'string',
        'ogZyp',
        'log',
        'data',
        'split'
    ];
    a0_0xf7ac = function () {
        return _0xb5a6d2;
    };
    return a0_0xf7ac();
}
process[a0_0xb5d1a0(0x3)][a0_0xb5d1a0(0x4)]();
process[a0_0xb5d1a0(0x3)][a0_0xb5d1a0(0x5)](a0_0xb5d1a0(0x6));
var input = '';
var input_index = 0x0;
function scan(type) {
    var _0x244588 = a0_0x52c1;
    if (type === _0x244588(0x7)) {
        if ('ogZyp' !== _0x244588(0x8)) {
            for (var j = i; j < n; ++j) {
                a = Math['max'](x[j] - x[i - 0x1], a);
            }
        } else {
            return input[input_index++];
        }
    } else {
        return +input[input_index++];
    }
}
function print(val) {
    var _0x48b1eb = a0_0x52c1;
    console[_0x48b1eb(0x9)](val);
}
process['stdin']['on'](a0_0xb5d1a0(0xa), function (chunk) {
    input += chunk;
});
process[a0_0xb5d1a0(0x3)]['on']('end', function () {
    var _0x588579 = a0_0x52c1;
    input = input[_0x588579(0xb)](/\s+/);
    main();
});