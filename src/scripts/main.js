'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('#id-checkbox').addEventListener('click',
  function(event) {
    document.getElementById('output-box').innerHTML += 'Thank YOU!!!';
    event.preventDefault();
  }, false);
