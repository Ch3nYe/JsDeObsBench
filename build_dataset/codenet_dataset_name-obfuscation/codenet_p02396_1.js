var input = "";
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
    input += chunk;
});
process.stdin.on('end', function (){
    var nums = input.split("\n");
    var output = "";
    
    for(var i = 0; i < nums.length; i ++){
        nums[i] = Number(nums[i]);
        if(nums[i] == 0){
            break;
        }
        output += "Case " + (i + 1) + ": " + nums[i] + "\n"; 
    }
    console.log(output);
});