function a0_0x24f4() {
    var _0x1db584 = [
        'split',
        'map',
        'fill',
        'log',
        'filter',
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x24f4 = function () {
        return _0x1db584;
    };
    return a0_0x24f4();
}
var a0_0x22e9b0 = a0_0x3329;
function a0_0x3329(YvGpnK, key) {
    var stringArray = a0_0x24f4();
    a0_0x3329 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3329(YvGpnK, key);
}
function main(input) {
    var _0x20e7cd = a0_0x3329;
    var a = input[0x1]['trim']()[_0x20e7cd(0x0)]('\x20')[_0x20e7cd(0x1)](e => parseInt(e, 0xa));
    var a_max = 0xa ** 0x6 + 0x1;
    var dp = new Array(a_max + 0x1)[_0x20e7cd(0x2)](0x0);
    for (var i of a) {
        dp[i]++;
    }
    for (var i = 0x1; i <= a_max; i++) {
        if (dp[i] === 0x0) {
            continue;
        }
        for (var j = i + i; j <= a_max; j += i) {
            if (dp[j] !== 0x0) {
                dp[j] = 0x0;
            }
        }
    }
    console[_0x20e7cd(0x3)](dp[_0x20e7cd(0x4)](function (x) {
        return x == 0x1;
    })[_0x20e7cd(0x5)]);
}
main(require('fs')[a0_0x22e9b0(0x6)](a0_0x22e9b0(0x7), a0_0x22e9b0(0x8))['trim']()['split']('\x0a'));