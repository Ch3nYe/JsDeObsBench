m = ('' + require('fs')['readFileSync'](0x0))['split']`
`;
n = m[a = 0x0];
s = m[0x1];
for (b = 0x1 << n; b--;) {
    u = 0x0;
    for (i = n; i--;)
        u = b & 0x1 << i ? s[i] + u : u + s[i];
    m[u] = -~m[u];
}
for (b = 0x1 << n; b--;) {
    u = 0x0;
    for (i = n; i--;)
        u = b & 0x1 << i ? s[0x2 * n + ~i] + u : u + s[0x2 * n + ~i];
    a += ~~m[u];
}
console['log'](a);