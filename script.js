const form = document.getElementById('form');

form.addEventListener('submit', e =>{
  e.preventDefault();
  //consts 
  const firstName = form['firstname'].value;
  const lastName = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;
  //check for errors in each const separately
  if (firstName === '') {
    addErrorTo('firstname', 'First Name cannot be empty');
  }else {
    removeErrorForm('firstname');
  }

  if (lastName === '') {
    addErrorTo('lastname', 'Last Name cannot be empty');
  }else {
    removeErrorForm('lastname');
  }

  if (email === '') {
    addErrorTo('email', 'Email cannot be empty');
  }else if (!isValid(email)) {
    addErrorTo('email', 'Looks like this is not an email');
  }else {
    removeErrorForm('email');
  }

  if (password === '') {
    addErrorTo('password', 'Password cannot be empty');
  }else {
    removeErrorForm('password');
  }
});
// add the error message
function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add('error');

  const small = formControl.querySelector('small');
  small.innerText = message;
}
// remove the error message
function removeErrorForm(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove('error');
}

// checking email input validity
function isValid(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); 
}