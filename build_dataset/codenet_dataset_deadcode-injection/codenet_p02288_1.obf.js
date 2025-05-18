function a0_0x1e18() {
    const _0x464411 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'floor',
        'length'
    ];
    a0_0x1e18 = function () {
        return _0x464411;
    };
    return a0_0x1e18();
}
function a0_0x5f38(QoZePW, key) {
    const stringArray = a0_0x1e18();
    a0_0x5f38 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5f38(QoZePW, key);
}
(function main() {
    const _0x546d42 = a0_0x5f38;
    const lines = require('fs')['readFileSync'](_0x546d42(0x0), _0x546d42(0x1))[_0x546d42(0x2)]()[_0x546d42(0x3)]('\x0a');
    lines['shift']();
    const arr = lines['shift']()['split']('\x20')[_0x546d42(0x4)](Number);
    buildMaxHeap(arr);
    console['log'](arr['reduce']((s, e) => s += '\x20' + e, ''));
}());
function buildMaxHeap(arr) {
    const _0x1adc52 = a0_0x5f38;
    const n = arr['length'];
    const maxHeapify = i => {
        let left, right, largest;
        left = 0x2 * i + 0x1;
        right = 0x2 * i + 0x2;
        largest = left < n && arr[left] > arr[i] ? left : i;
        if (right < n && arr[right] > arr[largest])
            largest = right;
        if (largest != i) {
            arr[largest] = [
                arr[i],
                arr[i] = arr[largest]
            ][0x0];
            maxHeapify(largest);
        }
    };
    for (let i = Math[_0x1adc52(0x5)](arr[_0x1adc52(0x6)] / 0x2); i >= 0x0; i--)
        maxHeapify(i);
}