function main(input) {
    var gYBEUt = {
        'aYGLo': function (x, y) {
            return x / y;
        },
        'ecoxZ': 'Yes'
    };
    var line = input['split'](/\r?\n/g);
    var arr = line[0x0]['split']('\x20');
    const H = arr[0x0], N = arr[0x1];
    var A = line[0x1]['split']('\x20')['map'](Number);
    A = A['reduce']((A, x) => A + x);
    console['log'](0x1 < Math['ceil'](gYBEUt['aYGLo'](H, A)) ? 'No' : gYBEUt['ecoxZ']);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));