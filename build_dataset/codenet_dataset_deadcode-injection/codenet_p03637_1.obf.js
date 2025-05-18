var a0_0x32c494 = a0_0x5c37;
function a0_0x5c37(FFMNxj, key) {
    var stringArray = a0_0x2d75();
    a0_0x5c37 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c37(FFMNxj, key);
}
function Main(input) {
    var _0x1720ce = a0_0x5c37;
    input = input['split']('\x0a');
    var n = parseInt(input[0x0]);
    tmp = input[0x1][_0x1720ce(0x0)]('\x20');
    a = new Array(n);
    var odd = 0x0;
    var even = 0x0;
    var four = 0x0;
    for (i = 0x0; i < n; i++) {
        if ('WpVwI' === _0x1720ce(0x1)) {
            even++;
        } else {
            a[i] = parseInt(tmp[i]);
            if (a[i] % 0x4 == 0x0) {
                four++;
            } else if (a[i] % 0x2 == 0x0) {
                even++;
            } else {
                if (_0x1720ce(0x2) !== _0x1720ce(0x2)) {
                    ans = _0x1720ce(0x3);
                } else {
                    odd++;
                }
            }
        }
    }
    var ans = 'No';
    if (odd <= four) {
        ans = _0x1720ce(0x3);
    } else if (four + 0x1 == odd && even == 0x0) {
        ans = _0x1720ce(0x3);
    }
    console[_0x1720ce(0x4)]('%s', ans);
}
function a0_0x2d75() {
    var _0x47ed56 = [
        'split',
        'NkXzR',
        'wxYAW',
        'Yes',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x2d75 = function () {
        return _0x47ed56;
    };
    return a0_0x2d75();
}
Main(require('fs')[a0_0x32c494(0x5)](a0_0x32c494(0x6), 'utf8'));