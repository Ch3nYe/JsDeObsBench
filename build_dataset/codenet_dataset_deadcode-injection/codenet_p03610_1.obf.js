var a0_0x923c48 = a0_0x1889;
function a0_0x1889(qpQRVa, key) {
    var stringArray = a0_0x5974();
    a0_0x1889 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1889(qpQRVa, key);
}
function Main(input) {
    var _0x24a31d = a0_0x1889;
    input = input['split']('\x0a');
    input = input[0x0];
    var ans = '';
    for (var i = 0x1; i <= input[_0x24a31d(0x0)]; i = i + 0x2) {
        ans += input[i - 0x1];
    }
    console['log'](ans);
}
function a0_0x5974() {
    var _0x50f47b = [
        'length',
        '/dev/stdin'
    ];
    a0_0x5974 = function () {
        return _0x50f47b;
    };
    return a0_0x5974();
}
Main(require('fs')['readFileSync'](a0_0x923c48(0x1), 'utf8'));