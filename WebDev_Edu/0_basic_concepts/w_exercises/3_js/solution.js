//
const display = document.getElementsByClassName("display")[0];
const inputs = document.getElementsByTagName("input");

let nums = [];
let ops = [];

function clear(){
    display.value="";
}

function add(){
    var temp = 0;
    for (let i = 0; i < nums.length; i++) {
        temp+=Number(nums[i]);
        console.log(temp);
    }
    console.log(temp)
    return String(temp);
}

for (let i = 0; i < inputs.length; i++) {
    switch (inputs[i].className) {

        case "clear":
            inputs[i].addEventListener("click",e=>{
                clear();
            });
            break;

        case "display":
            inputs[i].addEventListener("click",e=>{alert("display")});
            break;

        case "number":
            inputs[i].addEventListener("click",e=>{
                if (display.value == "+"){
                    clear()
                }
                display.value+=inputs[i].value;
            });
            break;

        case "operation":
            inputs[i].addEventListener("click",e=>{
                nums.push(display.value)
                ops.push(inputs[i].value)
                
                console.log(display.value, inputs[i].value)
                console.log(nums)
                console.log(ops)

                display.value=inputs[i].value;
            });
            break;

        case "equals":
            inputs[i].addEventListener("click",e=>{
                nums.push(display.value);
                display.value=add();
                nums = [];
                ops = [];
            });
            break;

        case "decimal":
            inputs[i].addEventListener("click",e=>{
                if (display.value == "+"){
                    clear()
                }
                display.value+=inputs[i].value;
            });
            break;

        default:
            break;
    }
}