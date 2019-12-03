window.onload = () => {
    // All code goes here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

}

function simpleFunction(){
    console.log("functions should consist of statements designed to perform a single");
    simpleFunctionDisplay.textContent = "simple";

}

function functionParameters(value){
    console.log(value) ;
}
function functionReturn(){
    return "many functions return values.";

}
function add(a, b){
    const addResult = a + b;
    console.log('Inside add', addResult);
    return addResult;

}
simpleFunction();

functionParameters('Many Functions take parameters.');
const addResult = add(2, 3);
console.log('Add Result', addResult)
const returnValue = functionReturn(addResult);

add(2, 3);
console.log(result);