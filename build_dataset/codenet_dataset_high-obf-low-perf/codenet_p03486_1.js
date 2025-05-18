function main(input){
  var lines = input.split('\n');
  var s = lines[0].split(""); // change to array
  var t = lines[1].split("");
  s = s.sort().join();
  t = t.sort().reverse().join();

  s < t ? console.log("Yes") : console.log("No");
  
}
main(require('fs').readFileSync('/dev/stdin', 'UTF-8'));