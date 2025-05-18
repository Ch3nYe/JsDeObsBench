var a0_0x5d51fd = a0_0x4089;
const main = input => {
    const N = Number(input);
    console['log'](calc(N, '', 0x0));
};
function a0_0x4089(QtBOHV, key) {
    var stringArray = a0_0x5a97();
    a0_0x4089 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4089(QtBOHV, key);
}
var map = {};
var w = [
    'A',
    'C',
    'G',
    'T'
];
function calc(N, lst4, cnt) {
    var _0x3063cc = a0_0x4089;
    var key = lst4 + '_' + cnt;
    if (map[key])
        return map[key];
    if (cnt == N) {
        return 0x1;
    }
    var ans = 0x0;
    for (var i = 0x0; i < 0x4; i++) {
        var next = lst4 + w[i];
        var next3 = next[_0x3063cc(0x0)](-0x3);
        var next4 = next[_0x3063cc(0x0)](-0x4);
        if (next3[0x0] + next3[0x1] + next3[0x2] != _0x3063cc(0x1) && next3[0x0] + next3[0x2] + next3[0x1] != _0x3063cc(0x1) && next3[0x1] + next3[0x0] + next3[0x2] != _0x3063cc(0x1) && next4[0x0] + next4[0x1] + next4[0x3] != _0x3063cc(0x1) && next4[0x0] + next4[0x2] + next4[0x3] != _0x3063cc(0x1)) {
            if (_0x3063cc(0x2) !== 'XaVjl') {
                ans += calc(N, next['slice'](-0x4), cnt + 0x1);
                ans %= 0x3b9aca07;
            } else {
                var key = lst4 + '_' + cnt;
                if (map[key])
                    return map[key];
                if (cnt == N) {
                    return 0x1;
                }
                var ans = 0x0;
                for (var i = 0x0; i < 0x4; i++) {
                    var next = lst4 + w[i];
                    var next3 = next[_0x3063cc(0x0)](-0x3);
                    var next4 = next['slice'](-0x4);
                    if (next3[0x0] + next3[0x1] + next3[0x2] != _0x3063cc(0x1) && next3[0x0] + next3[0x2] + next3[0x1] != _0x3063cc(0x1) && next3[0x1] + next3[0x0] + next3[0x2] != 'AGC' && next4[0x0] + next4[0x1] + next4[0x3] != 'AGC' && next4[0x0] + next4[0x2] + next4[0x3] != _0x3063cc(0x1)) {
                        ans += calc(N, next['slice'](-0x4), cnt + 0x1);
                        ans %= 0x3b9aca07;
                    }
                }
                map[key] = ans;
                return ans;
            }
        }
    }
    map[key] = ans;
    return ans;
}
main(require('fs')[a0_0x5d51fd(0x3)](a0_0x5d51fd(0x4), a0_0x5d51fd(0x5)));
function a0_0x5a97() {
    var _0x37c927 = [
        'slice',
        'AGC',
        'xpvRw',
        'readFileSync',
        '/dev/stdin',
        'UTF-8'
    ];
    a0_0x5a97 = function () {
        return _0x37c927;
    };
    return a0_0x5a97();
}