function a0_0x28aa(WplYfP, key) {
    var stringArray = a0_0x5788();
    a0_0x28aa = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x28aa(WplYfP, key);
}
var a0_0x132baf = a0_0x28aa;
var ans = 0x0;
require('fs')[a0_0x132baf(0x0)](a0_0x132baf(0x1), a0_0x132baf(0x2))[a0_0x132baf(0x3)](/\d+/g)[a0_0x132baf(0x4)](function (elem) {
    ans += parseInt(elem, 0xa);
});
function a0_0x5788() {
    var _0x120eb1 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'match',
        'forEach',
        'log'
    ];
    a0_0x5788 = function () {
        return _0x120eb1;
    };
    return a0_0x5788();
}
console[a0_0x132baf(0x5)](ans);