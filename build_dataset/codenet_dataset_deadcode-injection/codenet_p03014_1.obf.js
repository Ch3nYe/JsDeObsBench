function a0_0x5d53(rzCkIU, key) {
    var stringArray = a0_0x3164();
    a0_0x5d53 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5d53(rzCkIU, key);
}
var a0_0xf448ae = a0_0x5d53;
function a0_0x3164() {
    var _0x503111 = [
        'split',
        'push',
        'length',
        'max',
        'log',
        'readFileSync',
        '/dev/stdin',
        'UTF-8',
        'trim'
    ];
    a0_0x3164 = function () {
        return _0x503111;
    };
    return a0_0x3164();
}
const main = inputs => {
    var _0x189e86 = a0_0x5d53;
    var H = inputs[0x0][_0x189e86(0x0)]('\x20')[0x0] - 0x0;
    var W = inputs[0x0][_0x189e86(0x0)]('\x20')[0x1] - 0x0;
    var map = {};
    var ymap = {};
    var tmap = {};
    var keys = [];
    for (var h = 0x0; h < H; h++) {
        map[h] = inputs[h + 0x1];
        for (var w = 0x0; w < W; w++) {
            var ukey = h - 0x1 + '_' + w;
            var lkey = h + '_' + (w - 0x1);
            var key = h + '_' + w;
            if (map[h][w] == '#') {
            } else {
                keys[_0x189e86(0x1)](key);
                if (ymap[lkey]) {
                    ymap[key] = ymap[lkey];
                    ymap[key]['n']++;
                } else {
                    ymap[key] = { 'n': 0x1 };
                }
                if (tmap[ukey]) {
                    tmap[key] = tmap[ukey];
                    tmap[key]['n']++;
                } else {
                    tmap[key] = { 'n': 0x1 };
                }
            }
        }
    }
    var ans = 0x0;
    var key;
    for (var i = keys[_0x189e86(0x2)] - 0x1; i >= 0x0; i--) {
        key = keys[i];
        ans = Math[_0x189e86(0x3)](ans, tmap[key]['n'] + ymap[key]['n'] - 0x1);
        if (ans == H + W - 0x1)
            break;
    }
    console[_0x189e86(0x4)](ans);
};
main(require('fs')[a0_0xf448ae(0x5)](a0_0xf448ae(0x6), a0_0xf448ae(0x7))[a0_0xf448ae(0x8)]()[a0_0xf448ae(0x0)]('\x0a'));