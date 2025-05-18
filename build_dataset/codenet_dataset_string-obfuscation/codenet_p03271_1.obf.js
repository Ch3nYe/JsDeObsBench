var a0_0x1e208a = a0_0x30fe;
(function (stringArrayFunction, comparisonValue) {
    var _0x10bd0a = a0_0x30fe;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x10bd0a(0x8d)) / 0x1 * (parseInt(_0x10bd0a(0x8e)) / 0x2) + -parseInt(_0x10bd0a(0x92)) / 0x3 * (parseInt(_0x10bd0a(0x8f)) / 0x4) + parseInt(_0x10bd0a(0x98)) / 0x5 * (-parseInt(_0x10bd0a(0x96)) / 0x6) + parseInt(_0x10bd0a(0x8a)) / 0x7 + parseInt(_0x10bd0a(0x91)) / 0x8 + -parseInt(_0x10bd0a(0x93)) / 0x9 + -parseInt(_0x10bd0a(0x89)) / 0xa * (-parseInt(_0x10bd0a(0x90)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x6ecd, 0xcf7c5));
var p = require('fs')['readFileSync'](a0_0x1e208a(0x97), a0_0x1e208a(0x8c));
function a0_0x6ecd() {
    var _0x537ac6 = [
        'utf8',
        '749BdZhBG',
        '3154QsEVQx',
        '957820bmoSLa',
        '7370xsTyBj',
        '2784864dpoyef',
        '18tCvjiL',
        '4810356dFggDX',
        'Yes',
        'log',
        '7962rfiTKE',
        '/dev/stdin',
        '2435hhRMkY',
        'split',
        '63110OfbPql',
        '504133JEMruM',
        'map'
    ];
    a0_0x6ecd = function () {
        return _0x537ac6;
    };
    return a0_0x6ecd();
}
p = p[a0_0x1e208a(0x88)]('\x0a')[a0_0x1e208a(0x8b)](a => +a);
function a0_0x30fe(ovyrcK, key) {
    var stringArray = a0_0x6ecd();
    a0_0x30fe = function (index, key) {
        index = index - 0x88;
        var value = stringArray[index];
        return value;
    };
    return a0_0x30fe(ovyrcK, key);
}
console[a0_0x1e208a(0x95)](main());
function main() {
    var _0x44b277 = a0_0x1e208a;
    var N = 'No';
    var n = p[0x0];
    var t = 0x0;
    for (i = 0x1; i <= n; i++) {
        while (t > i) {
            if (p[i] !== i)
                return N;
            i++;
        }
        var j = i;
        while (p[j] !== i) {
            j++;
            if (p[j] !== j)
                return N;
            j++;
        }
        t = j;
        while (j > i) {
            if (p[j - 0x2] < p[j - 0x1])
                return N;
            p[j] = p[j - 0x2];
            j -= 0x2;
        }
    }
    return _0x44b277(0x94);
}