var a0_0x17d72c = a0_0x3438;
function Main(input) {
    var _0x6fde39 = a0_0x3438;
    input = input['split']('\x0a');
    var n = parseInt(input[0x0]['split']('\x20')[0x0]);
    var m = parseInt(input[0x0][_0x6fde39(0x0)]('\x20')[0x1]);
    x = new Array();
    var ans = 'IMPOSSIBLE';
    for (i = 0x0; i < m; i++) {
        tmp = input[i + 0x1]['split']('\x20');
        if (tmp[0x0] == 0x1) {
            if (x[_0x6fde39(0x1)](tmp[0x1]) != -0x1) {
                ans = _0x6fde39(0x2);
                break;
            } else {
                x[_0x6fde39(0x3)](tmp[0x1]);
            }
        }
        if (tmp[0x1] == n) {
            if (x[_0x6fde39(0x1)](tmp[0x0]) != -0x1) {
                ans = _0x6fde39(0x2);
                break;
            } else {
                x['push'](tmp[0x0]);
            }
        }
    }
    console[_0x6fde39(0x4)]('%s', ans);
}
function debug() {
    var _0x4ccf6c = a0_0x3438;
    var input = document[_0x4ccf6c(0x5)](_0x4ccf6c(0x6))[_0x4ccf6c(0x7)];
    Main(input);
}
function a0_0x3438(KLxYqB, key) {
    var stringArray = a0_0x218c();
    a0_0x3438 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3438(KLxYqB, key);
}
function a0_0x218c() {
    var _0x35442d = [
        'split',
        'indexOf',
        'POSSIBLE',
        'push',
        'log',
        'getElementById',
        'input',
        'value',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x218c = function () {
        return _0x35442d;
    };
    return a0_0x218c();
}
Main(require('fs')['readFileSync'](a0_0x17d72c(0x8), a0_0x17d72c(0x9)));