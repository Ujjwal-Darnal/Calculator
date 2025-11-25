const display = document.querySelector("#display");
const buttons = document.querySelectorAll("input[type=button]");

buttons.forEach(btn =>{
    btn.addEventListener("click",()=>{
        let value = btn.value;

        //for Ac: to clear display
        if(value==="AC"){
            display.value = "";
        }
        //del : to delete
        else if(value==="DEL"){
            display.value = display.value.slice(0,-1);
        }
        //=: for the calculation
        else if(value==="="){
            if(display.value != ""){
                try{
                    display.value = eval(display.value);
                }
                catch{
                    display.value="Error";
                }
            }
        }

        // for the numbers and the operators

        else{
            display.value+= value;
        }

    });
});