function main(input) {
    const pZMPlX = {
        'ZRipa': function (callee, param1) {
            return callee(param1);
        },
        'jxbci': function (x, y) {
            return x > y;
        },
        'VkLbx': function (x, y) {
            return x - y;
        },
        'tMmpC': function (callee, param1) {
            return callee(param1);
        },
        'kHVaz': function (x, y) {
            return x == y;
        }
    };
    const lines = input['trim']()['split']('\x0a');
    let [n, k] = lines[0x0]['split']('\x20');
    n = +n;
    k = pZMPlX['ZRipa'](BigInt, k);
    const towns = lines[0x1]['split']('\x20')['map'](Number);
    const visited = new Map();
    let pos = 0x1;
    while (pZMPlX['jxbci'](k, 0x0)) {
        const i = visited['get'](pos);
        if (!i) {
            visited['set'](pos, BigInt(visited['size']));
            pos = towns[pZMPlX['VkLbx'](pos, 0x1)];
            k--;
        } else {
            const cycle = pZMPlX['tMmpC'](BigInt, visited['size']) - i;
            const rest = k % cycle;
            for (let [key, value] of visited) {
                if (pZMPlX['kHVaz'](value, i + rest)) {
                    pos = key;
                    break;
                }
            }
            k = 0x0;
        }
    }
    console['log'](pos);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));