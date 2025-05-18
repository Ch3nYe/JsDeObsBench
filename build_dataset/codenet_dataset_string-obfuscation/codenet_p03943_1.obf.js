var a0_0x5d732f = a0_0x9cbc;
function a0_0x4971() {
    var _0x2fb056 = [
        '984078mAnzOW',
        '/dev/stdin',
        '631135EthfXM',
        'split',
        '234pDBeeg',
        '77OAOtpA',
        '4870cdoQLD',
        '228jqslWb',
        '4pltUGA',
        '25064DynTJp',
        '315050EsiZHy',
        'forEach',
        'log',
        'includes',
        '1146404sBGqkL',
        '31075JbnbfN'
    ];
    a0_0x4971 = function () {
        return _0x2fb056;
    };
    return a0_0x4971();
}
function a0_0x9cbc(jCVhbx, key) {
    var stringArray = a0_0x4971();
    a0_0x9cbc = function (index, key) {
        index = index - 0x8a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x9cbc(jCVhbx, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4093bc = a0_0x9cbc;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4093bc(0x92)) / 0x1 + -parseInt(_0x4093bc(0x99)) / 0x2 * (parseInt(_0x4093bc(0x8a)) / 0x3) + -parseInt(_0x4093bc(0x8b)) / 0x4 * (-parseInt(_0x4093bc(0x95)) / 0x5) + -parseInt(_0x4093bc(0x93)) / 0x6 + parseInt(_0x4093bc(0x91)) / 0x7 + parseInt(_0x4093bc(0x8c)) / 0x8 * (-parseInt(_0x4093bc(0x97)) / 0x9) + -parseInt(_0x4093bc(0x8d)) / 0xa * (-parseInt(_0x4093bc(0x98)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4971, 0x1b1e6));
function Main(input) {
    var _0x1daa55 = a0_0x9cbc;
    input = input[_0x1daa55(0x96)]('\x20');
    input = input['map'](Number);
    children = 0x2;
    var sub = function (arry, num) {
        var _0x1fe03e = _0x1daa55;
        var sum = 0x0;
        arry[_0x1fe03e(0x8e)](element => {
            sum += element;
        });
        return arry[_0x1fe03e(0x90)](sum / num);
    };
    if (sub(input, children)) {
        console[_0x1daa55(0x8f)]('Yes');
    } else {
        console[_0x1daa55(0x8f)]('No');
    }
}
Main(require('fs')['readFileSync'](a0_0x5d732f(0x94), 'utf8'));