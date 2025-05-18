var a0_0x3ca3b6 = a0_0x1caa;
function a0_0x1caa(ITdGZU, key) {
    var stringArray = a0_0x3e02();
    a0_0x1caa = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1caa(ITdGZU, key);
}
function Main(s) {
    var _0x1be2db = a0_0x1caa;
    s = s[_0x1be2db(0x0)]('\x0a');
    var k = +s[0x1];
    s = s[0x0];
    var a = 0x60;
    var sl = s['length'];
    var ans = {};
    var j;
    loop:
        while (a <= 0x7a) {
            a++;
            var n = s[_0x1be2db(0x1)](String['fromCharCode'](a));
            while (n !== -0x1) {
                for (j = 0x0; j < k; j++) {
                    if (n + j >= sl)
                        break;
                    ans[s[_0x1be2db(0x2)](n, n + j + 0x1)] = 0x1;
                }
                n = s[_0x1be2db(0x1)](String[_0x1be2db(0x3)](a), n + 0x1);
            }
            j = 0x0;
            var ans2 = [];
            for (i in ans) {
                j++;
                ans2[_0x1be2db(0x4)](i);
            }
            if (j >= k) {
                ans2[_0x1be2db(0x5)]();
                console[_0x1be2db(0x6)](ans2[k - 0x1]);
                break loop;
            }
        }
}
function a0_0x3e02() {
    var _0x9072e8 = [
        'split',
        'indexOf',
        'slice',
        'fromCharCode',
        'push',
        'sort',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x3e02 = function () {
        return _0x9072e8;
    };
    return a0_0x3e02();
}
Main(require('fs')[a0_0x3ca3b6(0x7)]('/dev/stdin', a0_0x3ca3b6(0x8)));