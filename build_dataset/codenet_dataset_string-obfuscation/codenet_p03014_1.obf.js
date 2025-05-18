var a0_0x41112a = a0_0x50c5;
function a0_0x50c5(ErFWti, key) {
    var stringArray = a0_0x4bae();
    a0_0x50c5 = function (index, key) {
        index = index - 0x1d1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x50c5(ErFWti, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x54787c = a0_0x50c5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x54787c(0x1de)) / 0x1 + -parseInt(_0x54787c(0x1d4)) / 0x2 * (-parseInt(_0x54787c(0x1e3)) / 0x3) + -parseInt(_0x54787c(0x1d8)) / 0x4 * (parseInt(_0x54787c(0x1d3)) / 0x5) + parseInt(_0x54787c(0x1df)) / 0x6 + parseInt(_0x54787c(0x1d5)) / 0x7 + -parseInt(_0x54787c(0x1d7)) / 0x8 * (-parseInt(_0x54787c(0x1e2)) / 0x9) + -parseInt(_0x54787c(0x1e0)) / 0xa * (parseInt(_0x54787c(0x1dc)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4bae, 0x473e3));
const main = inputs => {
    var _0x290807 = a0_0x50c5;
    var H = inputs[0x0][_0x290807(0x1dd)]('\x20')[0x0] - 0x0;
    var W = inputs[0x0]['split']('\x20')[0x1] - 0x0;
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
                keys[_0x290807(0x1d6)](key);
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
    for (var i = keys[_0x290807(0x1da)] - 0x1; i >= 0x0; i--) {
        key = keys[i];
        ans = Math[_0x290807(0x1db)](ans, tmap[key]['n'] + ymap[key]['n'] - 0x1);
        if (ans == H + W - 0x1)
            break;
    }
    console[_0x290807(0x1d1)](ans);
};
main(require('fs')[a0_0x41112a(0x1e1)](a0_0x41112a(0x1d9), 'UTF-8')[a0_0x41112a(0x1d2)]()[a0_0x41112a(0x1dd)]('\x0a'));
function a0_0x4bae() {
    var _0x3f3e01 = [
        'max',
        '3110613AcoPXF',
        'split',
        '121154dcoYzF',
        '2098692etgPub',
        '30yClNoZ',
        'readFileSync',
        '63rfNkBL',
        '106713oMAkyD',
        'log',
        'trim',
        '2059165jGenDQ',
        '28KLNBko',
        '1929018WhdBJd',
        'push',
        '351416IzeBOw',
        '4aKKijr',
        '/dev/stdin',
        'length'
    ];
    a0_0x4bae = function () {
        return _0x3f3e01;
    };
    return a0_0x4bae();
}