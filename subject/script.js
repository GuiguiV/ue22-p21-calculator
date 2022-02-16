// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

let current_var = 0;
let old_var = 0;
let current_op = undefined;

function type_number(number){
    
    let scr = document.getElementById("calculator__display");
    current_var = current_var*10 + number;
    scr.textContent = current_var.toString();
}


function operator(op){
    let scr = document.getElementById("calculator__display");
    old_var = current_var;
    current_var = 0;
    scr.textContent = current_var.toString();
    current_op = op;
    console.log(op);
}

function calculate(){
    let scr = document.getElementById("calculator__display");

    switch(current_op){
        case "+":
            current_var = current_var + old_var;
            break;
        case "-":
            current_var = old_var - current_var;
            break;
        case '&times;':
            current_var = old_var * current_var;
            break;
        case "÷":
            current_var = old_var / current_var;
            break;

    }
    current_op = undefined;
    scr.textContent = current_var.toString();
    old_var =  0;
}

function clear(){
    let scr = document.getElementById("calculator__display");

    current_var = 0;
    scr.textContent = current_var.toString();

}

function start(){
    buttons = document.getElementsByTagName("button");
    for(let button of buttons){
        if(button.className == 'key--operator'){
            button.addEventListener('click',
            () => operator(button.innerHTML));
            console.log(button.innerHTML);
        }else if(button.className == 'key--equal'){
            button.addEventListener('click',calculate);
        }else if(button.getAttribute('data-action') == "clear"){
            button.addEventListener('click',clear);

        }
        else{
            button.addEventListener('click',
            () => type_number(parseInt(button.textContent)))
            console.log("added event to ")
            console.log(button)
        }

    }
}

window.addEventListener('load',start);