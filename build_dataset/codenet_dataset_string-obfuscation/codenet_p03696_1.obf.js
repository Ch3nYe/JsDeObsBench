var a0_0x48e942 = a0_0x22ab;
(function (stringArrayFunction, comparisonValue) {
    var _0x33e7f2 = a0_0x22ab;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x33e7f2(0x1a4)) / 0x1 * (parseInt(_0x33e7f2(0x1a9)) / 0x2) + -parseInt(_0x33e7f2(0x1ab)) / 0x3 + -parseInt(_0x33e7f2(0x1aa)) / 0x4 + -parseInt(_0x33e7f2(0x1a2)) / 0x5 * (parseInt(_0x33e7f2(0x1a5)) / 0x6) + parseInt(_0x33e7f2(0x19d)) / 0x7 * (parseInt(_0x33e7f2(0x19c)) / 0x8) + -parseInt(_0x33e7f2(0x19f)) / 0x9 * (-parseInt(_0x33e7f2(0x198)) / 0xa) + parseInt(_0x33e7f2(0x19b)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x59cc, 0xd58e9));
function a0_0x22ab(uoAnxX, key) {
    var stringArray = a0_0x59cc();
    a0_0x22ab = function (index, key) {
        index = index - 0x197;
        var value = stringArray[index];
        return value;
    };
    return a0_0x22ab(uoAnxX, key);
}
function a0_0x59cc() {
    var _0x451765 = [
        'split',
        '343820FjZtrD',
        'stringify',
        'slice',
        '26302617dqfaaD',
        '9760216tPYaTM',
        '7RmaSfa',
        'indexOf',
        '27leNQlb',
        'utf8',
        'trim',
        '25YcXuih',
        '/dev/stdin',
        '16469IhMOlx',
        '1708086ogOKtC',
        'log',
        'length',
        'parse',
        '130HHlYus',
        '6653232dXQfcU',
        '2470089PmSpIb'
    ];
    a0_0x59cc = function () {
        return _0x451765;
    };
    return a0_0x59cc();
}
function myout(text) {
    var _0x3ad7b3 = a0_0x22ab;
    console[_0x3ad7b3(0x1a6)](text);
}
function Main(input) {
    var _0x927763 = a0_0x22ab;
    input = input[_0x927763(0x1a1)]()[_0x927763(0x197)]('\x0a');
    var tmpInput = JSON[_0x927763(0x1a8)](JSON[_0x927763(0x199)](input[0x1]));
    var left = 0x0;
    var right = 0x0;
    while (tmpInput[_0x927763(0x19e)]('()') != -0x1) {
        tmpInput = tmpInput['replace']('()', '');
    }
    for (var i = 0x0; i < tmpInput[_0x927763(0x1a7)]; i++) {
        var tmp = tmpInput[_0x927763(0x19a)](i, i + 0x1);
        if (tmp == '(') {
            left++;
        } else if (tmp == ')') {
            right++;
        }
    }
    for (var i = 0x0; i < right; i++) {
        input[0x1] = '(' + input[0x1];
    }
    for (var i = 0x0; i < left; i++) {
        input[0x1] += ')';
    }
    myout(input[0x1]);
}
Main(require('fs')['readFileSync'](a0_0x48e942(0x1a3), a0_0x48e942(0x1a0))[a0_0x48e942(0x1a1)]());