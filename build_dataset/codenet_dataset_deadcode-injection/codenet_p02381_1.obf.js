'use strict';
var a0_0x3e0ced = a0_0x5e89;
function a0_0x5e89(ubfRwF, key) {
    var stringArray = a0_0x4dd8();
    a0_0x5e89 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e89(ubfRwF, key);
}
(function (stdin) {
    var _0x3fd70b = a0_0x5e89;
    var lines = stdin['toString']();
    var re = /\w+\n[\w\s]*?\n/g;
    var result = function (data) {
        var _0xe18bda = a0_0x5e89;
        return data[_0xe18bda(0x0)](stdev)['join']('\x0a');
        function stdev(scores) {
            var _0x20ce34 = a0_0x5e89;
            var count = scores['length'];
            var mean = scores[_0x20ce34(0x1)](sum) / count;
            return Math[_0x20ce34(0x2)](scores[_0x20ce34(0x0)](function (v) {
                return Math['pow'](v - mean, 0x2);
            })[_0x20ce34(0x1)](sum) / count)[_0x20ce34(0x3)](0x8);
        }
        function sum(a, b) {
            return a + b;
        }
    }(lines[_0x3fd70b(0x4)](re)[_0x3fd70b(0x0)](function (v) {
        var _0x36a9f4 = a0_0x5e89;
        return v['split']('\x0a')[0x1]['split']('\x20')['slice'](0x0, v[_0x36a9f4(0x5)]('\x0a')[0x0])['map'](Number);
    }));
    console[_0x3fd70b(0x6)](result);
}(require('fs')['readFileSync'](a0_0x3e0ced(0x7), a0_0x3e0ced(0x8))));
function a0_0x4dd8() {
    var _0xe4e8bf = [
        'map',
        'reduce',
        'sqrt',
        'toFixed',
        'match',
        'split',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4dd8 = function () {
        return _0xe4e8bf;
    };
    return a0_0x4dd8();
}