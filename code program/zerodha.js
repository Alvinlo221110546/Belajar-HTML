const button1 = document.querySelector('.button');
button1.addEventListener('mouseover', function() {
  button1.classList.add('active');
});

button1.addEventListener('mouseout', function() {
  button1.classList.remove('active');
});

const heading = document.querySelector('#main-heading');
heading.addEventListener('mouseover', function () {
  heading.style.animation = 'wiggle 0.5s ease-in-out';
});

heading.addEventListener('animationend', function () {
  heading.style.animation = '';
});


const button2 = document.querySelector('#sig_link');
button2.addEventListener('mouseover', function () {
  button2.style.animation = 'wiggle 0.5s ease-in-out';
});

button2.addEventListener('animationend', function () {
  button2.style.animation = '';
});
