const main = arg => {
    const PDFNdR = {
        'RwAVo': function (x, y) {
            return x < y;
        },
        'JYWdd': function (x, y) {
            return x <= y;
        },
        'ZbgAI': function (x, y) {
            return x - y;
        }
    };
    const [N, K] = arg['split']('\x0a')[0x0]['split']('\x20')['map'](Number);
    arg = arg['split']('\x0a')['slice'](0x1);
    const a = arg['map'](Number);
    let b = [];
    b['push'](a[0x0]);
    for (let i = 0x1; PDFNdR['RwAVo'](i, N); i++) {
        if (PDFNdR['JYWdd'](Math['abs'](PDFNdR['ZbgAI'](a[i], b[PDFNdR['ZbgAI'](b['length'], 0x1)])), K)) {
            b['push'](a[i]);
        }
    }
    console['log'](b['length']);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));