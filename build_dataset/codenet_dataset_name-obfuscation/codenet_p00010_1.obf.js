require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['some'](function (_0x174a0f) {
    j = _0x174a0f['split']('\x20');
    if (j['length'] == 0x6)
        a = j[0x0], b = j[0x1], c = j[0x2], d = j[0x3], e = j[0x4], f = j[0x5], g = a * a, h = b * b, k = c * c, l = d * d, m = e * e, n = f * f, p = ((b - f) * (h - l + g - k) - (b - d) * (h - n + g - m)) / (0x2 * (b - f) * (a - c) - 0x2 * (b - d) * (a - e)), q = ((a - e) * (g - k + h - l) - (a - c) * (g - m + h - n)) / (0x2 * (a - e) * (b - d) - 0x2 * (a - c) * (b - f)), console['log'](p['toFixed'](0x3), q['toFixed'](0x3), Math['sqrt']((a - p) * (a - p) + (b - q) * (b - q))['toFixed'](0x3));
});