const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// INPUT ERROR MESSAGE

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// INPUT SUCCESS MESSAGE
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
  // const small = formControl.querySelector('small');
  // small.innerText = message;
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

  if (email.value === '') {
    showError(email, 'Username is required');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Username is required');
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, 'Username is required');
  } else {
    showSuccess(password2);
  }
});
