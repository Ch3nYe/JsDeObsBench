const a0_0x39b16d = a0_0x2e72;
function Main(input) {
    const _0x30c3df = a0_0x2e72;
    input = input[_0x30c3df(0x0)]('\x0a');
    let target = parseInt(input[0x0][_0x30c3df(0x0)]('\x20')[0x0]);
    let zerocheck = parseInt(input[0x0][_0x30c3df(0x0)]('\x20')[0x1]);
    if (zerocheck == 0x0) {
        console['log'](target);
    } else {
        let str = input[0x1]['split']('\x20');
        for (let i = 0x0; i < str[_0x30c3df(0x1)]; i++) {
            let num = parseInt(str[i]);
            str[i] = target - num;
        }
        for (let ite = 0x1; ite <= 0x64; ite++) {
            const isp = str[_0x30c3df(0x2)](ite);
            const isn = str[_0x30c3df(0x2)](-ite);
            if (isp == -0x1) {
                console[_0x30c3df(0x3)](target - ite);
                break;
            }
            if (isn == -0x1) {
                console[_0x30c3df(0x3)](target + ite);
                break;
            }
        }
    }
}
function a0_0x3cc7() {
    const _0x21a3e8 = [
        'split',
        'length',
        'indexOf',
        'log',
        '/dev/stdin'
    ];
    a0_0x3cc7 = function () {
        return _0x21a3e8;
    };
    return a0_0x3cc7();
}
function a0_0x2e72(vdoJaX, key) {
    const stringArray = a0_0x3cc7();
    a0_0x2e72 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2e72(vdoJaX, key);
}
Main(require('fs')['readFileSync'](a0_0x39b16d(0x4), 'utf8'));