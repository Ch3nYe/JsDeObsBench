function main(input) {
    const DmKUbz = {
        'ABlnE': function (x, y) {
            return x < y;
        },
        'zyZLa': function (x, y) {
            return x + y;
        },
        'GqAau': function (x, y) {
            return x > y;
        },
        'FZGbt': function (x, y) {
            return x + y;
        },
        'qiNPS': 'Yes'
    };
    let numarray = input['split']('\x20')['map'](Number);
    let W, H, x, y, r;
    W = numarray[0x0];
    H = numarray[0x1];
    x = numarray[0x2];
    y = numarray[0x3];
    r = numarray[0x4];
    if (DmKUbz['ABlnE'](x, r) || y < r || DmKUbz['zyZLa'](x, r) > W || DmKUbz['GqAau'](DmKUbz['FZGbt'](y, r), H)) {
        console['log']('No');
    } else {
        console['log'](DmKUbz['qiNPS']);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));