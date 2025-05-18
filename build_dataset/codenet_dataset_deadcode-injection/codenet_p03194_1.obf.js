function a0_0x5328(juVUAS, key) {
    var stringArray = a0_0x9ba0();
    a0_0x5328 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5328(juVUAS, key);
}
var a0_0x2dae99 = a0_0x5328;
function Main(input) {
    var _0x3cdb78 = a0_0x5328;
    var input = input[_0x3cdb78(0x0)]('\x20');
    var n = parseInt(input[0x0], 0xa);
    var p = parseInt(input[0x1], 0xa);
    var arr = [];
    var counts = [];
    var ans = 0x1;
    var i = 0x2;
    while (i <= p) {
        while (p % i === 0x0) {
            arr[_0x3cdb78(0x1)](i);
            p = Math[_0x3cdb78(0x2)](p / i);
        }
        i++;
    }
    for (var i = 0x0; i < arr[_0x3cdb78(0x3)]; i++) {
        if (_0x3cdb78(0x4) !== 'ozZjz') {
            ans *= b[i];
        } else {
            var key = arr[i];
            counts[key] = counts[key] ? counts[key] + 0x1 : 0x1;
        }
    }
    var b = arr['filter'](function (x, i, self) {
        var _0x3746f4 = a0_0x5328;
        return self[_0x3746f4(0x5)](x) === i;
    });
    for (var i = 0x0; i < b[_0x3cdb78(0x3)]; i++) {
        if (_0x3cdb78(0x6) === _0x3cdb78(0x6)) {
            if (counts[b[i]] >= n) {
                ans *= b[i];
            }
        } else {
            return self[_0x3cdb78(0x5)](x) === i;
        }
    }
    console[_0x3cdb78(0x7)](ans);
}
Main(require('fs')['readFileSync'](a0_0x2dae99(0x8), 'utf8'));
function a0_0x9ba0() {
    var _0x4948dd = [
        'split',
        'push',
        'floor',
        'length',
        'ozZjz',
        'indexOf',
        'nZVvV',
        'log',
        '/dev/stdin'
    ];
    a0_0x9ba0 = function () {
        return _0x4948dd;
    };
    return a0_0x9ba0();
}