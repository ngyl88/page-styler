/*function updateClassToSmaller() {
    console.log('Log: inside function updateClassToSmaller()');
    document.body.className='smaller';
}

function updateClassToBigger() {
    console.log('Log: inside function updateClassToBigger()');
    document.body.className='bigger';
}

function updateClassToNothing() {
    console.log('Log: inside function updateClassToNothing()');
    document.body.className='';
}*/

function updateClass(className) {
    console.log('The argument inside function updateClass(className) is', className);
    document.body.className=className;
}