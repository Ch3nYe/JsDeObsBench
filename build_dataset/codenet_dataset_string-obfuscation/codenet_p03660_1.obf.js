var a0_0x144bc0 = a0_0x2215;
(function (stringArrayFunction, comparisonValue) {
    var _0x32fc38 = a0_0x2215;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x32fc38(0x1a5)) / 0x1 * (-parseInt(_0x32fc38(0x1a7)) / 0x2) + parseInt(_0x32fc38(0x1a1)) / 0x3 + -parseInt(_0x32fc38(0x19f)) / 0x4 + -parseInt(_0x32fc38(0x1a4)) / 0x5 + -parseInt(_0x32fc38(0x1a3)) / 0x6 + parseInt(_0x32fc38(0x1a2)) / 0x7 * (-parseInt(_0x32fc38(0x1a0)) / 0x8) + parseInt(_0x32fc38(0x19e)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3cc0, 0x426ad));
function a0_0x3cc0() {
    var _0x4e231d = [
        '1886208uphpxo',
        '336590OjahXW',
        '361797VnagOu',
        '/dev/stdin',
        '2srEmjQ',
        'fill',
        'split',
        'Snuke',
        '12431412pYYoVJ',
        '1739172ArEHFr',
        '18568DMciWR',
        '311604axNlBU',
        '105ntEZhX'
    ];
    a0_0x3cc0 = function () {
        return _0x4e231d;
    };
    return a0_0x3cc0();
}
function Main(input) {
    var _0x24a12f = a0_0x2215;
    input = input[_0x24a12f(0x19c)]('\x0a');
    var n = parseInt(input[0x0]);
    a = new Array(n - 0x1)['fill'](0x0);
    b = new Array(n - 0x1)[_0x24a12f(0x1a8)](0x0);
    for (i = 0x0; i < n - 0x1; i++) {
        tmp = input[i + 0x1][_0x24a12f(0x19c)]('\x20');
        a[i] = parseInt(tmp[0x0]) - 0x1;
        b[i] = parseInt(tmp[0x1]) - 0x1;
    }
    d1 = new Array(n)[_0x24a12f(0x1a8)](n);
    d1[0x0] = 0x0;
    d2 = new Array(n)['fill'](n);
    d2[n - 0x1] = 0x0;
    function f(x, d) {
        for (i = 0x0; i < n - 0x1; i++) {
            if (a[i] == x && d[b[i]] > d[a[i]]) {
                d[b[i]] = d[a[i]] + 0x1;
                var j = i;
                f(b[i], d);
                i = j;
            }
            if (b[i] == x && d[a[i]] > d[b[i]]) {
                d[a[i]] = d[b[i]] + 0x1;
                var j = i;
                f(a[i], d);
                i = j;
            }
        }
        return d;
    }
    d1 = f(0x0, d1);
    d2 = f(n - 0x1, d2);
    var x = 0x0;
    for (i = 0x0; i < n; i++) {
        if (i != 0x0 && i != n - 0x1) {
            if (d1[i] <= d2[i]) {
                x++;
            }
        }
    }
    var ans = 'Fennec';
    if (x <= n - 0x2 - x) {
        ans = _0x24a12f(0x19d);
    }
    console['log']('%s', ans);
}
function a0_0x2215(KxTnDr, key) {
    var stringArray = a0_0x3cc0();
    a0_0x2215 = function (index, key) {
        index = index - 0x19c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2215(KxTnDr, key);
}
Main(require('fs')['readFileSync'](a0_0x144bc0(0x1a6), 'utf8'));