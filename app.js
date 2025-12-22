'use strict';

const switcher= document.querySelector('#myButton');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    
    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark Mode";
    } else {
        this.textContent = "Light Mode";
    }
    console.log('current class name:', className);
});