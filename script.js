document.querySelectorAll('.checkbullet').forEach(img => img.src = './assets/images/icon-list.svg');
document.getElementById('illustration').src = './assets/images/illustration-sign-up-mobile.svg';
function handleSubmit() {
  let email = getElementById('email').value;
    
  document.getElementById('useremail').innerHTML = email;
}

function openSuccess() {
  //open up success message
  
}

function dismiss() {
  //revert to previous page
  

}