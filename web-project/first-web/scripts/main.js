let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello Smartisan!';

document.querySelector('a').onclick = function() {
    alert('确认跳转。');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/R1.png') {
      myImage.setAttribute('src', 'images/smartisan.jpg');
    } else {
      myImage.setAttribute('src', 'images/R1.png');
    }
}


function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Hello Smartisan，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的加油口号');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;