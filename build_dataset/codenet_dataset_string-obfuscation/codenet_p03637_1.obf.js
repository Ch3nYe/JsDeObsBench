var a0_0x5b9ec9 = a0_0x1bca;
(function (stringArrayFunction, comparisonValue) {
    var _0xd6e0f = a0_0x1bca;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xd6e0f(0x174)) / 0x1 * (-parseInt(_0xd6e0f(0x16c)) / 0x2) + parseInt(_0xd6e0f(0x175)) / 0x3 + parseInt(_0xd6e0f(0x16f)) / 0x4 * (parseInt(_0xd6e0f(0x16e)) / 0x5) + -parseInt(_0xd6e0f(0x170)) / 0x6 * (-parseInt(_0xd6e0f(0x16d)) / 0x7) + parseInt(_0xd6e0f(0x177)) / 0x8 + -parseInt(_0xd6e0f(0x173)) / 0x9 * (parseInt(_0xd6e0f(0x179)) / 0xa) + -parseInt(_0xd6e0f(0x176)) / 0xb * (parseInt(_0xd6e0f(0x171)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x186e, 0x87d15));
function a0_0x186e() {
    var _0x1e506b = [
        'readFileSync',
        '8083660sBYqQj',
        'Yes',
        '/dev/stdin',
        '388XmdCIg',
        '74361udeVQh',
        '129555rNuFFo',
        '136dFHVBb',
        '66oBFvoi',
        '1680klZEwD',
        'split',
        '9VWNmYJ',
        '3989NXlRzs',
        '2827170uNuUiY',
        '157333bNjGpk',
        '5224096SFTKet'
    ];
    a0_0x186e = function () {
        return _0x1e506b;
    };
    return a0_0x186e();
}
function a0_0x1bca(TDZnkf, key) {
    var stringArray = a0_0x186e();
    a0_0x1bca = function (index, key) {
        index = index - 0x16c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1bca(TDZnkf, key);
}
function Main(input) {
    var _0x4d7dbf = a0_0x1bca;
    input = input[_0x4d7dbf(0x172)]('\x0a');
    var n = parseInt(input[0x0]);
    tmp = input[0x1]['split']('\x20');
    a = new Array(n);
    var odd = 0x0;
    var even = 0x0;
    var four = 0x0;
    for (i = 0x0; i < n; i++) {
        a[i] = parseInt(tmp[i]);
        if (a[i] % 0x4 == 0x0) {
            four++;
        } else if (a[i] % 0x2 == 0x0) {
            even++;
        } else {
            odd++;
        }
    }
    var ans = 'No';
    if (odd <= four) {
        ans = _0x4d7dbf(0x17a);
    } else if (four + 0x1 == odd && even == 0x0) {
        ans = _0x4d7dbf(0x17a);
    }
    console['log']('%s', ans);
}
Main(require('fs')[a0_0x5b9ec9(0x178)](a0_0x5b9ec9(0x17b), 'utf8'));