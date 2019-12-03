window.onload = () => {

    const simpleObject = document.getElementById('simpleObjectDisplay');
    simpleObjectDisplay.textContent = 'footbar'

const simpleObject = {
    firstName: 'Jamal',
    lastName: 'Tahlil',
    sayName:function() {
        console.log(this.firstName + "" + this.lastName);
    }
};

simpleObject.dynamicMethod = () => {
    console.log("Dynamic Method")
}

function FunctionObject() {
    FunctionObject.prototype.sayName = function(){
        console.log('Function Object')
    }
};
}