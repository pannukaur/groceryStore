const storeName = 'Gucci';
document.title = `${storeName} Grocery Store`;
console.log('What is a document:', document.all[24]);
console.log('tag element:',document.getElementsByTagName('p'));
let h1_OfHeader = document.getElementById('mainIntro');
// console.log(h1_OfHeader);

h1_OfHeader.innerHTML ='Welcome';

const getAllNavListClass = document.querySelectorAll('.nav_list_item');
console.log('headers:',
getAllNavListClass);

const getIconCredit = document.querySelector('#iconsCredit');
const testDifference = document.getElementById('iconsCredit');
console.log('get the id:', getIconCredit);
console.log(testDifference);

const getClasses = document.getElementsByClassName('nav_list_item');
console.log(getClasses);

const imageExample = document.querySelector('img[alt="cherry icon"]');
console.log(imageExample);

const magicButton = document.getElementById('magic');
console.log(magicButton);

magicButton.addEventListener('mouseover', () => {
magicButton.className = 'myPoint';
magicButton.style.backgroundColor = "#000";
console.log(magicButton);
});

magicButton.addEventListener('mouseleave', () => {
    magicButton.className ="";
    console.log('leaving:', magicButton);
});

document.addEventListener('keyup', ()=> {
    console.log(event.keycode);
});
const button = document.getElementById('content');

button.addEventListener('mouseover', () =>{
    button.style.backgroundColor = "blue";
    console.log('hi');
})
