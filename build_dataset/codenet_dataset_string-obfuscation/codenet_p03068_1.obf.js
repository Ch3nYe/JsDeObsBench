var a0_0x444a3a = a0_0x3d67;
(function (stringArrayFunction, comparisonValue) {
    var _0x2fd958 = a0_0x3d67;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2fd958(0x148)) / 0x1 * (parseInt(_0x2fd958(0x147)) / 0x2) + -parseInt(_0x2fd958(0x14f)) / 0x3 + parseInt(_0x2fd958(0x14c)) / 0x4 + -parseInt(_0x2fd958(0x155)) / 0x5 * (-parseInt(_0x2fd958(0x154)) / 0x6) + parseInt(_0x2fd958(0x150)) / 0x7 + parseInt(_0x2fd958(0x151)) / 0x8 + -parseInt(_0x2fd958(0x152)) / 0x9 * (parseInt(_0x2fd958(0x14e)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4c28, 0x7227c));
var lines = [];
var readline = require(a0_0x444a3a(0x14b));
function a0_0x4c28() {
    var _0x3f9f80 = [
        'split',
        '113638NSzJiK',
        '7GOlSxh',
        'line',
        'push',
        'readline',
        '1129892niOYlv',
        'close',
        '259380eWzAjY',
        '505539QDDhqN',
        '2248386iYxkJK',
        '4461976nxiGhi',
        '639RbVYrh',
        'stdin',
        '87480fNLzFf',
        '315CHorbF'
    ];
    a0_0x4c28 = function () {
        return _0x3f9f80;
    };
    return a0_0x4c28();
}
var rl = readline['createInterface']({
    'input': process[a0_0x444a3a(0x153)],
    'output': process['stdout']
});
function a0_0x3d67(SkgLqZ, key) {
    var stringArray = a0_0x4c28();
    a0_0x3d67 = function (index, key) {
        index = index - 0x147;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3d67(SkgLqZ, key);
}
rl['on'](a0_0x444a3a(0x149), function (x) {
    var _0x28e539 = a0_0x444a3a;
    lines[_0x28e539(0x14a)](x);
});
rl['on'](a0_0x444a3a(0x14d), function () {
    var _0x119649 = a0_0x444a3a;
    var N = Number(lines[0x0]);
    var S = lines[0x1][_0x119649(0x156)]('');
    var K = Number(lines[0x2]);
    for (var i = 0x0; i < N; i++) {
        if (S[K - 0x1] !== S[i]) {
            S[i] = '*';
        }
    }
    var result = '';
    for (var i = 0x0; i < N; i++) {
        result = result + S[i];
    }
    console['log'](result);
});