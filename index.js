// on page load, write a secret messege to the browser console
document.addEventListener('DOMContentLoaded', () => {
    console.log('secret messege');
});

const clickme = (e) => { 
  //  alert('you can\'t type that');
    logNumbers(100);
};

const logNumbers = (maxNumber) => {
    for (let i = 1; i <= maxNumber; i++) {
        console.log(i);
    }
};