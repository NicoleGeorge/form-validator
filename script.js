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

// EMAIL VALID FUNCTION
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
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
