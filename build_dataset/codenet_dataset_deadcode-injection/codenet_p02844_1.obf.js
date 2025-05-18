var a0_0x1c0a0a = a0_0x1777;
function Main(input) {
    var _0x44c1f1 = a0_0x1777;
    input = input[_0x44c1f1(0x0)]()[_0x44c1f1(0x1)]('\x0a');
    var N = parseInt(input[0x0]);
    var SasStr = input[0x1];
    var ans = 0x0;
    var x1, x2, x3, xTmp, x1i, x2i, x3i, sTmp;
    for (var i = 0x3e8; i < 0x7d0; i++) {
        xTmp = String(i);
        x1 = xTmp[_0x44c1f1(0x2)](0x1, 0x1);
        x2 = xTmp[_0x44c1f1(0x2)](0x2, 0x1);
        x3 = xTmp[_0x44c1f1(0x2)](0x3, 0x1);
        x1i = SasStr[_0x44c1f1(0x3)](x1);
        if (x1i !== -0x1) {
            sTmp = SasStr['substr'](x1i + 0x1);
            x2i = sTmp[_0x44c1f1(0x3)](x2);
            if (x2i !== -0x1) {
                sTmp = sTmp['substr'](x2i + 0x1);
                x3i = sTmp[_0x44c1f1(0x3)](x3);
                if (x3i !== -0x1) {
                    ans++;
                }
            }
        }
    }
    console[_0x44c1f1(0x4)](ans);
}
Main(require('fs')['readFileSync'](a0_0x1c0a0a(0x5), a0_0x1c0a0a(0x6)));
function a0_0x1777(UPKvjQ, key) {
    var stringArray = a0_0x4353();
    a0_0x1777 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1777(UPKvjQ, key);
}
function a0_0x4353() {
    var _0x2ed70e = [
        'trim',
        'split',
        'substr',
        'indexOf',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4353 = function () {
        return _0x2ed70e;
    };
    return a0_0x4353();
}