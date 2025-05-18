var a0_0x2ba881 = a0_0x2e67;
(function (stringArrayFunction, comparisonValue) {
    var _0x490210 = a0_0x2e67;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x490210(0x1ae)) / 0x1 + parseInt(_0x490210(0x1b2)) / 0x2 * (parseInt(_0x490210(0x1a9)) / 0x3) + parseInt(_0x490210(0x1b0)) / 0x4 * (parseInt(_0x490210(0x1ab)) / 0x5) + parseInt(_0x490210(0x1a7)) / 0x6 * (parseInt(_0x490210(0x1b8)) / 0x7) + -parseInt(_0x490210(0x1a8)) / 0x8 + -parseInt(_0x490210(0x1b3)) / 0x9 * (parseInt(_0x490210(0x1aa)) / 0xa) + -parseInt(_0x490210(0x1b6)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5311, 0x9bec5));
var input = require('fs')[a0_0x2ba881(0x1b7)](a0_0x2ba881(0x1af), a0_0x2ba881(0x1ac));
function a0_0x5311() {
    var _0x551a43 = [
        '335349BBAAix',
        'length',
        'trim',
        '1410464fSdKOp',
        'readFileSync',
        '7tFyAUJ',
        '5993346xpgMBs',
        '1499976WCMCAJ',
        '18OBqJHC',
        '220MnzMEv',
        '1570365ejrWow',
        'utf8',
        'split',
        '1099287zSIQGa',
        '/dev/stdin',
        '8bzdzQO',
        'map',
        '415458BtIEyH'
    ];
    a0_0x5311 = function () {
        return _0x551a43;
    };
    return a0_0x5311();
}
var Arr = input[a0_0x2ba881(0x1b5)]()[a0_0x2ba881(0x1ad)]('\x0a');
function a0_0x2e67(ZGGzgH, key) {
    var stringArray = a0_0x5311();
    a0_0x2e67 = function (index, key) {
        index = index - 0x1a7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e67(ZGGzgH, key);
}
for (var i = 0x0; i < Arr[a0_0x2ba881(0x1b4)]; i++) {
    if (Arr[i] == '0\x200')
        break;
    var arr = Arr[i][a0_0x2ba881(0x1ad)]('\x20')[a0_0x2ba881(0x1b1)](Number);
    var N = arr[0x0];
    var m = arr[0x1];
    var n = {};
    for (var j = 0x0; j < N; j++)
        n[j] = null;
    var x = 0x0;
    for (var k = 0x0; k < N; k++) {
        var y = 0x0;
        do {
            x++;
            if (x == N)
                x = 0x0;
            if (n[x] === null)
                y++;
        } while (y != m);
        n[x] = k;
    }
    console['log'](x);
}