function a0_0x5aa1(hTdKXK, key) {
    var stringArray = a0_0x3e46();
    a0_0x5aa1 = function (index, key) {
        index = index - 0x1e0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5aa1(hTdKXK, key);
}
var a0_0x24cd13 = a0_0x5aa1;
(function (stringArrayFunction, comparisonValue) {
    var _0x15aea0 = a0_0x5aa1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x15aea0(0x1ee)) / 0x1 * (parseInt(_0x15aea0(0x1ec)) / 0x2) + parseInt(_0x15aea0(0x1e2)) / 0x3 * (parseInt(_0x15aea0(0x1ea)) / 0x4) + -parseInt(_0x15aea0(0x1e3)) / 0x5 + -parseInt(_0x15aea0(0x1e4)) / 0x6 + -parseInt(_0x15aea0(0x1e6)) / 0x7 + -parseInt(_0x15aea0(0x1e5)) / 0x8 + parseInt(_0x15aea0(0x1e1)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3e46, 0xbf454));
function main(arg) {
    var _0x23d8ad = a0_0x5aa1;
    var arg2 = arg[_0x23d8ad(0x1e7)](/\n/g);
    var honbun = arg2[0x1];
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (i = 0x0; i < alphabet[_0x23d8ad(0x1e9)]; i++) {
        var iro = alphabet[_0x23d8ad(0x1ed)](i, 0x1);
        var regkun = new RegExp(iro + '+', 'g');
        honbun = honbun[_0x23d8ad(0x1e8)](regkun, iro);
    }
    console['log'](honbun[_0x23d8ad(0x1e9)]);
}
function a0_0x3e46() {
    var _0x2901dc = [
        '28200771fxIGLN',
        '10545YsqvmU',
        '3519970wHvnvy',
        '3704052lqFuBa',
        '11334576TPGxEw',
        '7576534MmoSAZ',
        'split',
        'replace',
        'length',
        '692IzZIMa',
        'readFileSync',
        '4700RxUYWa',
        'substr',
        '367GSJkvc',
        '/dev/stdin'
    ];
    a0_0x3e46 = function () {
        return _0x2901dc;
    };
    return a0_0x3e46();
}
main(require('fs')[a0_0x24cd13(0x1eb)](a0_0x24cd13(0x1e0), 'utf8'));