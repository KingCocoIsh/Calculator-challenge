`use strict`
import * as DOM from './dom.js';

DOM.add_tool.onclick = () => ADD(DOM.inputOne.value, DOM.inputTwo.value);

function ADD(num1,num2){
    
    let answer1 = +num1 + +num2; 
    let child= document.createElement('Li')
    //child4.innerHTML = answer1
    child.innerHTML = num1 +""+"+"+""+num2+""+"="+answer1
    DOM.output_place_hold.appendChild(child);
    
};

DOM.sub_tool.onclick = () => SUB(DOM.inputOne.value, DOM.inputTwo.value);

function SUB(num1,num2){
    
    let answer2 = +num1 - +num2; 
    let child2= document.createElement('Li')
    //child4.innerHTML = answer2
    child2.textContent = num1 +""+"-"+""+num2+""+"="+answer2
    DOM.output_place_hold.appendChild(child2);
    
};

DOM.multi_tool.onclick = () => Multi(DOM.inputOne.value, DOM.inputTwo.value);

function Multi(num1,num2){
    
    let answer3 = +num1 * +num2; 
    let child3= document.createElement('Li')
    //child4.innerHTML = answer3
    child3.innerHTML = num1 +""+"*"+""+num2+""+"="+answer3
    DOM.output_place_hold.appendChild(child3);
    
};

DOM.div_tool.onclick = () => DIV(DOM.inputOne.value, DOM.inputTwo.value);

function DIV(num1,num2){
    
    let answer4 = +num1 / +num2; 
    let child4= document.createElement('Li')
    //child4.innerHTML = answer4
    child4.innerHTML = num1 +""+"-"+""+num2+""+"="+answer4 // displays num1 - num 2 = answer 4
    DOM.output_place_hold.appendChild(child4); // appends new element to page
    
};


