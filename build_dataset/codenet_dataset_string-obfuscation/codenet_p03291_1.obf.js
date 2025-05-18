var a0_0x537966 = a0_0x5932;
(function (stringArrayFunction, comparisonValue) {
    var _0x472044 = a0_0x5932;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x472044(0x6c)) / 0x1 + -parseInt(_0x472044(0x6e)) / 0x2 * (parseInt(_0x472044(0x67)) / 0x3) + -parseInt(_0x472044(0x73)) / 0x4 * (parseInt(_0x472044(0x77)) / 0x5) + -parseInt(_0x472044(0x70)) / 0x6 * (-parseInt(_0x472044(0x65)) / 0x7) + -parseInt(_0x472044(0x6b)) / 0x8 * (parseInt(_0x472044(0x6f)) / 0x9) + -parseInt(_0x472044(0x68)) / 0xa + parseInt(_0x472044(0x74)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x10d8, 0x55c86));
var line;
function a0_0x10d8() {
    var _0x13fc4b = [
        'readline',
        '395fudfeo',
        'stdin',
        'split',
        '1843961XiYZXV',
        'close',
        '3XSEUxb',
        '5675110daAYvE',
        'log',
        'line',
        '1742816sFOMtz',
        '300201uBBFJO',
        'fill',
        '342466NsgeSg',
        '18ZTLSpk',
        '6wZaGEJ',
        'length',
        'pow',
        '34372qTWjka',
        '24655829mmucUu',
        'ABC'
    ];
    a0_0x10d8 = function () {
        return _0x13fc4b;
    };
    return a0_0x10d8();
}
var S;
var MOD = Math[a0_0x537966(0x72)](0xa, 0x9) + 0x7;
function a0_0x5932(LQnEIf, key) {
    var stringArray = a0_0x10d8();
    a0_0x5932 = function (index, key) {
        index = index - 0x64;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5932(LQnEIf, key);
}
var readline = require(a0_0x537966(0x76));
var rl = readline['createInterface']({
    'input': process[a0_0x537966(0x78)],
    'output': process['stdout']
});
rl['on'](a0_0x537966(0x6a), function (x) {
    line = x;
});
rl['on'](a0_0x537966(0x66), function () {
    var _0x2a779c = a0_0x537966;
    S = line[_0x2a779c(0x64)]('');
    dp = Array(S[_0x2a779c(0x71)] + 0x1);
    for (var i = 0x0; i <= S['length']; i++) {
        dp[i] = Array(0x3 + 0x1)[_0x2a779c(0x6d)](0x0);
    }
    for (var i = S[_0x2a779c(0x71)]; i >= 0x0; i--) {
        for (var j = 0x3; j >= 0x0; j--) {
            if (i === S[_0x2a779c(0x71)]) {
                dp[i][j] = j === 0x3 ? 0x1 : 0x0;
            } else {
                dp[i][j] = dp[i + 0x1][j] * (S[i] === '?' ? 0x3 : 0x1);
                if (j < 0x3 && (S[i] === '?' || S[i] === _0x2a779c(0x75)[j])) {
                    dp[i][j] += dp[i + 0x1][j + 0x1];
                }
                dp[i][j] %= MOD;
            }
        }
    }
    console[_0x2a779c(0x69)](dp[0x0][0x0]);
});