// image container color chaingin
var imgContainer = document.querySelector('.img-container');
imgContainer.style.setProperty('background-color', '#6495ed', 'important');


// text-denger color change
var textDangerElements = document.querySelectorAll('.text-danger');
textDangerElements.forEach(function(element) {
  element.style.setProperty('color', '#6495ed', 'important'); 
});



// i have added a picture in that folder.
var image = document.getElementById('iits-img');
image.src = 'shuvo.jpg'; 



// Change the copyright message
var copyrightMessage = document.getElementById('iits-cr-msg');
copyrightMessage.textContent = '2023 KKRS'; 



// button text color
var button = document.getElementById('iits-btn');
button.classList.add('btn-primary'); 



// Modifing the text information 
document.getElementById('iits-name').textContent = 'Krishna Kamol Roy Shuvo';
document.getElementById('iits-prof').textContent = 'graduation student';
document.getElementById('iits-edu').textContent = 'Computer Science and Engineering';
document.getElementById('iits-study').textContent = 'IUBAT';
document.getElementById('iits-school').textContent = 'Rangpur Zila School, Rangpur';
document.getElementById('iits-passion').textContent = 'Full-stack-development';
document.getElementById('iits-numYears').textContent = 'almost 1 year';
document.getElementById('iits-hobby').textContent = 'reading books and travelling';
document.getElementById('iits-crc').textContent = 'a debater from school life';
document.getElementById('iits-ability').textContent = 'to think diversively and give me that ability to take proper decisions';
document.getElementById('iits-goal').textContent = 'make the internet more safe and more interective';



// Change the social media links
document.getElementById('iits-fb-link').href = 'https://www.facebook.com/profile.php?id=100077189773064'; 
document.getElementById('iits-email').href = 'mailto:kk.roy.shuvo@gmail.com'; 
document.getElementById('iits-github-link').href = 'https://github.com/KKRoyShuvo'; 



// button padding color
var button = document.getElementById('iits-btn');
button.classList.remove('btn-danger'); 
button.style.backgroundColor = '#6495ed';