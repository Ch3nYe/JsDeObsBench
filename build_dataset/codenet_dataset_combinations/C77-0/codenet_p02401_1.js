process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
    var input = chunk.split("\n");
    var output = "";
    
    for(var i = 0; i < input.length; i ++){
        var r = calc(input[i]);
        if(r !== false){
            console.log(r);
        }
    }
    
    function calc(input){
        var nums = input.split(" ");
        nums[0] = Number(nums[0]);
        nums[2] = Number(nums[2]);
        if(nums[1] == "+"){
            return nums[0] + nums[2];
        }
        else if(nums[1] == "-"){
            return nums[0] - nums[2];
        }
        else if(nums[1] == "*"){
            return nums[0] * nums[2];
        }
        else if(nums[1] == "/"){
            return nums[0] / nums[2];
        }
        else if(nums[1] == "?"){
            return false;
        }
        
    }
});