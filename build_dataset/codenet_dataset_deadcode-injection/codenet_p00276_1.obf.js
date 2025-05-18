Main(function (input) {
    var _0x4bc9f2 = a0_0x2b4e;
    input = input['trim']()[_0x4bc9f2(0x0)]('\x0a');
    input[_0x4bc9f2(0x1)]();
    input['forEach'](function (line) {
        var _0x2f021d = a0_0x2b4e;
        if (_0x2f021d(0x2) !== 'SWXiK') {
            var tmp = line['split']('\x20');
            var c = +tmp[0x0];
            var a = +tmp[0x1];
            var n = +tmp[0x2];
            var ans = 0x0;
            var min;
            min = Math['min'](c, a, n);
            c -= min;
            a -= min;
            n -= min;
            ans += min;
            min = Math[_0x2f021d(0x3)](Math[_0x2f021d(0x4)](c / 0x2), a);
            c -= min * 0x2;
            a -= min;
            ans += min;
            ans += Math[_0x2f021d(0x4)](c / 0x3);
            console[_0x2f021d(0x5)](ans);
        } else {
            input += chunk;
        }
    });
});
function Main(main) {
    var _0x46eaf9 = a0_0x2b4e;
    var input = '';
    process['stdin'][_0x46eaf9(0x6)]();
    process['stdin'][_0x46eaf9(0x7)](_0x46eaf9(0x8));
    process['stdin']['on'](_0x46eaf9(0x9), function (chunk) {
        input += chunk;
    });
    process[_0x46eaf9(0xa)]['on'](_0x46eaf9(0xb), function () {
        var _0x2b0189 = a0_0x2b4e;
        if (_0x2b0189(0xc) === _0x2b0189(0xc)) {
            main(input);
        } else {
            input = input[_0x2b0189(0xd)]()[_0x2b0189(0x0)]('\x0a');
            input[_0x2b0189(0x1)]();
            input[_0x2b0189(0xe)](function (line) {
                var _0x891956 = a0_0x2b4e;
                var tmp = line[_0x891956(0x0)]('\x20');
                var c = +tmp[0x0];
                var a = +tmp[0x1];
                var n = +tmp[0x2];
                var ans = 0x0;
                var min;
                min = Math['min'](c, a, n);
                c -= min;
                a -= min;
                n -= min;
                ans += min;
                min = Math[_0x891956(0x3)](Math[_0x891956(0x4)](c / 0x2), a);
                c -= min * 0x2;
                a -= min;
                ans += min;
                ans += Math[_0x891956(0x4)](c / 0x3);
                console[_0x891956(0x5)](ans);
            });
        }
    });
}
function a0_0x2b4e(hbxVjm, key) {
    var stringArray = a0_0x322e();
    a0_0x2b4e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2b4e(hbxVjm, key);
}
;
function a0_0x322e() {
    var _0x348627 = [
        'split',
        'shift',
        'CQMdd',
        'min',
        'floor',
        'log',
        'resume',
        'setEncoding',
        'utf8',
        'data',
        'stdin',
        'end',
        'gxGYp',
        'trim',
        'forEach'
    ];
    a0_0x322e = function () {
        return _0x348627;
    };
    return a0_0x322e();
}