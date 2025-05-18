var a0_0x4fc31d = a0_0x249f;
function a0_0x1caf() {
    var _0x2a3102 = [
        'log',
        'length',
        '/dev/stdin',
        '1540105DywDNa',
        'readFileSync',
        'sort',
        '32658KKzgAJ',
        'indexOf',
        'push',
        '8cZOvwD',
        '2713167YjHJXZ',
        'split',
        '385463cEiTXo',
        '4079684OSKubi',
        'fromCharCode',
        '839280UtzElC',
        'utf8',
        'slice',
        '312cSGqrA',
        '1338510gKqPHg',
        '2wIzLit'
    ];
    a0_0x1caf = function () {
        return _0x2a3102;
    };
    return a0_0x1caf();
}
function a0_0x249f(qiacdE, key) {
    var stringArray = a0_0x1caf();
    a0_0x249f = function (index, key) {
        index = index - 0x1ed;
        var value = stringArray[index];
        return value;
    };
    return a0_0x249f(qiacdE, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x3f9c49 = a0_0x249f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3f9c49(0x1f6)) / 0x1 * (-parseInt(_0x3f9c49(0x1fe)) / 0x2) + -parseInt(_0x3f9c49(0x1f0)) / 0x3 * (-parseInt(_0x3f9c49(0x1fc)) / 0x4) + -parseInt(_0x3f9c49(0x1ed)) / 0x5 + -parseInt(_0x3f9c49(0x1fd)) / 0x6 + -parseInt(_0x3f9c49(0x1f7)) / 0x7 + -parseInt(_0x3f9c49(0x1f3)) / 0x8 * (-parseInt(_0x3f9c49(0x1f4)) / 0x9) + parseInt(_0x3f9c49(0x1f9)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1caf, 0x7b8bc));
function Main(s) {
    var _0x4c375c = a0_0x249f;
    s = s[_0x4c375c(0x1f5)]('\x0a');
    var k = +s[0x1];
    s = s[0x0];
    var a = 0x60;
    var sl = s[_0x4c375c(0x200)];
    var ans = {};
    var j;
    loop:
        while (a <= 0x7a) {
            a++;
            var n = s[_0x4c375c(0x1f1)](String[_0x4c375c(0x1f8)](a));
            while (n !== -0x1) {
                for (j = 0x0; j < k; j++) {
                    if (n + j >= sl)
                        break;
                    ans[s[_0x4c375c(0x1fb)](n, n + j + 0x1)] = 0x1;
                }
                n = s['indexOf'](String[_0x4c375c(0x1f8)](a), n + 0x1);
            }
            j = 0x0;
            var ans2 = [];
            for (i in ans) {
                j++;
                ans2[_0x4c375c(0x1f2)](i);
            }
            if (j >= k) {
                ans2[_0x4c375c(0x1ef)]();
                console[_0x4c375c(0x1ff)](ans2[k - 0x1]);
                break loop;
            }
        }
}
Main(require('fs')[a0_0x4fc31d(0x1ee)](a0_0x4fc31d(0x201), a0_0x4fc31d(0x1fa)));