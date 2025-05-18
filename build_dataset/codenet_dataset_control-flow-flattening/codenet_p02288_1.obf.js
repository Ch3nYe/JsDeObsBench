(function main() {
    const oZCiQh = {
        'WIwpn': function (callee, param1) {
            return callee(param1);
        },
        'Wvvbl': '/dev/stdin',
        'HltKM': 'utf8',
        'lxpOI': function (callee, param1) {
            return callee(param1);
        }
    };
    const lines = oZCiQh['WIwpn'](require, 'fs')['readFileSync'](oZCiQh['Wvvbl'], oZCiQh['HltKM'])['trim']()['split']('\x0a');
    lines['shift']();
    const arr = lines['shift']()['split']('\x20')['map'](Number);
    oZCiQh['lxpOI'](buildMaxHeap, arr);
    console['log'](arr['reduce']((s, e) => s += '\x20' + e, ''));
}());
function buildMaxHeap(arr) {
    const ITfFVx = {
        'LPtxI': function (x, y) {
            return x * y;
        },
        'IBQPX': function (x, y) {
            return x + y;
        },
        'IQslD': function (x, y) {
            return x * y;
        },
        'fcEKe': function (x, y) {
            return x < y;
        },
        'vTxbr': function (x, y) {
            return x > y;
        },
        'bbCdO': function (x, y) {
            return x < y;
        },
        'TeuZe': function (x, y) {
            return x != y;
        },
        'CvKZt': function (x, y) {
            return x >= y;
        },
        'rZvFW': function (callee, param1) {
            return callee(param1);
        }
    };
    const n = arr['length'];
    const maxHeapify = i => {
        let left, right, largest;
        left = ITfFVx['LPtxI'](0x2, i) + 0x1;
        right = ITfFVx['IBQPX'](ITfFVx['IQslD'](0x2, i), 0x2);
        largest = ITfFVx['fcEKe'](left, n) && ITfFVx['vTxbr'](arr[left], arr[i]) ? left : i;
        if (ITfFVx['bbCdO'](right, n) && ITfFVx['vTxbr'](arr[right], arr[largest]))
            largest = right;
        if (ITfFVx['TeuZe'](largest, i)) {
            arr[largest] = [
                arr[i],
                arr[i] = arr[largest]
            ][0x0];
            maxHeapify(largest);
        }
    };
    for (let i = Math['floor'](arr['length'] / 0x2); ITfFVx['CvKZt'](i, 0x0); i--)
        ITfFVx['rZvFW'](maxHeapify, i);
}