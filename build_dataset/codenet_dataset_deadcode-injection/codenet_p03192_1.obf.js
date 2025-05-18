var a0_0x18bc00 = a0_0x58c0;
function Main(input) {
    var _0x43d40c = a0_0x58c0;
    input = input['split']('\x0a');
    S = input[0x0]['split']('');
    var ans = 0x0;
    for (i = 0x0; i < S[_0x43d40c(0x0)]; i++) {
        if (S[i] == '2') {
            ans++;
        }
    }
    console['log']('%s', ans);
}
function a0_0x508d() {
    var _0x51ca66 = [
        'length',
        'getElementById',
        'input',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x508d = function () {
        return _0x51ca66;
    };
    return a0_0x508d();
}
function a0_0x58c0(okQJtC, key) {
    var stringArray = a0_0x508d();
    a0_0x58c0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x58c0(okQJtC, key);
}
function debug() {
    var _0x2eda65 = a0_0x58c0;
    var input = document[_0x2eda65(0x1)](_0x2eda65(0x2))['value'];
    Main(input);
}
Main(require('fs')[a0_0x18bc00(0x3)](a0_0x18bc00(0x4), a0_0x18bc00(0x5)));