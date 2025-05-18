var a0_0x3cfcfd = a0_0x25be;
function a0_0x25be(tJctlk, key) {
    var stringArray = a0_0x3a06();
    a0_0x25be = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x25be(tJctlk, key);
}
function myout(text) {
    console['log'](text);
}
function a0_0x3a06() {
    var _0x24ca22 = [
        'trim',
        'split',
        'stringify',
        'indexOf',
        'iXrZr',
        'replace',
        'length',
        'BBMPp',
        'slice',
        'APZZu',
        'podwJ',
        'log',
        'XikBm',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3a06 = function () {
        return _0x24ca22;
    };
    return a0_0x3a06();
}
function Main(input) {
    var _0x539000 = a0_0x25be;
    input = input[_0x539000(0x0)]()[_0x539000(0x1)]('\x0a');
    var tmpInput = JSON['parse'](JSON[_0x539000(0x2)](input[0x1]));
    var left = 0x0;
    var right = 0x0;
    while (tmpInput[_0x539000(0x3)]('()') != -0x1) {
        if (_0x539000(0x4) !== _0x539000(0x4)) {
            tmpInput = tmpInput[_0x539000(0x5)]('()', '');
        } else {
            tmpInput = tmpInput['replace']('()', '');
        }
    }
    for (var i = 0x0; i < tmpInput[_0x539000(0x6)]; i++) {
        if (_0x539000(0x7) !== 'BBMPp') {
            input[0x1] += ')';
        } else {
            var tmp = tmpInput[_0x539000(0x8)](i, i + 0x1);
            if (tmp == '(') {
                if (_0x539000(0x9) === _0x539000(0xa)) {
                    console[_0x539000(0xb)](text);
                } else {
                    left++;
                }
            } else if (tmp == ')') {
                if (_0x539000(0xc) === _0x539000(0xc)) {
                    right++;
                } else {
                    input[0x1] = '(' + input[0x1];
                }
            }
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
Main(require('fs')[a0_0x3cfcfd(0xd)](a0_0x3cfcfd(0xe), a0_0x3cfcfd(0xf))[a0_0x3cfcfd(0x0)]());