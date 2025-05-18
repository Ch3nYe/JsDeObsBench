(function(input) {
  var lines = input.split("\n");
  var colors = [
    ['black', 0x00, 0x00, 0x00],
    ['blue', 0x00, 0x00, 0xff],
    ['lime', 0x00, 0xff, 0x00],
    ['aqua', 0x00, 0xff, 0x00],
    ['red', 0xff, 0x00, 0x00],
    ['fuchsia', 0xff, 0x00, 0xff],
    ['yellow', 0xff, 0xff, 0x00],
    ['white', 0xff, 0xff, 0xff],
  ];
  for (var i = 0; i < lines.length; ++i) {
    if (lines[i][0] === '#') {
      var best_color;
      var min_d = 3 * 256 * 256 + 1;
      var r = parseInt(lines[i].substr(1, 2), 16);
      var g = parseInt(lines[i].substr(3, 2), 16);
      var b = parseInt(lines[i].substr(5, 2), 16);
      for (var j = 0; j < colors.length; ++j) {
        var d = Math.pow(r - colors[j][1], 2) + Math.pow(g - colors[j][2], 2) + Math.pow(b - colors[j][3], 2);
        if (d < min_d) {
          min_d = d;
          best_color = colors[j][0];
        }
      }
      console.log(best_color);
    }
  }
})(require('fs').readFileSync('/dev/stdin', 'utf8').trim());