let result = document.getElementById("result");

// var clear = document.getElementById("clear");
// clear.addEventListener('click', function(event) {
//     document.getElementById("result").innerHTML = "";  
// });


let buttons = document.querySelectorAll("button");
let newResult = "";
for(item of buttons){
    item.addEventListener("click", function (event){
        button_text = event.target.innerText;
        console.log("Button text is: ", button_text);
        if(button_text === 'X'){
            button_text = '*';
            newResult += button_text;
            result.value = newResult;
        }
        else if(button_text === "clr"){
            newResult = "";
            result.value = newResult;
        }
        else if(button_text === "del"){
            newResult = String(newResult).slice(0, -1);
            result.value = newResult;
        }
        else if(button_text === "="){
            newResult = eval(newResult);
            result.value = newResult;
        }
        else if(button_text === "X 2"){
            button_text ="**2";
            newResult += button_text;
            result.value = newResult;
        }
        else{
            newResult += button_text;
            result.value = newResult;
        }

    });
}