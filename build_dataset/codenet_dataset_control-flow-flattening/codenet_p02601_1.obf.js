'use strict';
function main(input) {
    const MHONlB = {
        'MvQQP': function (callee, param1) {
            return callee(param1);
        },
        'RrMOJ': function (callee, param1) {
            return callee(param1);
        },
        'MVMgN': function (x, y) {
            return x < y;
        },
        'lunrg': function (x, y) {
            return x >= y;
        },
        'WEybE': function (x, y) {
            return x * y;
        },
        'KDIQR': function (x, y) {
            return x >= y;
        },
        'umIud': function (x, y) {
            return x < y;
        },
        'FeJmW': function (x, y) {
            return x < y;
        },
        'ymhZV': 'Yes'
    };
    input = input['trim']()['split']('\x0a');
    const line_one = input[0x0]['split']('\x20');
    const K = MHONlB['MvQQP'](parseInt, input[0x1]);
    let line_one_arr = [];
    for (let i in line_one) {
        line_one_arr['push'](MHONlB['RrMOJ'](parseInt, line_one[i]));
    }
    for (let i = 0x0; MHONlB['MVMgN'](i, K); i++) {
        if (MHONlB['lunrg'](line_one_arr[0x0], line_one_arr[0x1])) {
            line_one_arr[0x1] = MHONlB['WEybE'](line_one_arr[0x1], 0x2);
            continue;
        }
        if (MHONlB['KDIQR'](line_one_arr[0x1], line_one_arr[0x2])) {
            line_one_arr[0x2] = line_one_arr[0x2] * 0x2;
        }
    }
    if (MHONlB['umIud'](line_one_arr[0x0], line_one_arr[0x1]) && MHONlB['FeJmW'](line_one_arr[0x1], line_one_arr[0x2])) {
        console['log'](MHONlB['ymhZV']);
    } else {
        console['log']('No');
    }
}
function numberSort(array) {
    array['sort'](f);
    return array;
}
var f = function (a, b) {
    const RUtlHf = {
        'VxyJG': function (x, y) {
            return x - y;
        }
    };
    return RUtlHf['VxyJG'](a, b);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));