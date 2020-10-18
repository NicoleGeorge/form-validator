const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// INPUT ERROR MESSAGE

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
}

// EVENT LISTENERS

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //   console.log('submit'); working!!
  //   console.log(username.value); woot-woot
  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
});
