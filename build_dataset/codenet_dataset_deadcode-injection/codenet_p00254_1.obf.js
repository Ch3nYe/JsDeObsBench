var a0_0x27bdbc = a0_0x41a1;
function a0_0x41a1(rHdijP, key) {
    var stringArray = a0_0x53e1();
    a0_0x41a1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x41a1(rHdijP, key);
}
var input = require('fs')[a0_0x27bdbc(0x0)]('/dev/stdin', a0_0x27bdbc(0x1));
var Arr = input[a0_0x27bdbc(0x2)]()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']();
    if (n == '0000')
        break;
    if (n == '1111' || n == '2222' || n == '3333' || n == a0_0x27bdbc(0x3) || n == '5555') {
        console['log']('NA');
        continue;
    }
    if (n == a0_0x27bdbc(0x4) || n == a0_0x27bdbc(0x5) || n == a0_0x27bdbc(0x6) || n == a0_0x27bdbc(0x7)) {
        console[a0_0x27bdbc(0x8)]('NA');
        continue;
    }
    var i = 0x0;
    while (!![]) {
        if (n == a0_0x27bdbc(0x9))
            break;
        i++;
        var arr = n[a0_0x27bdbc(0xa)]('')['map'](Number);
        arr[a0_0x27bdbc(0xb)](function (a, b) {
            return b - a;
        });
        var L = parseInt('' + arr[0x0] + arr[0x1] + arr[0x2] + arr[0x3], 0xa);
        var S = parseInt('' + arr[0x3] + arr[0x2] + arr[0x1] + arr[0x0], 0xa);
        n = ('0000' + (L - S))[a0_0x27bdbc(0xc)](-0x4);
    }
    console[a0_0x27bdbc(0x8)](i);
}
function a0_0x53e1() {
    var _0x3178b5 = [
        'readFileSync',
        'utf8',
        'trim',
        '4444',
        '6666',
        '7777',
        '8888',
        '9999',
        'log',
        '6174',
        'split',
        'sort',
        'slice'
    ];
    a0_0x53e1 = function () {
        return _0x3178b5;
    };
    return a0_0x53e1();
}