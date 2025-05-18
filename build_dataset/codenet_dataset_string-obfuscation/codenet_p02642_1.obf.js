var a0_0x5a721f = a0_0x25ce;
(function (stringArrayFunction, comparisonValue) {
    var _0x5dc054 = a0_0x25ce;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5dc054(0x8c)) / 0x1 * (-parseInt(_0x5dc054(0x8e)) / 0x2) + -parseInt(_0x5dc054(0x92)) / 0x3 + -parseInt(_0x5dc054(0x95)) / 0x4 * (-parseInt(_0x5dc054(0x99)) / 0x5) + parseInt(_0x5dc054(0x94)) / 0x6 * (-parseInt(_0x5dc054(0x9b)) / 0x7) + parseInt(_0x5dc054(0x90)) / 0x8 * (-parseInt(_0x5dc054(0x96)) / 0x9) + parseInt(_0x5dc054(0x93)) / 0xa + parseInt(_0x5dc054(0x8d)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x48f2, 0x8e604));
function a0_0x48f2() {
    var _0x2b4485 = [
        'split',
        'fill',
        '430715UyJPHQ',
        'log',
        '14672BaHgfW',
        'readFileSync',
        'utf8',
        'filter',
        '320299nxDynz',
        '20555194VIGvhp',
        '6lZQryP',
        'trim',
        '248OhUjyX',
        'length',
        '2129508UNKrxF',
        '6064610vhVUqG',
        '3054heNzQh',
        '4CBnvIh',
        '337437UNUdQS'
    ];
    a0_0x48f2 = function () {
        return _0x2b4485;
    };
    return a0_0x48f2();
}
function main(input) {
    var _0x5af0d1 = a0_0x25ce;
    var a = input[0x1][_0x5af0d1(0x8f)]()[_0x5af0d1(0x97)]('\x20')['map'](e => parseInt(e, 0xa));
    var a_max = 0xa ** 0x6 + 0x1;
    var dp = new Array(a_max + 0x1)[_0x5af0d1(0x98)](0x0);
    for (var i of a) {
        dp[i]++;
    }
    for (var i = 0x1; i <= a_max; i++) {
        if (dp[i] === 0x0) {
            continue;
        }
        for (var j = i + i; j <= a_max; j += i) {
            if (dp[j] !== 0x0) {
                dp[j] = 0x0;
            }
        }
    }
    console[_0x5af0d1(0x9a)](dp[_0x5af0d1(0x8b)](function (x) {
        return x == 0x1;
    })[_0x5af0d1(0x91)]);
}
function a0_0x25ce(JwSUyt, key) {
    var stringArray = a0_0x48f2();
    a0_0x25ce = function (index, key) {
        index = index - 0x8a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x25ce(JwSUyt, key);
}
main(require('fs')[a0_0x5a721f(0x9c)]('/dev/stdin', a0_0x5a721f(0x8a))[a0_0x5a721f(0x8f)]()[a0_0x5a721f(0x97)]('\x0a'));