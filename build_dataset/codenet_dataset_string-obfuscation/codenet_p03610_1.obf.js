var a0_0x25c910 = a0_0x2a0f;
(function (stringArrayFunction, comparisonValue) {
    var _0x5e61bf = a0_0x2a0f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5e61bf(0x110)) / 0x1 + -parseInt(_0x5e61bf(0x10a)) / 0x2 * (parseInt(_0x5e61bf(0x108)) / 0x3) + parseInt(_0x5e61bf(0x111)) / 0x4 + parseInt(_0x5e61bf(0x114)) / 0x5 + -parseInt(_0x5e61bf(0x112)) / 0x6 * (-parseInt(_0x5e61bf(0x10e)) / 0x7) + parseInt(_0x5e61bf(0x10d)) / 0x8 + -parseInt(_0x5e61bf(0x113)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f95, 0x26872));
function a0_0x2f95() {
    var _0x2b965a = [
        '5710ODqNMQ',
        'readFileSync',
        'utf8',
        '1801768BadfMa',
        '577703uVHoLg',
        'length',
        '247375oRrUrM',
        '388852KdvwKJ',
        '18IMVNgN',
        '1689318bMJWqR',
        '1184955rAooKZ',
        'log',
        '225CodRVt',
        '/dev/stdin'
    ];
    a0_0x2f95 = function () {
        return _0x2b965a;
    };
    return a0_0x2f95();
}
function a0_0x2a0f(ESJKEo, key) {
    var stringArray = a0_0x2f95();
    a0_0x2a0f = function (index, key) {
        index = index - 0x107;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a0f(ESJKEo, key);
}
function Main(input) {
    var _0x4b8097 = a0_0x2a0f;
    input = input['split']('\x0a');
    input = input[0x0];
    var ans = '';
    for (var i = 0x1; i <= input[_0x4b8097(0x10f)]; i = i + 0x2) {
        ans += input[i - 0x1];
    }
    console[_0x4b8097(0x107)](ans);
}
Main(require('fs')[a0_0x25c910(0x10b)](a0_0x25c910(0x109), a0_0x25c910(0x10c)));