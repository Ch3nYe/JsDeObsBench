function search(h) {
    var ZJomGu = {
        'wMhiE': function (x, y) {
            return x < y;
        },
        'QWRrj': function (x, y) {
            return x == y;
        }
    };
    var is_start = ![];
    for (var i = 0x0; ZJomGu['wMhiE'](i, h['length']); i++) {
        if (is_start) {
            if (ZJomGu['QWRrj'](h[i], 0x0)) {
                break;
            }
            h[i] -= 0x1;
        } else {
            if (h[i] == 0x0) {
                continue;
            }
            is_start = !![];
            h[i] -= 0x1;
        }
    }
    return h;
}
function main(arg) {
    var AdqBCE = {
        'PiiGu': function (callee, param1) {
            return callee(param1);
        },
        'yRePf': function (x, y) {
            return x == y;
        }
    };
    var h = arg['split']('\x0a')[0x1]['split']('\x20')['map'](e => Number(e));
    var arr = [];
    var i = 0x0;
    for (i = 0x1;; i++) {
        h = AdqBCE['PiiGu'](search, h);
        if (AdqBCE['yRePf'](h[0x0], 0x0)) {
            var b = h['filter']((x, i, self) => self['indexOf'](x) === i);
            if (AdqBCE['yRePf'](b['length'], 0x1)) {
                break;
            }
        }
    }
    console['log'](i);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));