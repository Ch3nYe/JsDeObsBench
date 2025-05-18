'use strict';
function Main(input) {
    const hCooUq = {
        'aupsi': function (callee, param1) {
            return callee(param1);
        },
        'clVnZ': function (x, y) {
            return x % y;
        },
        'CpaMu': function (x, y) {
            return x ** y;
        },
        'YFLxl': function (x, y) {
            return x / y;
        },
        'scGBJ': function (x, y) {
            return x ** y;
        },
        'jTLLj': function (x, y) {
            return x + y;
        },
        'PijID': function (x, y) {
            return x ** y;
        }
    };
    input = input['split']('\x0a');
    const line0 = input[0x0]['split']('\x20');
    let N = hCooUq['aupsi'](parseInt, line0[0x0]);
    let K = hCooUq['aupsi'](parseInt, line0[0x1]);
    if (hCooUq['clVnZ'](K, 0x2) === 0x0) {
        console['log'](hCooUq['CpaMu'](Math['floor'](hCooUq['YFLxl'](N, K)), 0x3) + hCooUq['scGBJ'](Math['floor'](hCooUq['YFLxl'](hCooUq['jTLLj'](N, hCooUq['YFLxl'](K, 0x2)), K)), 0x3));
    } else {
        console['log'](hCooUq['PijID'](Math['floor'](hCooUq['YFLxl'](N, K)), 0x3));
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));