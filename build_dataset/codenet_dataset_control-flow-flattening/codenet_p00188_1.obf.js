function binarySearch(A, key) {
    var VQeZBg = {
        'ulCtw': '4|1|0|3|2',
        'EWXDH': function (x, y) {
            return x - y;
        },
        'rFOwv': function (x, y) {
            return x == y;
        },
        'WFeeh': function (x, y) {
            return x + y;
        },
        'gMuZf': function (x, y) {
            return x < y;
        }
    };
    var jgBQPw = VQeZBg['ulCtw']['split']('|');
    var VUWVAo = 0x0;
    while (!![]) {
        switch (jgBQPw[VUWVAo++]) {
        case '0':
            var cnt = 0x0;
            continue;
        case '1':
            var right = VQeZBg['EWXDH'](A['length'], 0x1);
            continue;
        case '2':
            return cnt;
        case '3':
            while (!![]) {
                cnt++;
                if (VQeZBg['rFOwv'](left, right))
                    break;
                var mid = Math['floor'](VQeZBg['WFeeh'](left, right) / 0x2);
                if (A[mid] == key)
                    return cnt;
                if (VQeZBg['gMuZf'](key, A[mid]))
                    right = mid;
                else
                    left = VQeZBg['WFeeh'](mid, 0x1);
            }
            continue;
        case '4':
            var left = 0x0;
            continue;
        }
        break;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < n; i++)
        arr['push'](Arr['shift']() - 0x0);
    console['log'](binarySearch(arr, Arr['shift']() - 0x0));
}